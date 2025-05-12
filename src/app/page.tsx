'use client';

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

type DuckDuckGoItem = {
  Text: string;
  FirstURL: string;
};

type Result = {
  id: number;
  title: string;
  description: string;
};

export default function Page() {
  const [, setSearchQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);

  const handleSearch = async (query: string) => {
    console.log('Search query:', query);
    setSearchQuery(query);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      const formattedResults = (data as DuckDuckGoItem[]).map((item, index) => ({
        id: index,
        title: item.Text || 'No title',
        description: item.FirstURL || 'No description available',
      }));

      setResults(formattedResults);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Secure & Smart Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ResultsList results={results} />
    </main>
  );
}
