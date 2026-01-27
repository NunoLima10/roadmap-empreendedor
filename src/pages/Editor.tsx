import { useState, useCallback } from 'react';
import type { Roadmap, RoadmapNode } from '../types/roadmap';
import { EditorSidebar } from '../components/editor/EditorSidebar';
import { NodeEditor } from '../components/editor/NodeEditor';
import { RoadmapGraph } from '../components/RoadmapGraph';

const initialRoadmap: Roadmap = {
  id: 'new-roadmap',
  title: 'New Roadmap',
  description: 'Start editing your roadmap...',
  category: 'General',
  level: 'Beginner',
  nodes: [
    {
      id: 'start',
      title: 'Start Here',
      description: 'The beginning of the journey.',
      status: 'completed',
      content: '# Start Here\n\nWelcome to your new roadmap.'
    }
  ]
};

export const Editor = () => {
  const [roadmap, setRoadmap] = useState<Roadmap>(initialRoadmap);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const selectedNode = roadmap.nodes.find(n => n.id === selectedNodeId) || null;

  const handleAddNode = useCallback(() => {
    const newNode: RoadmapNode = {
      id: `node-${Date.now()}`,
      title: 'New Node',
      description: 'Description...',
      status: 'optional',
      content: '# New Node'
    };
    setRoadmap(prev => ({
      ...prev,
      nodes: [...prev.nodes, newNode]
    }));
    setSelectedNodeId(newNode.id);
  }, []);

  const handleUpdateNode = useCallback((updatedNode: RoadmapNode) => {
    setRoadmap(prev => ({
      ...prev,
      // If we update the ID, we need to update dependency references in other nodes too? 
      // For simplicity, let's assume ID doesn't change or we don't refactor dependencies yet.
      // Ideally we should block ID editing or handle refactor.
      nodes: prev.nodes.map(n => n.id === updatedNode.id ? updatedNode : n)
    }));
  }, []);

  const handleDeleteNode = useCallback((id: string) => {
    if (confirm('Are you sure you want to delete this node?')) {
       setRoadmap(prev => ({
         ...prev,
         nodes: prev.nodes.filter(n => n.id !== id),
         // Also remove this node from anyone who depends on it
         // Implementation: map over nodes, filter out deleted ID from dependsOn array
       }));
       setSelectedNodeId(null);
    }
  }, []);

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar */}
      <EditorSidebar 
        roadmap={roadmap} 
        onRoadmapChange={setRoadmap}
        onAddNode={handleAddNode}
        onSelectNode={(node) => setSelectedNodeId(node.id)}
      />

      {/* Main Preview Area */}
      <div className="flex-1 relative bg-slate-100 dark:bg-slate-900/50">
        <div className="absolute top-4 left-4 z-10 bg-white/50 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-slate-500 border border-slate-200 pointer-events-none">
          Live Preview
        </div>
        <RoadmapGraph 
          roadmap={roadmap} 
          onNodeSelect={(node) => setSelectedNodeId(node.id)} 
        />
      </div>

      {/* Right Panel: Node Editor (if selected) */}
      {selectedNode && (
        <NodeEditor 
          node={selectedNode}
          allNodes={roadmap.nodes}
          onUpdate={handleUpdateNode}
          onClose={() => setSelectedNodeId(null)}
          onDelete={handleDeleteNode}
        />
      )}
    </div>
  );
};
