"""
Vercel Serverless Function: Python Data Analysis (Lightweight)

Analyzes CSV data files and returns statistical summaries.
Uses only Python standard library to stay under Vercel's 250MB limit.

Endpoint: POST /api/analyze-data
"""

from http.server import BaseHTTPRequestHandler
import json
import csv
import io
import math
from collections import Counter


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

            csv_content = data.get('csvContent', '')
            analysis_type = data.get('analysisType', 'descriptive')

            if not csv_content:
                self.send_error_response('No CSV content provided')
                return

            # Parse CSV using standard library
            reader = csv.DictReader(io.StringIO(csv_content))
            rows = list(reader)
            columns = reader.fieldnames or []

            if not rows:
                self.send_error_response('CSV file is empty or has no data rows')
                return

            result = {
                'success': True,
                'summary': {},
                'figures': [],  # Will contain chart data for frontend rendering
                'chart_data': []  # Data for frontend chart libraries
            }

            # Basic info
            result['summary']['shape'] = {'rows': len(rows), 'columns': len(columns)}
            result['summary']['columns'] = columns

            # Identify column types by sampling data
            numeric_cols = []
            categorical_cols = []

            for col in columns:
                values = [row.get(col, '') for row in rows[:100]]  # Sample first 100
                numeric_count = sum(1 for v in values if self.is_numeric(v))
                if numeric_count > len(values) * 0.7:  # 70% numeric threshold
                    numeric_cols.append(col)
                else:
                    categorical_cols.append(col)

            result['summary']['numeric_columns'] = numeric_cols
            result['summary']['categorical_columns'] = categorical_cols

            # Descriptive statistics for numeric columns
            if numeric_cols:
                desc_stats = {}
                missing_values = {}

                for col in numeric_cols:
                    values = []
                    missing = 0
                    for row in rows:
                        val = row.get(col, '')
                        if val == '' or val is None:
                            missing += 1
                        else:
                            try:
                                values.append(float(val))
                            except (ValueError, TypeError):
                                missing += 1

                    if values:
                        stats = self.calculate_stats(values)
                        desc_stats[col] = stats

                        # Add histogram data for frontend charting
                        result['chart_data'].append({
                            'type': 'histogram',
                            'column': col,
                            'data': self.create_histogram_data(values, 20),
                            'stats': stats
                        })

                    missing_values[col] = missing

                result['summary']['descriptive_stats'] = desc_stats
                result['summary']['missing_values'] = missing_values

                # Correlation matrix for numeric columns
                if len(numeric_cols) >= 2:
                    corr_matrix = self.calculate_correlation_matrix(rows, numeric_cols[:10])
                    result['summary']['correlation_matrix'] = corr_matrix
                    result['chart_data'].append({
                        'type': 'heatmap',
                        'columns': numeric_cols[:10],
                        'data': corr_matrix
                    })

            # Categorical summaries
            if categorical_cols:
                cat_summary = {}
                for col in categorical_cols[:5]:  # Limit to first 5
                    values = [row.get(col, '') for row in rows if row.get(col, '')]
                    counter = Counter(values)
                    top_10 = dict(counter.most_common(10))
                    cat_summary[col] = top_10

                    # Add bar chart data for frontend
                    result['chart_data'].append({
                        'type': 'bar',
                        'column': col,
                        'data': top_10
                    })

                result['summary']['categorical_summary'] = cat_summary

            # Statistical tests if requested
            if analysis_type in ['inferential', 'full'] and len(numeric_cols) >= 2:
                # Calculate correlation between first two numeric columns
                col1, col2 = numeric_cols[0], numeric_cols[1]
                x_vals, y_vals = [], []
                for row in rows:
                    try:
                        x = float(row.get(col1, ''))
                        y = float(row.get(col2, ''))
                        x_vals.append(x)
                        y_vals.append(y)
                    except (ValueError, TypeError):
                        continue

                if len(x_vals) > 2:
                    corr = self.pearson_correlation(x_vals, y_vals)
                    n = len(x_vals)
                    # Approximate p-value using t-distribution
                    if abs(corr) < 1:
                        t_stat = corr * math.sqrt(n - 2) / math.sqrt(1 - corr**2)
                        # Rough p-value approximation
                        p_value = 2 * (1 - self.t_cdf_approx(abs(t_stat), n - 2))
                    else:
                        p_value = 0.0

                    result['summary']['correlation_test'] = {
                        'variables': [col1, col2],
                        'correlation': round(corr, 4),
                        'p_value': round(p_value, 4),
                        'n': n
                    }

                    # Add scatter plot data
                    result['chart_data'].append({
                        'type': 'scatter',
                        'x_column': col1,
                        'y_column': col2,
                        'data': list(zip(x_vals[:500], y_vals[:500])),  # Limit points
                        'correlation': round(corr, 4)
                    })

            # Generate text summary for AI
            result['text_summary'] = self.generate_text_summary(result['summary'], len(rows))

            self.send_success_response(result)

        except Exception as e:
            self.send_error_response(str(e))

    def is_numeric(self, value):
        """Check if a value is numeric"""
        if value == '' or value is None:
            return False
        try:
            float(value)
            return True
        except (ValueError, TypeError):
            return False

    def calculate_stats(self, values):
        """Calculate descriptive statistics for a list of numeric values"""
        n = len(values)
        if n == 0:
            return {}

        sorted_vals = sorted(values)
        mean = sum(values) / n

        # Variance and std dev
        variance = sum((x - mean) ** 2 for x in values) / n if n > 0 else 0
        std = math.sqrt(variance)

        # Percentiles
        def percentile(p):
            k = (n - 1) * p / 100
            f = math.floor(k)
            c = math.ceil(k)
            if f == c:
                return sorted_vals[int(k)]
            return sorted_vals[int(f)] * (c - k) + sorted_vals[int(c)] * (k - f)

        return {
            'count': n,
            'mean': round(mean, 4),
            'std': round(std, 4),
            'min': round(sorted_vals[0], 4),
            '25%': round(percentile(25), 4),
            '50%': round(percentile(50), 4),
            '75%': round(percentile(75), 4),
            'max': round(sorted_vals[-1], 4)
        }

    def create_histogram_data(self, values, num_bins=20):
        """Create histogram bin data for frontend charting"""
        if not values:
            return []

        min_val = min(values)
        max_val = max(values)

        if min_val == max_val:
            return [{'bin_start': min_val, 'bin_end': max_val, 'count': len(values)}]

        bin_width = (max_val - min_val) / num_bins
        bins = [0] * num_bins

        for v in values:
            bin_idx = min(int((v - min_val) / bin_width), num_bins - 1)
            bins[bin_idx] += 1

        return [
            {
                'bin_start': round(min_val + i * bin_width, 4),
                'bin_end': round(min_val + (i + 1) * bin_width, 4),
                'count': count
            }
            for i, count in enumerate(bins)
        ]

    def pearson_correlation(self, x, y):
        """Calculate Pearson correlation coefficient"""
        n = len(x)
        if n != len(y) or n < 2:
            return 0

        mean_x = sum(x) / n
        mean_y = sum(y) / n

        num = sum((xi - mean_x) * (yi - mean_y) for xi, yi in zip(x, y))
        den_x = math.sqrt(sum((xi - mean_x) ** 2 for xi in x))
        den_y = math.sqrt(sum((yi - mean_y) ** 2 for yi in y))

        if den_x == 0 or den_y == 0:
            return 0

        return num / (den_x * den_y)

    def calculate_correlation_matrix(self, rows, columns):
        """Calculate correlation matrix for numeric columns"""
        # Extract numeric values for each column
        col_values = {}
        for col in columns:
            values = []
            for row in rows:
                try:
                    values.append(float(row.get(col, '')))
                except (ValueError, TypeError):
                    values.append(None)
            col_values[col] = values

        # Calculate pairwise correlations
        matrix = {}
        for col1 in columns:
            matrix[col1] = {}
            for col2 in columns:
                if col1 == col2:
                    matrix[col1][col2] = 1.0
                else:
                    # Get paired values (both non-None)
                    x, y = [], []
                    for v1, v2 in zip(col_values[col1], col_values[col2]):
                        if v1 is not None and v2 is not None:
                            x.append(v1)
                            y.append(v2)
                    if len(x) > 2:
                        matrix[col1][col2] = round(self.pearson_correlation(x, y), 4)
                    else:
                        matrix[col1][col2] = None

        return matrix

    def t_cdf_approx(self, t, df):
        """Rough approximation of t-distribution CDF for p-value calculation"""
        # Use normal approximation for large df
        if df > 30:
            # Standard normal CDF approximation
            return 0.5 * (1 + math.erf(t / math.sqrt(2)))

        # For smaller df, use a rougher approximation
        x = df / (df + t * t)
        # Incomplete beta function approximation
        return 1 - 0.5 * x ** (df / 2)

    def generate_text_summary(self, summary, num_rows):
        """Generate a text summary for the AI to use in paper generation"""
        lines = []

        shape = summary.get('shape', {})
        lines.append(f"Dataset contains {shape.get('rows', 0)} observations and {shape.get('columns', 0)} variables.")

        numeric_cols = summary.get('numeric_columns', [])
        categorical_cols = summary.get('categorical_columns', [])

        if numeric_cols:
            lines.append(f"Numeric variables ({len(numeric_cols)}): {', '.join(numeric_cols[:10])}")

            desc = summary.get('descriptive_stats', {})
            if desc:
                for col in list(desc.keys())[:5]:
                    col_stats = desc[col]
                    lines.append(
                        f"  - {col}: mean={col_stats.get('mean', 0)}, "
                        f"std={col_stats.get('std', 0)}, "
                        f"range=[{col_stats.get('min', 0)}, {col_stats.get('max', 0)}]"
                    )

        if categorical_cols:
            lines.append(f"Categorical variables ({len(categorical_cols)}): {', '.join(categorical_cols[:10])}")

            cat_summary = summary.get('categorical_summary', {})
            for col in list(cat_summary.keys())[:3]:
                top_values = list(cat_summary[col].items())[:3]
                values_str = ', '.join(f"{k}({v})" for k, v in top_values)
                lines.append(f"  - {col}: {values_str}")

        corr_test = summary.get('correlation_test')
        if corr_test:
            lines.append(
                f"Correlation between {corr_test['variables'][0]} and {corr_test['variables'][1]}: "
                f"r={corr_test['correlation']}, p={corr_test['p_value']} (n={corr_test.get('n', 'N/A')})"
            )

        return '\n'.join(lines)

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
