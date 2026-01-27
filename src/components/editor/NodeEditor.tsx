import type { RoadmapNode, NodeStatus } from '../../types/roadmap';
import { X } from 'lucide-react';

interface NodeEditorProps {
  node: RoadmapNode;
  allNodes: RoadmapNode[];
  onUpdate: (updatedNode: RoadmapNode) => void;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export const NodeEditor = ({ node, allNodes, onUpdate, onClose, onDelete }: NodeEditorProps) => {
  const handleChange = (field: keyof RoadmapNode, value: any) => {
    onUpdate({ ...node, [field]: value });
  };

  const handleDependsOnChange = (depId: string, checked: boolean) => {
    const currentDeps = node.dependsOn || [];
    let newDeps;
    if (checked) {
      newDeps = [...currentDeps, depId];
    } else {
      newDeps = currentDeps.filter(id => id !== depId);
    }
    onUpdate({ ...node, dependsOn: newDeps });
  };

  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-xl w-[400px]">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">Edit Node</h3>
        <button onClick={onClose} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* ID - Readonly for now to simplify */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Node ID</label>
          <input 
            type="text" 
            value={node.id} 
            readOnly
            className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 text-sm cursor-not-allowed"
          />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Title</label>
          <input 
            type="text" 
            value={node.title} 
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        </div>

         {/* Description */}
         <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Short Description</label>
          <textarea 
            value={node.description || ''} 
            onChange={(e) => handleChange('description', e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm h-20"
          />
        </div>

        {/* Status */}
         <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Status Type</label>
          <select 
            value={node.status || 'optional'} 
            onChange={(e) => handleChange('status', e.target.value as NodeStatus)}
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          >
            <option value="optional">Optional</option>
            <option value="required">Required</option>
            <option value="advanced">Advanced</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="skipped">Skipped</option>
          </select>
        </div>

        {/* Dependencies */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500">Parent Nodes (Dependencies)</label>
          <div className="border border-slate-200 dark:border-slate-700 rounded-md max-h-40 overflow-y-auto bg-slate-50 dark:bg-slate-950/50 p-2 space-y-1">
             {allNodes.filter(n => n.id !== node.id).map(n => (
               <label key={n.id} className="flex items-center gap-2 text-sm p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">
                 <input 
                    type="checkbox"
                    checked={(node.dependsOn || []).includes(n.id)}
                    onChange={(e) => handleDependsOnChange(n.id, e.target.checked)}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                 />
                 <span className="truncate">{n.title} <span className="text-xs text-slate-400">({n.id})</span></span>
               </label>
             ))}
             {allNodes.length <= 1 && <div className="text-xs text-slate-400 italic p-1">No other nodes to connect.</div>}
          </div>
        </div>

        {/* Markdown Content */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Content (Markdown)</label>
          <textarea 
            value={node.content || ''} 
            onChange={(e) => handleChange('content', e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm font-mono text-xs h-64"
          />
        </div>

         <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <button 
                onClick={() => onDelete(node.id)}
                className="w-full py-2 px-4 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 rounded-md text-sm font-medium transition-colors"
            >
                Delete Node
            </button>
         </div>

      </div>
    </div>
  );
};
