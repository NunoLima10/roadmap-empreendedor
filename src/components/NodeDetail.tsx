import { X, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { RoadmapNode } from '../types/roadmap';

interface NodeDetailProps {
  node: RoadmapNode | null;
  onClose: () => void;
}

export const NodeDetail = ({ node, onClose }: NodeDetailProps) => {
  if (!node) return null;

  return (
    <div className="absolute top-4 right-4 bottom-4 w-[400px] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl z-20 flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
      <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
        <h2 className="font-bold text-lg truncate pr-4">{node.title}</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 prose prose-sm prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown>{node.content || node.description || 'No content available.'}</ReactMarkdown>
        
        {node.links && node.links.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-semibold mb-3 text-slate-900 dark:text-slate-100">Recommended Resources</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {node.links.map((link, idx) => (
                <li key={idx} className="!m-0 !p-0">
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 no-underline group p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
