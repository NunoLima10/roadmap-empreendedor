import { useCallback, useEffect } from 'react';
import { ReactFlow, useNodesState, useEdgesState, Background, Controls, MiniMap, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { Roadmap, RoadmapNode } from '../types/roadmap';
import { transformRoadmapToFlow } from '../utils/graphUtils';
import CustomNode from './CustomNode';

interface RoadmapGraphProps {
  roadmap: Roadmap;
  onNodeSelect: (node: RoadmapNode) => void;
}

const nodeTypes = {
  custom: CustomNode,
};

export const RoadmapGraph = ({ roadmap, onNodeSelect }: RoadmapGraphProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    const { nodes: initialNodes, edges: initialEdges } = transformRoadmapToFlow(roadmap);
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [roadmap, setNodes, setEdges]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    // Find the original node data from the roadmap to pass the full object
    const originalNode = roadmap.nodes.find(n => n.id === node.id);
    if (originalNode) {
        onNodeSelect(originalNode);
    }
  }, [roadmap, onNodeSelect]);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        className="bg-slate-50 dark:bg-slate-950"
        minZoom={0.2}
      >
        <Background gap={20} color="#cbd5e1" />
        <Controls className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
        <MiniMap className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
      </ReactFlow>
    </div>
  );
};
