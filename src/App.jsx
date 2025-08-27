
import { useState } from "react";

export default function LandingPage() {
  const allTools = [
    { name: "AI Writer", desc: "Generate content quickly", link: "#" },
    { name: "Chatbot", desc: "Answer customer questions", link: "#" },
    { name: "Image Generator", desc: "Create AI-powered images", link: "#" },
    { name: "Code Assistant", desc: "Help write & debug code", link: "#" },
    { name: "Voice-to-Text", desc: "Convert speech to text instantly", link: "#" },
    { name: "Research Summarizer", desc: "Summarize long articles fast", link: "#" },
  ];

  const [query, setQuery] = useState("");

  // Filter tools based on search input
  const filteredTools = allTools.filter((tool) =>
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    tool.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">🚀 AI Tools Hub</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Discover and explore powerful AI tools to boost your productivity, creativity, and business.
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search AI tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-black focus:outline-none shadow"
          />
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Featured Tools</h2>
        {filteredTools.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.link}
                className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold">{tool.name}</h3>
                <p className="text-gray-600 mt-2">{tool.desc}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            ❌ No tools found for "<span className="font-semibold">{query}</span>"
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} AI Tools Hub. Built with ❤️</p>
      </footer>
    </div>
  );
}

