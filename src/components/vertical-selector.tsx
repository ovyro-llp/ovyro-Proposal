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
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface border border-hairline rounded-xl max-w-4xl mx-auto mb-6">
        {verticals.map((v) => {
          const isActive = activeVertical === v.id;
          return (
            <button
              key={v.id}
              onClick={() => onChange(v.id)}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? "bg-white text-ink shadow-subtle border border-hairline"
                  : "text-steel hover:text-ink hover:bg-white/50"
              }`}
            >
              {v.icon}
              <span>{v.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Vertical Banner Info */}
      <div className="max-w-4xl mx-auto bg-white border border-hairline p-5 rounded-xl shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-tint-lavender text-brand-purple uppercase">
              {current.tagline}
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-tint-mint text-brand-green">
              {current.highlightStat}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate mt-2 leading-relaxed">
            {current.description}
          </p>
          <div className="text-xs text-steel font-medium mt-1">
            <strong>Ideal For:</strong> {current.idealFor}
          </div>
        </div>
      </div>
    </div>
  );
}
