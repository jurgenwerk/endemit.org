"use client";

import { useState } from "react";

interface Props {
  name: string;
  label?: string;
  type?: "text" | "email" | "password";
  value?: string;
  onChange: (name: string, value: string) => void;
  errorMessage?: string;
  required?: boolean;
  prefix?: string;
}

export default function Input({
  name,
  label,
  type = "text",
  value = "",
  onChange,
  errorMessage,
  required = false,
  prefix,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const hasError = !!errorMessage;
  const showError = hasError && touched && !isFocused;
  const showSuccess = !hasError && value.length > 0 && touched && !isFocused;

  const getBorderColor = () => {
    if (isFocused) return "border-blue-500";
    if (showError) return "border-red-500";
    if (showSuccess) return "border-green-500";
    return "border-gray-300";
  };

  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className={`flex border-2 rounded-lg overflow-hidden transition-colors ${getBorderColor()}`}
      >
        {prefix && (
          <div className="bg-gray-100 px-3 py-2 flex items-center text-gray-600 border-r border-gray-300">
            {prefix}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={e => onChange(name, e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setTouched(true);
          }}
          className="w-full px-3 py-2 outline-none"
        />
      </div>
      {showError && (
        <p className="text-red-500 text-sm mt-1">
          {errorMessage ?? "This field has an error"}
        </p>
      )}
    </div>
  );
}
