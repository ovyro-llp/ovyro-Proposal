export type VerticalType = "b2b" | "webinar" | "leadmagnet" | "hybrid";

export type FunnelLayer = "traffic" | "trust" | "qualifier" | "offer" | "delivery";

export interface FunnelNode {
  id: string;
  layer: FunnelLayer;
  title: string;
  subtitle: string;
  x: number;
  y: number;
  w: number;
  h: number;
  badge?: string;
  badgeColor?: string;
  description: string;
  stats?: string;
}

export interface FunnelEdge {
  from: string;
  to: string;
  label?: string;
}

export interface FunnelVertical {
  id: VerticalType;
  name: string;
  tagline: string;
  idealFor: string;
  description: string;
  highlightStat: string;
  nodes: FunnelNode[];
  edges: FunnelEdge[];
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  metric: string;
  metricSub: string;
  story: string;
  youtubeProof?: string;
}
