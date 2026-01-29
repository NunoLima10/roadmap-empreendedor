import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Github } from 'lucide-react';

export const Layout = ({ children, fullWidth = false }: { children: React.ReactNode; fullWidth?: boolean }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight hover:text-blue-600 transition-colors">
            <Map className="w-6 h-6 text-blue-600" />
            <span>MapMyPath</span>
          </Link>
          
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Roadmaps</Link>
            <Link to="/editor" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Editor</Link>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="https://github.com/NunoLima10/roadmap-empreendedor" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <main className={`flex-1 ${fullWidth ? '' : 'container mx-auto px-4 py-8'}`}>
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 text-sm text-slate-500">
          <p>© 2025 MapMyPath. Open Source.</p>
        </div>
      </footer>
    </div>
  );
};
