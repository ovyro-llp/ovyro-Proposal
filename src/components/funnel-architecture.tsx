"use client";

import React, { useState, useRef, useEffect } from "react";
import { FUNNEL_VERTICALS } from "@/data/funnel-topologies";
import { VerticalType, FunnelNode } from "@/types/funnel";
import { VerticalSelector } from "./vertical-selector";
import { Download, Info, Check, Sparkles, Filter } from "lucide-react";

export function FunnelArchitecture() {
  const [activeVertical, setActiveVertical] = useState<VerticalType>("b2b");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeLayerFilter, setActiveLayerFilter] = useState<string>("all");
  const svgRef = useRef<SVGSVGElement | null>(null);

  const current = FUNNEL_VERTICALS[activeVertical];
  const activeNodeId = hoveredNodeId || selectedNodeId;

  // Find connected nodes
  const activeNode = activeNodeId ? current.nodes.find((n) => n.id === activeNodeId) : null;
  const connectedNodeIds = new Set<string>();
  if (activeNodeId) {
    connectedNodeIds.add(activeNodeId);
    current.edges.forEach((e) => {
      if (e.from === activeNodeId) connectedNodeIds.add(e.to);
      if (e.to === activeNodeId) connectedNodeIds.add(e.from);
    });
  }

  // Count in/out edges
  let inCount = 0;
  let outCount = 0;
  if (activeNodeId) {
    current.edges.forEach((e) => {
      if (e.to === activeNodeId) inCount++;
      if (e.from === activeNodeId) outCount++;
    });
  }

  // Layers configuration
  const LANES = [
    { id: "traffic", title: "1. ACQUISITION & MULTI-CHANNEL TRAFFIC", y: 20, h: 110, color: "#a855f7" },
    { id: "trust", title: "2. THE OVYRO TRUST ANCHOR & YOUTUBE BINGE ENGINE", y: 150, h: 125, color: "#5645d4" },
    { id: "qualifier", title: "3. ZERO-FRICTION LANDER & MULTI-STEP QUALIFIER", y: 295, h: 125, color: "#3b82f6" },
    { id: "offer", title: "4. HIGH-CONVERTING OFFER & ORDER-CONFIRMATION CALL", y: 440, h: 125, color: "#f59e0b" },
    { id: "delivery", title: "5. CLIENT CONVEYOR SYSTEM™ & RETENTION ENGINE", y: 585, h: 135, color: "#10b981" },
  ];

  // Helper to compute smooth curved paths between nodes
  const getEdgePath = (fromId: string, toId: string) => {
    const s = current.nodes.find((n) => n.id === fromId);
    const d = current.nodes.find((n) => n.id === toId);
    if (!s || !d) return "";

    const sameRow = Math.abs(s.y - d.y) < 25;
    if (sameRow) {
      const x1 = s.x < d.x ? s.x + s.w / 2 : s.x - s.w / 2;
      const x2 = s.x < d.x ? d.x - d.w / 2 : d.x + d.w / 2;
      const curveY = s.y - 35;
      return `M ${x1} ${s.y} Q ${(x1 + x2) / 2} ${curveY}, ${x2} ${d.y}`;
    } else {
      const goingDown = d.y > s.y;
      const x1 = s.x;
      const y1 = goingDown ? s.y + s.h / 2 : s.y - s.h / 2;
      const x2 = d.x;
      const y2 = goingDown ? d.y - d.h / 2 : d.y + d.h / 2;
      const midY = (y1 + y2) / 2;
      return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
    }
  };

  // Export high-resolution PNG
  const exportPNG = () => {
    if (!svgRef.current) return;
    const svgEl = svgRef.current;
    const serializer = new XMLSerializer();
    const clone = svgEl.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("width", "2400");
    clone.setAttribute("height", "1520");

    // Add inline styling for crisp rendering
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = `
      .lane-box { fill: #111827; stroke: #1e293b; stroke-width: 1; rx: 8; }
      .lane-label { font-family: sans-serif; font-size: 11px; font-weight: 700; fill: #94a3b8; }
      .funnel-edge { fill: none; stroke: #475569; stroke-width: 1.5; opacity: 0.65; }
      .node-box { fill: #131c31; stroke-width: 1.6; rx: 8; }
      .node-text-title { font-family: sans-serif; font-size: 11.5px; font-weight: 700; fill: #ffffff; }
      .node-text-sub { font-family: sans-serif; font-size: 10px; fill: #94a3b8; }
      .badge-box { rx: 4; }
      .badge-txt { font-family: sans-serif; font-size: 9.5px; font-weight: 700; fill: #ffffff; text-anchor: middle; }
    `;
    clone.insertBefore(style, clone.firstChild);

    const svgStr = serializer.serializeToString(clone);
    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 2400;
      canvas.height = 1520;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#0b0f19";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        const a = document.createElement("a");
        a.download = `ovyro-${activeVertical}-funnel-architecture.png`;
        a.href = canvas.toDataURL("image/png");
        a.click();
      }
    };
    img.src = url;
  };

  return (
    <section id="interactive-funnel" className="py-20 bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-2">
              <span>Interactive System Blueprint · The OVYRO Method™</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Interactive Funnel Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate max-w-2xl">
              Explore the exact conversion mechanics for your business model. Click or hover any node to trace active upstream traffic sources and downstream conversion destinations.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={exportPNG}
              className="inline-flex items-center gap-1.5 bg-brand-navy hover:bg-brand-navy-mid text-white text-xs font-semibold px-4 py-2.5 rounded-md shadow-sm transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download 2x PNG</span>
            </button>
          </div>
        </div>

        {/* Vertical Switcher Tabs */}
        <VerticalSelector activeVertical={activeVertical} onChange={(v) => {
          setActiveVertical(v);
          setSelectedNodeId(null);
          setHoveredNodeId(null);
        }} />

        {/* Master Interactive SVG Graph Container */}
        <div className="bg-brand-navy rounded-2xl border border-border shadow-xl p-4 sm:p-6 overflow-hidden">
          {/* Top Inspector Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-700/60 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="font-mono text-slate-200 font-semibold">
                {activeNode
                  ? `${activeNode.title} — ${inCount} Inbound · ${outCount} Outbound Pathways`
                  : `Showing all ${current.nodes.length} nodes · ${current.edges.length} directed pathways`}
              </span>
            </div>

            {/* Quick layer filter chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-[11px]">
              <button
                onClick={() => setActiveLayerFilter("all")}
                className={`px-2.5 py-1 rounded font-medium transition ${
                  activeLayerFilter === "all" ? "bg-primary text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                All Layers
              </button>
              {LANES.map((lane) => (
                <button
                  key={lane.id}
                  onClick={() => setActiveLayerFilter(lane.id)}
                  className={`px-2.5 py-1 rounded font-medium transition ${
                    activeLayerFilter === lane.id
                      ? "bg-slate-700 text-white font-bold"
                      : "bg-slate-800/70 text-slate-400 hover:text-white"
                  }`}
                >
                  {lane.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Canvas */}
          <div className="overflow-x-auto">
            <svg
              ref={svgRef}
              viewBox="0 0 1180 740"
              className="w-full min-w-[1000px] h-[720px] select-none"
              style={{
                background: "radial-gradient(circle at 50% 0%, #152238 0%, #0a1120 100%)",
                borderRadius: "12px",
              }}
            >
              <defs>
                {/* Regular Arrowhead */}
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#475569" />
                </marker>
                {/* Highlighted Arrowhead */}
                <marker
                  id="arrowHi"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
                </marker>
              </defs>

              {/* Swimlanes */}
              {LANES.map((lane) => (
                <g key={lane.id}>
                  <rect
                    x={14}
                    y={lane.y}
                    width={1152}
                    height={lane.h}
                    rx={8}
                    className="lane-box"
                    fill="rgba(255,255,255,0.015)"
                    stroke="#1e293b"
                    strokeWidth={1}
                  />
                  <text
                    x={28}
                    y={lane.y + 18}
                    className="lane-label"
                    fill="#94a3b8"
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="0.08em"
                  >
                    {lane.title}
                  </text>
                </g>
              ))}

              {/* Directed Edges */}
              <g id="edgesGroup">
                {current.edges.map((edge, idx) => {
                  const isHighlighted =
                    activeNodeId && (edge.from === activeNodeId || edge.to === activeNodeId);
                  const isDimmed = activeNodeId && !isHighlighted;
                  const d = getEdgePath(edge.from, edge.to);

                  return (
                    <path
                      key={idx}
                      d={d}
                      className={`funnel-edge ${isHighlighted ? "highlighted" : ""} ${
                        isDimmed ? "dimmed" : ""
                      }`}
                      markerEnd={isHighlighted ? "url(#arrowHi)" : "url(#arrow)"}
                    />
                  );
                })}
              </g>

              {/* Nodes */}
              <g id="nodesGroup">
                {current.nodes.map((node) => {
                  const isConnected = !activeNodeId || connectedNodeIds.has(node.id);
                  const isSelected = activeNodeId === node.id;
                  const isFiltered = activeLayerFilter === "all" || node.layer === activeLayerFilter;
                  const color = node.badgeColor || "#5645d4";

                  return (
                    <g
                      key={node.id}
                      className={`funnel-node ${!isConnected || !isFiltered ? "dimmed" : ""} ${
                        isSelected ? "selected" : ""
                      }`}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      onClick={() =>
                        setSelectedNodeId(selectedNodeId === node.id ? null : node.id)
                      }
                    >
                      {/* Node Box */}
                      <rect
                        x={node.x - node.w / 2}
                        y={node.y - node.h / 2}
                        width={node.w}
                        height={node.h}
                        rx={8}
                        className="node-box"
                        fill="#131c31"
                        stroke={color}
                        strokeWidth={isSelected ? 2.4 : 1.5}
                      />

                      {/* Left accent indicator strip */}
                      <rect
                        x={node.x - node.w / 2}
                        y={node.y - node.h / 2}
                        width={4.5}
                        height={node.h}
                        fill={color}
                        rx={2.5}
                      />

                      {/* Title */}
                      <text
                        x={node.x - node.w / 2 + 14}
                        y={node.y - 3}
                        className="node-text-title"
                        fill="#f8fafc"
                        fontSize="11.5"
                        fontWeight="700"
                      >
                        {node.title}
                      </text>

                      {/* Subtitle */}
                      <text
                        x={node.x - node.w / 2 + 14}
                        y={node.y + 13}
                        className="node-text-sub"
                        fill="#94a3b8"
                        fontSize="9.5"
                      >
                        {node.subtitle}
                      </text>

                      {/* Badge Pill */}
                      {node.badge && (
                        <g>
                          <rect
                            x={node.x + node.w / 2 - 62}
                            y={node.y - node.h / 2 - 8}
                            width={56}
                            height={16}
                            rx={4}
                            className="badge-box"
                            fill={color}
                          />
                          <text
                            x={node.x + node.w / 2 - 34}
                            y={node.y - node.h / 2 + 4}
                            className="badge-txt"
                            fill="#ffffff"
                            fontSize="8.5"
                            fontWeight="800"
                            textAnchor="middle"
                          >
                            {node.badge}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Active Node Detail Card below SVG */}
          {activeNode && (
            <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{activeNode.title}</span>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-bold text-white"
                    style={{ backgroundColor: activeNode.badgeColor || "#5645d4" }}
                  >
                    {activeNode.layer.toUpperCase()}
                  </span>
                  {activeNode.stats && (
                    <span className="text-[11px] font-semibold text-emerald-400">
                      ★ {activeNode.stats}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-slate-300 text-xs leading-relaxed">
                  {activeNode.description}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-slate-400 font-mono text-[11px]">
                <span>Inbound: <strong className="text-white">{inCount}</strong></span>
                <span>•</span>
                <span>Outbound: <strong className="text-white">{outCount}</strong></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
