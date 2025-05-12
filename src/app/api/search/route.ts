import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
    const data = await response.json();

    return NextResponse.json(data.RelatedTopics);
  }catch (error) {
  console.error('DuckDuckGo API call failed:', error);
  return NextResponse.json({ error: 'DuckDuckGo API call failed' }, { status: 500 });
}

}
