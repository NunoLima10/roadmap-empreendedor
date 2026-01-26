import dagre from 'dagre';
import type { Node, Edge } from '@xyflow/react';
import { Position } from '@xyflow/react';
import type { Roadmap } from '../types/roadmap';

const nodeWidth = 250;
const nodeHeight = 150; // Increased to accommodate variable content height

export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: direction === 'TB' ? Position.Top : Position.Left,
      sourcePosition: direction === 'TB' ? Position.Bottom : Position.Right,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

export const transformRoadmapToFlow = (roadmap: Roadmap) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  roadmap.nodes.forEach((node) => {
    // Create Node
    nodes.push({
      id: node.id,
      position: { x: 0, y: 0 }, // Initial position, will be fixed by dagre
      data: { 
        label: node.title,
        status: node.status,
        description: node.description
      },
      type: 'custom', // We will use a custom node component
    });

    // Create Edges
    if (node.dependsOn) {
      node.dependsOn.forEach((depId) => {
        edges.push({
          id: `e-${depId}-${node.id}`,
          source: depId,
          target: node.id,
          animated: false,
          type: 'default',
          style: { stroke: '#94a3b8', strokeWidth: 2 },
        });
      });
    }
  });

  return getLayoutedElements(nodes, edges);
};
