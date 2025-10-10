"use client";

import { useState } from "react";

interface Props {
  name: string;
  label?: string;
  value?: boolean;
  onChange: (name: string, value: boolean) => void;
  errorMessage?: string;
  required?: boolean;
}

export default function CheckboxInput({
  name,
  label,
  value = false,
  onChange,
  errorMessage,
  required = false,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const hasError = !!errorMessage;
  const showError = hasError && touched && !isFocused;

  return (
    <div className="w-full mb-4">
      <div className="flex items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={value}
          onChange={e => onChange(name, e.target.checked)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setTouched(true);
          }}
          className="w-4 h-4 text-blue-500 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-colors"
        />
        {label && (
          <label
            htmlFor={name}
            className="ml-2 text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      {showError && (
        <p className="text-red-500 text-sm mt-1">
          {errorMessage ?? "This field is required."}
        </p>
      )}
    </div>
  );
}
