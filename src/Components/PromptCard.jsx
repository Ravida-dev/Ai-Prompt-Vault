import React from 'react';

export default function PromptCard({ item, copiedId, handleCopy }) {
  const getCategoryStyle = (category) => {
    switch (category) {
      case 'Coding':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'Writing':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Design':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'Productivity':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${getCategoryStyle(item.category)}`}>
            {item.category}
          </span>
          <button
            onClick={() => handleCopy(item.id, item.prompt)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
              copiedId === item.id
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white'
            }`}
          >
            {copiedId === item.id ? '✓ Copied!' : '📋 Copy Prompt'}
          </button>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-400 text-xs mb-4 leading-relaxed">{item.description}</p>

        <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 mb-4 font-mono text-xs text-slate-300 whitespace-pre-line">
          {item.prompt}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
        {item.tags.map((tag, idx) => (
          <span key={idx} className="text-[11px] bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded-md">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}