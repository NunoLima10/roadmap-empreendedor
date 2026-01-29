import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronUp, ChevronDown } from "lucide-react";
import { mockRoadmaps } from "../data/mockData";
import { RoadmapGraph } from "../components/RoadmapGraph";
import { NodeDetail } from "../components/NodeDetail";
import type { RoadmapNode } from "../types/roadmap";

export const RoadmapView = () => {
  const { id } = useParams();
  const roadmap = mockRoadmaps.find((r) => r.id === id);
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  if (!roadmap) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
        <h1 className="text-2xl font-bold">Roadmap not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-950 flex flex-col relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      {/* Header Overlay */}
      <div
        className={`absolute top-4 left-4 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-900/5 dark:shadow-black/20 transition-all duration-500 ease-out animate-in slide-in-from-left-8 fade-in ${
          headerCollapsed ? "max-w-[200px]" : "max-w-sm w-full md:w-auto"
        } hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-black/30`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <Link
              to="/"
              className="group inline-flex items-center text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-3 transition-all duration-300 font-medium"
            >
              <ChevronLeft className="w-3.5 h-3.5 mr-1 flex-shrink-0 group-hover:-translate-x-0.5 transition-transform duration-300" />
              <span className={headerCollapsed ? "hidden" : ""}>
                Voltar aos Roadmaps
              </span>
            </Link>
            <h1
              className={`font-bold text-slate-900 dark:text-slate-100 transition-all duration-300 ${headerCollapsed ? "text-sm" : "text-xl tracking-tight"}`}
            >
              {roadmap.title}
            </h1>
          </div>
          <button
            onClick={() => setHeaderCollapsed(!headerCollapsed)}
            className="md:hidden p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex-shrink-0 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={
              headerCollapsed ? "Expandir header" : "Minimizar header"
            }
          >
            {headerCollapsed ? (
              <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            )}
          </button>
        </div>

        {!headerCollapsed && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {roadmap.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {roadmap.nodes.length} etapas
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-900/10 px-3 py-1.5 rounded-lg text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {roadmap.level}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 w-full h-full">
        <RoadmapGraph
          roadmap={roadmap}
          onNodeSelect={(node) => setSelectedNode(node)}
        />
      </div>

      {selectedNode && (
        <NodeDetail node={selectedNode} onClose={() => setSelectedNode(null)} />
      )}
    </div>
  );
};
