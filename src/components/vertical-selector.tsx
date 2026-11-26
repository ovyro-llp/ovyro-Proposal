"use client";

import React from "react";
import { FUNNEL_VERTICALS } from "@/data/funnel-topologies";
import { VerticalType } from "@/types/funnel";
import { Briefcase, Video, BookOpen, Layers } from "lucide-react";

interface VerticalSelectorProps {
  activeVertical: VerticalType;
  onChange: (v: VerticalType) => void;
}

export function VerticalSelector({ activeVertical, onChange }: VerticalSelectorProps) {
  const verticals: { id: VerticalType; label: string; icon: React.ReactNode; tag: string }[] = [
    {
      id: "b2b",
      label: "B2B Consultation Funnel",
      icon: <Briefcase className="w-4 h-4" />,
      tag: "High-Ticket B2B & Agencies",
    },
    {
      id: "webinar",
      label: "Automated & Live Webinar",
      icon: <Video className="w-4 h-4" />,
      tag: "Masterminds & EdTech",
    },
    {
      id: "leadmagnet",
      label: "Lead Magnet & Tripwire",
      icon: <BookOpen className="w-4 h-4" />,
      tag: "PLG & Digital Products",
    },
    {
      id: "hybrid",
      label: "Hybrid B2B + B2C",
      icon: <Layers className="w-4 h-4" />,
      tag: "E-Com & Wholesale",
    },
  ];

  const current = FUNNEL_VERTICALS[activeVertical];

  return (
    <div className="w-full mb-8">
      {/* Tab Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-2 bg-surface border border-hairline rounded-2xl w-full mb-6">
        {verticals.map((v) => {
          const isActive = activeVertical === v.id;
          return (
            <button
              key={v.id}
              onClick={() => onChange(v.id)}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-white text-ink shadow-subtle border border-hairline ring-2 ring-primary/20"
                  : "text-steel hover:text-ink hover:bg-white/50"
              }`}
            >
              {v.icon}
              <span className="truncate">{v.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Vertical Banner Info */}
      <div className="w-full bg-white border border-hairline p-5 sm:p-6 rounded-2xl shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-tint-lavender text-brand-purple uppercase">
              {current.tagline}
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-tint-mint text-brand-green">
              {current.highlightStat}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate mt-2.5 leading-relaxed max-w-4xl">
            {current.description}
          </p>
          <div className="text-xs text-steel font-medium mt-1.5">
            <strong>Ideal For:</strong> {current.idealFor}
          </div>
        </div>
      </div>
    </div>
  );
}
