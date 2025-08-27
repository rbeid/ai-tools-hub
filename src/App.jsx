import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Sticky Navbar
function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">AI Tools Hub</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/tool1" className="hover:text-blue-500 transition">Text Generator</Link>
        <Link to="/tool2" className="hover:text-blue-500 transition">Image Generator</Link>
      </div>
    </nav>
  );
}

// Home Page (Landing)
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 pt-24">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-6 text-center"
      >
        Welcome to AI Tools Hub
      </motion.h1>
      <p className="text-lg mb-10 text-center max-w-2xl">
        Explore AI-powered tools for text generation, image creation, and more.
        Designed to make your work easier and more creative.
      </p>
      <div className="flex gap-6">
        <Link
          to="/tool1"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Try Text Generator
        </Link>
        <Link
          to="/tool2"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Try Image Generator
        </Link>
      </div>
    </div>
  );
}

// Tool 1 Page
function Tool1Page() {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 pt-24">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">AI Text Generator</h2>
      <textarea
        className="w-full max-w-lg p-4 rounded-lg border shadow-sm"
        placeholder="Type your prompt here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Generate
      </button>
    </div>
  );
}

// Tool 2 Page
function Tool2Page() {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 pt-24">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">AI Image Generator</h2>
      <input
        className="w-full max-w-lg p-4 rounded-lg border shadow-sm"
        placeholder="Describe the image you want..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
        Generate
      </button>
    </div>
  );
}

// App
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool1" element={<Tool1Page />} />
        <Route path="/tool2" element={<Tool2Page />} />
      </Routes>
    </Router>
  );
}
