import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { mockRoadmaps } from '../data/mockData';
import { RoadmapGraph } from '../components/RoadmapGraph';
import { NodeDetail } from '../components/NodeDetail';
import type { RoadmapNode } from '../types/roadmap';

export const RoadmapView = () => {
  const { id } = useParams();
  const roadmap = mockRoadmaps.find(r => r.id === id);
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);

  if (!roadmap) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
        <h1 className="text-2xl font-bold">Roadmap not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950 flex flex-col relative overflow-hidden">
      
      {/* Header Overlay */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm max-w-sm">
         <Link to="/" className="flex items-center text-xs text-slate-500 hover:text-blue-600 mb-2 transition-colors">
            <ChevronLeft className="w-3 h-3 mr-1" />
            Back to Roadmaps
         </Link>
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">{roadmap.title}</h1>
        <p className="text-xs text-slate-500 mt-1">{roadmap.description}</p>
        <div className="mt-3 flex gap-2">
           <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">
             {roadmap.nodes.length} nodes
           </span>
           <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded text-blue-600 dark:text-blue-400">
             {roadmap.level}
           </span>
        </div>
      </div>

      <div className="flex-1 w-full h-full">
        <RoadmapGraph 
            roadmap={roadmap} 
            onNodeSelect={(node) => setSelectedNode(node)}
        />
      </div>

      {selectedNode && (
        <NodeDetail 
            node={selectedNode} 
            onClose={() => setSelectedNode(null)} 
        />
      )}
    </div>
  );
};
