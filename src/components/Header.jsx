import React from "react";

export default function Header({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-semibold text-lg">Eduard Reina</div>
        <div className="flex items-center gap-3">
          <a className="hidden sm:inline opacity-80 hover:opacity-100" href="#experience">Experience</a>
          <a className="hidden sm:inline opacity-80 hover:opacity-100" href="#projects">Projects</a>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-full border border-gray-300 dark:border-slate-700"
            aria-label="toggle theme"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}
