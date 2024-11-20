'use client';

import { useState } from 'react';


interface SearchInputProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
  type?: string;
  min?: number;
}

export function SearchInput({ icon, label, value, onChange, options, type, min }: SearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white border border-white/20 hover:bg-white/20 transition-all"
      >
        {icon}
        <span className="opacity-60">{label}</span>
        <span className="ml-auto">{value || '—'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-lg p-4 z-50">
          {options ? (
            <div className="flex flex-col gap-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className="text-left px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-700"
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            <input
              type={type || 'text'}
              min={min}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          )}
        </div>
      )}
    </div>
  );
} 