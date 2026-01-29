import {
  X,
  ExternalLink,
  Clock,
  Tag,
  CheckCircle2,
  Circle,
  AlertCircle,
  Lock,
  Zap,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { RoadmapNode } from "../types/roadmap";

interface NodeDetailProps {
  node: RoadmapNode | null;
  onClose: () => void;
}

const getStatusConfig = (status?: string) => {
  switch (status) {
    case "completed":
      return {
        icon: CheckCircle2,
        label: "Concluído",
        className:
          "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
        iconColor: "text-emerald-600 dark:text-emerald-400",
      };
    case "in-progress":
      return {
        icon: Zap,
        label: "Em Progresso",
        className:
          "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/50",
        iconColor: "text-blue-600 dark:text-blue-400",
      };
    case "required":
      return {
        icon: AlertCircle,
        label: "Obrigatório",
        className:
          "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800/50",
        iconColor: "text-orange-600 dark:text-orange-400",
      };
    case "advanced":
      return {
        icon: Lock,
        label: "Avançado",
        className:
          "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800/50",
        iconColor: "text-purple-600 dark:text-purple-400",
      };
    default:
      return {
        icon: Circle,
        label: "Opcional",
        className:
          "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-700",
        iconColor: "text-slate-500 dark:text-slate-400",
      };
  }
};

export const NodeDetail = ({ node, onClose }: NodeDetailProps) => {
  if (!node) return null;

  const statusConfig = getStatusConfig(node.status);
  const StatusIcon = statusConfig.icon;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed md:absolute inset-x-0 bottom-0 md:top-4 md:right-4 md:bottom-4 md:left-auto md:w-[480px] bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-900/50 backdrop-blur-xl rounded-t-3xl md:rounded-3xl border-t md:border border-slate-200/60 dark:border-slate-800/60 shadow-2xl shadow-slate-900/20 dark:shadow-black/40 z-20 flex flex-col overflow-hidden animate-in slide-in-from-bottom md:slide-in-from-right duration-500 ease-out max-h-[85vh] md:max-h-none">
        {/* Drag indicator for mobile */}
        <div className="md:hidden pt-4 pb-2 flex justify-center bg-gradient-to-b from-slate-100/50 to-transparent dark:from-slate-800/50">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full transition-all duration-300 hover:w-16 hover:bg-slate-400 dark:hover:bg-slate-600" />
        </div>

        {/* Header with gradient background */}
        <div className="relative px-6 py-5 border-b border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-blue-50/50 via-slate-50/50 to-purple-50/50 dark:from-blue-950/20 dark:via-slate-900/50 dark:to-purple-950/20">
          {/* Decorative blur circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-2xl text-slate-900 dark:text-slate-100 leading-tight mb-3">
                {node.title}
              </h2>

              {/* Meta info badges */}
              <div className="flex flex-wrap gap-2">
                {/* Status badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ${statusConfig.className} transition-all duration-300 hover:scale-105`}
                >
                  <StatusIcon
                    className={`w-3.5 h-3.5 ${statusConfig.iconColor}`}
                  />
                  {statusConfig.label}
                </span>

                {/* Time estimate */}
                {node.estimatedTime && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105">
                    <Clock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    {node.estimatedTime}
                  </span>
                )}

                {/* Tags */}
                {node.tags &&
                  node.tags.length > 0 &&
                  node.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:scale-105"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 hover:bg-white/80 dark:hover:bg-slate-800/80 rounded-xl transition-all duration-300 flex-shrink-0 hover:rotate-90 hover:scale-110 active:scale-95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            </button>
          </div>
        </div>

        {/* Content area with improved styling */}
        <div className="flex-1 overflow-y-auto">
          {/* Description if exists */}
          {node.description && node.description !== node.content && (
            <div className="px-6 py-4 bg-blue-50/50 dark:bg-blue-950/10 border-b border-slate-200/60 dark:border-slate-800/60">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {node.description}
              </p>
            </div>
          )}

          {/* Main content */}
          <div className="p-6">
            <div className="prose prose-sm prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
              <ReactMarkdown>
                {node.content ||
                  node.description ||
                  "Nenhum conteúdo disponível."}
              </ReactMarkdown>
            </div>
          </div>

          {/* Resources section */}
          {node.links && node.links.length > 0 && (
            <div className="px-6 pb-6">
              <div
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-5 border border-blue-200/50 dark:border-blue-900/30 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: "200ms" }}
              >
                <h3 className="text-base font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  Recursos Recomendados
                </h3>
                <div className="space-y-2.5">
                  {node.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 p-4 bg-white/80 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900/80 rounded-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 no-underline animate-in fade-in slide-in-from-left-2 duration-300"
                      style={{ animationDelay: `${300 + idx * 50}ms` }}
                    >
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1 transition-colors duration-300">
                        {link.label}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
