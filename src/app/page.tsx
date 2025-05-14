'use client';

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import  ContactSection  from '../components/ContactSection';



import './style.css';
 
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
  const [results, setResults] = useState<Result[]>([]);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      const formattedResults = (data as DuckDuckGoItem[]).map((item, index) => ({
        id: index,
        title: item.Text || 'No title',
        description: item.FirstURL || '',
      }));

      setResults(formattedResults);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    }
  };

  return (
    <main className="p-4 min-h-screen min-w-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Secure & Smart Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ResultsList results={results} />

        <ContactSection />
       
    </main>
  );


}
