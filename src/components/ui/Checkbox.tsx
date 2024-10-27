import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className={`rounded border-gray-300 text-blue-600 shadow-sm 
                   focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 
                   ${className}`}
        {...props}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;