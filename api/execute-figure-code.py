"""
Vercel Serverless Function: Execute AI-Generated Python Code for Figure Generation

This endpoint receives:
1. AI-generated Python code (matplotlib/seaborn)
2. CSV data to visualize

The AI generates custom figure code based on:
- The specific data columns and types
- The paper's research questions
- The analysis requirements

Security: Only allows matplotlib/seaborn/pandas/numpy imports
Returns: Base64-encoded PNG figures

Endpoint: POST /api/execute-figure-code
"""

from http.server import BaseHTTPRequestHandler
import json
import io
import base64
import sys
import traceback
from io import StringIO

# Import visualization libraries (pre-imported for the executed code)
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend for serverless
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np


class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        try:
            # Read request body
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode('utf-8'))

            python_code = data.get('code', '')
            csv_content = data.get('csvContent', '')

            if not python_code:
                self.send_error_response('No Python code provided')
                return

            if not csv_content:
                self.send_error_response('No CSV content provided')
                return

            print(f"[Execute] Received {len(python_code)} chars of Python code")
            print(f"[Execute] CSV content: {len(csv_content)} chars")

            # Security check: validate the code doesn't contain dangerous operations
            dangerous_patterns = [
                'import os', 'import sys', 'import subprocess', 'import socket',
                '__import__', 'eval(', 'exec(', 'compile(', 'open(',
                'file(', 'input(', 'raw_input(',
                'os.', 'sys.', 'subprocess.', 'socket.',
                '__builtins__', '__code__', '__globals__',
                'shutil', 'pathlib', 'glob', 'tempfile',
                'pickle', 'marshal', 'shelve',
                'requests', 'urllib', 'http.client',
            ]

            code_lower = python_code.lower()
            for pattern in dangerous_patterns:
                if pattern.lower() in code_lower:
                    self.send_error_response(f'Security error: forbidden pattern "{pattern}" detected')
                    return

            # Set up matplotlib defaults
            plt.style.use('seaborn-v0_8-whitegrid')
            plt.rcParams.update({
                'font.size': 11,
                'axes.titlesize': 12,
                'axes.labelsize': 11,
                'xtick.labelsize': 10,
                'ytick.labelsize': 10,
                'legend.fontsize': 10,
                'figure.titlesize': 13,
                'figure.dpi': 150,
                'savefig.dpi': 150,
                'savefig.bbox': 'tight',
                'savefig.pad_inches': 0.1
            })

            # Read CSV into DataFrame
            df = pd.read_csv(StringIO(csv_content))
            print(f"[Execute] DataFrame shape: {df.shape}")
            print(f"[Execute] Columns: {list(df.columns)}")

            # Prepare the execution environment with safe globals
            # The generated_figures list will be populated by the executed code
            generated_figures = []

            def save_figure(fig, filename, description):
                """Helper function for the AI code to save figures"""
                buf = io.BytesIO()
                fig.savefig(buf, format='png', dpi=150, bbox_inches='tight')
                buf.seek(0)
                png_base64 = base64.b64encode(buf.read()).decode('utf-8')
                buf.close()
                plt.close(fig)
                generated_figures.append({
                    'filename': filename,
                    'base64': png_base64,
                    'description': description
                })
                print(f"[Execute] Saved figure: {filename}")

            # Safe execution environment
            safe_globals = {
                '__builtins__': {
                    'len': len, 'range': range, 'enumerate': enumerate,
                    'zip': zip, 'map': map, 'filter': filter,
                    'sorted': sorted, 'reversed': reversed,
                    'min': min, 'max': max, 'sum': sum, 'abs': abs,
                    'round': round, 'int': int, 'float': float, 'str': str,
                    'list': list, 'dict': dict, 'tuple': tuple, 'set': set,
                    'True': True, 'False': False, 'None': None,
                    'print': print, 'isinstance': isinstance, 'type': type,
                    'hasattr': hasattr, 'getattr': getattr,
                    'Exception': Exception, 'ValueError': ValueError,
                    'TypeError': TypeError, 'KeyError': KeyError,
                },
                # Data analysis libraries
                'pd': pd,
                'np': np,
                'plt': plt,
                'sns': sns,
                'matplotlib': matplotlib,
                # Data
                'df': df,
                'DataFrame': pd.DataFrame,
                'Series': pd.Series,
                # Helper function
                'save_figure': save_figure,
                # IO for any string operations
                'StringIO': StringIO,
                'io': io,
                'base64': base64,
            }

            # Execute the AI-generated code
            try:
                exec(python_code, safe_globals)
            except Exception as exec_error:
                print(f"[Execute] Code execution error: {exec_error}")
                traceback.print_exc()
                self.send_error_response(f'Code execution error: {str(exec_error)}')
                return

            # Close any remaining open figures
            plt.close('all')

            print(f"[Execute] Generated {len(generated_figures)} figures")

            self.send_success_response({
                'success': True,
                'figures': generated_figures,
                'count': len(generated_figures),
                'dataShape': {'rows': df.shape[0], 'columns': df.shape[1]}
            })

        except Exception as e:
            print(f"[Execute] Error: {e}")
            traceback.print_exc()
            self.send_error_response(str(e))

    def send_success_response(self, data):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def send_error_response(self, error_message):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        response = {'success': False, 'error': error_message}
        self.wfile.write(json.dumps(response).encode('utf-8'))
