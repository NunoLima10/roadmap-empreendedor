import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { useThemeContext, type Theme } from "../contexts/ThemeContext";

export const ThemeMenu = () => {
  const { theme, setTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "system":
        return <Monitor className="w-5 h-5" />;
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
        aria-label="Selecionar tema"
      >
        {getIcon()}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 py-1 z-50">
          <button
            onClick={() => handleThemeChange("light")}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
          >
            <Sun className="w-4 h-4" />
            <span>Claro</span>
            {theme === "light" && (
              <span className="ml-auto text-blue-600">✓</span>
            )}
          </button>

          <button
            onClick={() => handleThemeChange("dark")}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
          >
            <Moon className="w-4 h-4" />
            <span>Escuro</span>
            {theme === "dark" && (
              <span className="ml-auto text-blue-600">✓</span>
            )}
          </button>

          <button
            onClick={() => handleThemeChange("system")}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
          >
            <Monitor className="w-4 h-4" />
            <span>Sistema</span>
            {theme === "system" && (
              <span className="ml-auto text-blue-600">✓</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
