import React from 'react';

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-lg">
            AI
          </div>
          <h1 className="text-xl font-bold text-white">Prompt<span className="text-indigo-400">Vault</span></h1>
        </div>
        <input
          type="text"
          placeholder="Search prompts or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-80 bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </nav>
  );
}