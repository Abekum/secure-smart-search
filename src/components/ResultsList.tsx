type Result = {
  id: number;
  title: string;
  description: string;
};

export default function ResultsList({ results }: { results: Result[] }) {
  if (results.length === 0) return <p>No results found.</p>;

  return (
    <ul className="grid gap-4">
      {results.map((result) => (
        <li key={result.id} className="border rounded p-4 shadow hover:bg-gray-50 transition">
          <h3 className="text-lg font-semibold">{result.title}</h3>
          <p>{result.description}</p>
        </li>
      ))}
    </ul>
  );
}
