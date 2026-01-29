import { Plus, Copy, Check, X } from "lucide-react";
import { useState } from "react";
import type { Roadmap, RoadmapNode } from "../../types/roadmap";

interface EditorSidebarProps {
  roadmap: Roadmap;
  onRoadmapChange: (roadmap: Roadmap) => void;
  onAddNode: () => void;
  onSelectNode: (node: RoadmapNode) => void;
  onClose?: () => void;
}

export const EditorSidebar = ({
  roadmap,
  onRoadmapChange,
  onAddNode,
  onSelectNode,
  onClose,
}: EditorSidebarProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(roadmap, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    field: keyof Roadmap,
    value: string | RoadmapNode[],
  ) => {
    onRoadmapChange({ ...roadmap, [field]: value });
  };

  return (
    <div className="w-[300px] flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full overflow-hidden shadow-xl lg:shadow-none">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-lg">Roadmap Editor</h2>
          <p className="text-xs text-slate-500">
            Client-side only. Export to save.
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Global Settings */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Global Settings
          </h3>

          <div className="space-y-1">
            <label className="text-xs text-slate-500">Roadmap ID</label>
            <input
              type="text"
              value={roadmap.id}
              onChange={(e) => handleChange("id", e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-500">Title</label>
            <input
              type="text"
              value={roadmap.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-500">Description</label>
            <textarea
              value={roadmap.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 h-20"
            />
          </div>
        </div>

        {/* Nodes List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Nodes ({roadmap.nodes.length})
            </h3>
            <button
              onClick={onAddNode}
              className="flex items-center gap-1 text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded transition-colors"
              title="Add New Node"
            >
              <Plus className="w-3 h-3" /> Add
            </button>
          </div>

          <div className="space-y-1">
            {roadmap.nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer group text-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all"
              >
                <span
                  className={`w-2 h-2 rounded-full ${node.status === "completed" ? "bg-green-400" : "bg-slate-300"}`}
                />
                <span className="truncate flex-1">{node.title}</span>
                <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100">
                  {node.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Export */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
        <button
          onClick={handleCopyJson}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied!" : "Copy JSON"}
        </button>
      </div>
    </div>
  );
};
