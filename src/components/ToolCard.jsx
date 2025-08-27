
export function ToolCard({ tool }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="text-lg font-bold mb-2">{tool.name}</h4>
      <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">
        Visit Tool →
      </a>
    </div>
  );
}
