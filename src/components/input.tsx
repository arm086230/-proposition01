import React from 'react';

interface PropsInput {
    type: string;
    placeholder?: string;
    value: string;
    size?: 'small' | 'medium' | 'large';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

function Input({ type, placeholder, value, size = 'medium', onChange, label }: PropsInput) {
    let sizeClass = '';
    if (size === 'small') {
        sizeClass = 'px-2 py-1';
    } else if (size === 'medium') {
        sizeClass = 'px-4 py-2';
    } else if (size === 'large') {
        sizeClass === 'px-6 py-3';
    }

    return (
        <div className="input-container mb-4">
            {label && (
                <label className="input-label block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`input-element border rounded-md shadow-sm focus:outline-none focus:ring-2 ${sizeClass}`}
            />
        </div>
    );
}

export default Input;
