import React from 'react';

export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeCategory === cat
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}