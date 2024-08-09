import React, { useState, ChangeEvent, FormEvent } from 'react';

interface GuessInputProps {
  onGuess: (guess: string) => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess}) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.length > 0) {
      onGuess(input.toUpperCase());
      setInput('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regInput = e.target.value.replace(/[^a-zA-Z]/, '');
    setInput(regInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        maxLength={5} // Adjust based on word length
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuessInput;
