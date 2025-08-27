
import { useState } from "react";
import { ToolCard } from "./components/ToolCard";
import tools from "./data/tools";

export default function App() {
  const [search, setSearch] = useState("");
  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">AI Tools Hub</h1>
        <nav>
          <a href="#directory" className="mr-6 hover:text-indigo-600">Directory</a>
          <a href="#blog" className="mr-6 hover:text-indigo-600">Blog</a>
          <a href="#newsletter" className="hover:text-indigo-600">Newsletter</a>
        </nav>
      </header>

      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Discover the Best AI Tools of 2025</h2>
        <p className="text-lg max-w-2xl mx-auto">Curated list of AI tools to boost productivity, creativity, and automation. Updated weekly.</p>
      </section>

      <section id="directory" className="p-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">AI Tools Directory</h3>
        <input
          type="text"
          placeholder="Search tools..."
          className="w-full p-3 border rounded-lg mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (<ToolCard key={tool.name} tool={tool} />))}
        </div>
      </section>

      <section id="blog" className="p-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Guides & Blog</h3>
        <div className="space-y-4">
          <a href="#" className="block p-4 bg-white shadow rounded-lg hover:bg-gray-50">Best AI Writing Tools in 2025</a>
          <a href="#" className="block p-4 bg-white shadow rounded-lg hover:bg-gray-50">How to Automate Your Small Business with AI</a>
          <a href="#" className="block p-4 bg-white shadow rounded-lg hover:bg-gray-50">10 Free AI Tools You Should Try Today</a>
        </div>
      </section>

      <section id="newsletter" className="p-8 bg-indigo-600 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join 1,000+ readers getting AI updates</h3>
        <form className="flex flex-col md:flex-row justify-center max-w-md mx-auto">
          <input type="email" placeholder="Your email" className="p-3 rounded-md text-gray-900 mb-3 md:mb-0 md:mr-3 flex-1" />
          <button className="bg-purple-500 hover:bg-purple-700 p-3 rounded-md">Subscribe</button>
        </form>
      </section>

      <footer className="p-6 text-center bg-white shadow-inner mt-8">
        <p>© {new Date().getFullYear()} AI Tools Hub. Built for automation enthusiasts.</p>
      </footer>
    </div>
  );
}
