export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Secure & Smart Search",
            url: "https://yourdomain.com",
            description: "AI-powered open data search for academic and open datasets",
          }),
        }}
      />
      <main>
        {/* Your main content here */}
      </main>
    </>
  );
}
