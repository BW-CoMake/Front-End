import { useState } from 'react';

export default function useInput(initialValue) {
    const [input, setInput] = useState(initialValue);
    const handleChange = (updatedValue => setInput(updatedValue));
    return [input, setInput, handleChange]
}