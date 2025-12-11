import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept = ".txt",
  multiple = false,
  required = false,
  file,
  onFileSelect
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    onFileSelect(selectedFile);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${
        file
          ? 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
      }`}
    >
      <div className="flex items-center gap-2">
        <Upload size={16} className={file ? 'text-emerald-600' : 'text-slate-400'} />
        <span className="text-sm">
          {file ? file.name : label}
          {required && !file && <span className="text-red-500 ml-1">*</span>}
        </span>
      </div>

      {file ? (
        <button
          onClick={handleClear}
          className="p-1 hover:bg-emerald-200 rounded"
        >
          <X size={16} className="text-emerald-600" />
        </button>
      ) : (
        <span className="text-xs text-slate-400">Click to select</span>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUpload;
