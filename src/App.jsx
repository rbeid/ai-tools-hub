
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);

  const quickLinks = [
    {
      name: "AI Writer",
      desc: "Generate content quickly with AI-powered writing tools.",
      link: "#",
      img: "https://via.placeholder.com/400x200?text=AI+Writer",
    },
    {
      name: "Image Generator",
      desc: "Create stunning AI-generated images instantly.",
      link: "#",
      img: "https://via.placeholder.com/400x200?text=Image+Generator",
    },
    {
      name: "Chatbot",
      desc: "Answer customer questions automatically with AI chatbots.",
      link: "#",
      img: "https://via.placeholder.com/400x200?text=Chatbot",
    },
    {
      name: "Code Assistant",
      desc: "Help write and debug code faster using AI.",
      link: "#",
      img: "https://via.placeholder.com/400x200?text=Code+Assistant",
    },
  ];

  // Floating particles
  const particles = Array.from({ length: 12 });

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 px-4">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: `${15 + i * 5}px`,
            height: `${15 + i * 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400 drop-shadow-2xl mb-6">
          🚀 AI Tools Hub
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 drop-shadow-md">
          Discover and explore powerful AI tools for productivity, creativity, and more.
        </p>
        <input
          type="text"
          placeholder="Search AI tools..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-lg px-6 py-4 rounded-full shadow-2xl text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg mb-10"
        />

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {quickLinks
            .filter(
              (tool) =>
                tool.name.toLowerCase().includes(query.toLowerCase()) ||
                tool.desc.toLowerCase().includes(query.toLowerCase())
            )
            .map((tool, idx) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2 + idx, repeat: Infinity, repeatType: "mirror" }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl text-center cursor-pointer transition-colors hover:bg-indigo-50 relative"
                onClick={() => setSelectedTool(tool)}
                onMouseEnter={() => setHoveredTool(tool)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <h3 className="font-semibold text-lg md:text-xl">{tool.name}</h3>

                {/* Hover Preview */}
                <AnimatePresence>
                  {hoveredTool === tool && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 p-4 bg-white rounded-xl shadow-lg z-20 text-left"
                    >
                      <img
                        src={tool.img}
                        alt={tool.name}
                        className="rounded-lg mb-2 w-full"
                      />
                      <p className="text-gray-600 text-sm">{tool.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 text-gray-300 text-sm z-10 text-center">
        © {new Date().getFullYear()} AI Tools Hub. Built with ❤️
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
                onClick={() => setSelectedTool(null)}
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedTool.name}</h2>
              <p className="text-gray-600 mb-4">{selectedTool.desc}</p>
              {selectedTool.img && (
                <img
                  src={selectedTool.img}
                  alt={selectedTool.name}
                  className="rounded-xl mb-4 w-full"
                />
              )}
              <motion.a
                href={selectedTool.link}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(99,102,241,0.5)" }}
                className="block text-center bg-indigo-500 text-white rounded-full py-3 px-6 hover:bg-indigo-600 transition-all"
              >
                Go to Tool
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
