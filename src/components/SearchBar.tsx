'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onSearch(input);
    setIsLoading(false);
  };

  const handleClear = () => {
    setInput('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-4">
      <input
        type="text"
        placeholder="Search something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 rounded px-4 py-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      {input && (
        <button
          type="button"
          onClick={handleClear}
          className="text-red-600 border border-red-600 px-3 py-2 rounded hover:bg-red-100"
        >
          Clear
        </button>
      )}
    </form>
    
  );

 
}
