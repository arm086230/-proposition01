'use client';

import React, { useState } from 'react';
import Input from '../components/input';

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="App">
            <Input
                type="text"
                placeholder="Enter text"
                value={inputValue}
                size="large"
                label="My Input"
                onChange={handleChange}
            />
        </div>
    );
}

export default App;
