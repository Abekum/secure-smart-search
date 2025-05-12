'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex items-center gap-2 mb-4" role="search">
      <input
        aria-label="Search"
        className="border border-gray-300 rounded px-3 py-2 w-full"
        type="text"
        placeholder="Search open data..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        aria-label="Submit search"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
