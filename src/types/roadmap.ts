export interface Link {
  url: string;
  label: string;
}

export type NodeStatus = 'optional' | 'required' | 'advanced' | 'completed' | 'skipped';

export interface RoadmapNode {
  id: string;
  title: string;
  description?: string;
  content?: string; // Markdown content
  status?: NodeStatus;
  links?: Link[];
  tags?: string[];
  dependsOn?: string[]; // IDs of parent nodes
  estimatedTime?: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: string;
  level?: string; // 'Beginner', 'Intermediate', 'Advanced'
  nodes: RoadmapNode[];
}
