type Result = {
  id: number;
  title: string;
  description: string;
};

export default function ResultsList({ results }: { results: Result[] }) {
  if (results.length === 0) return <p>No results found.</p>;

  return (
    <ul className="grid gap-4">
      {results.map((result) => {
        // Check if description is a URL and skip it
        const isURL = result.description?.startsWith('http');
        return (
          <li key={result.id} className="border rounded p-4 shadow hover:bg-gray-50 transition bg-white">
            <h3 className="text-lg font-semibold">{result.title}</h3>
            {!isURL && <p>{result.description}</p>}
          </li>
        );
      })}
    </ul>
  );
}
