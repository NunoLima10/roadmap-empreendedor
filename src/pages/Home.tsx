import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { mockRoadmaps } from "../data/mockData";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoadmaps = mockRoadmaps.filter(
    (r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Master any skill with <br />
          <span className="text-blue-600">interactive roadmaps</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Community-driven learning paths for developers, entrepreneurs, and
          life-long learners.
        </p>

        <div className="max-w-md mx-auto relative mt-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search roadmaps (e.g., Frontend, Startup)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoadmaps.map((roadmap, index) => (
          <Link
            key={roadmap.id}
            to={`/roadmap/${roadmap.id}`}
            className="group relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom-4"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "backwards",
            }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-300 ${
                    roadmap.category === "Technology"
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white"
                  }`}
                >
                  {roadmap.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors duration-300">
                  {roadmap.level}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {roadmap.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                {roadmap.description}
              </p>

              {/* Footer with action */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 group-hover:border-blue-500/20 transition-colors duration-300">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {roadmap.nodes.length} etapas
                </span>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                  Começar
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
          </Link>
        ))}
      </section>
    </div>
  );
};
