import React from 'react';

export default function Hero() {
  return (
    <div className="text-center py-10 px-4 max-w-3xl mx-auto">
      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
        ✨ Curated AI Prompts
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
        Developer Prompt <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Library</span>
      </h2>
      <p className="text-slate-400 text-sm">
        Search, filter, and copy battle-tested prompts for your daily workflow.
      </p>
    </div>
  );
}