import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Rocket, Github, Menu, X } from "lucide-react";
import { ThemeMenu } from "./ThemeMenu";

export const Layout = ({
  children,
  fullWidth = false,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              EmpreendaMap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link
              to="/"
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive("/")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-semibold"
                  : "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              Roadmaps
              {isActive("/") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </Link>
            <Link
              to="/editor"
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive("/editor")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-semibold"
                  : "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              Editor
              {isActive("/editor") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </Link>
            <Link
              to="/about"
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive("/about")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-semibold"
                  : "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </Link>
            <ThemeMenu />
            <a
              href="https://github.com/NunoLima10/roadmap-empreendedor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive("/")
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmaps
              </Link>
              <Link
                to="/editor"
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive("/editor")
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Editor
              </Link>
              <Link
                to="/about"
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive("/about")
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center gap-4 px-4 py-3 border-t border-slate-200 dark:border-slate-800 mt-2">
                <ThemeMenu />
                <a
                  href="https://github.com/NunoLima10/roadmap-empreendedor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main
        className={`flex-1 ${fullWidth ? "" : "container mx-auto px-4 py-8"}`}
      >
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 text-sm text-slate-500">
          <p>© 2025 EmpreendaMap. Open Source.</p>
        </div>
      </footer>
    </div>
  );
};
