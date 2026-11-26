import React from "react";
import { FORTRESS_PILLARS } from "@/data/proposal-content";
import { Shield, AlertTriangle, TrendingUp, Repeat, BookOpen, Users, ArrowUpRight } from "lucide-react";

export function FortressPillars() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Shield":
        return <Shield className="w-5 h-5 text-amber-800" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-rose-800" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-emerald-800" />;
      case "Repeat":
        return <Repeat className="w-5 h-5 text-sky-800" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-purple-800" />;
      case "Users":
        return <Users className="w-5 h-5 text-amber-900" />;
      default:
        return <Shield className="w-5 h-5 text-primary" />;
    }
  };

  const getPillarDiagram = (pillarId: string) => {
    switch (pillarId) {
      case "margins":
        return (
          <div className="mt-4 p-2.5 rounded-lg bg-white border border-emerald-200/80 shadow-subtle">
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Pricing Architecture · The Golden Gap
            </div>
            <img
              src="/images/gdoc/img_18.png"
              alt="The Golden Gap Diagram"
              className="w-full h-24 object-contain rounded"
            />
            <div className="text-[10px] text-slate mt-1 text-center font-medium">
              Price Floor vs. 8x Perceived Value
            </div>
          </div>
        );
      case "education":
        return (
          <div className="mt-4 p-2.5 rounded-lg bg-white border border-purple-200/80 shadow-subtle">
            <div className="text-[10px] font-bold uppercase tracking-wider text-purple-800 mb-1">
              Content Workflow · License System
            </div>
            <img
              src="/images/gdoc/img_20.png"
              alt="Content Creation System Kanban Board"
              className="w-full h-24 object-cover rounded"
            />
            <div className="text-[10px] text-slate mt-1 text-center font-medium">
              Topic $\rightarrow$ Film $\rightarrow$ QC Production Pipeline
            </div>
          </div>
        );
      case "salesperson":
        return (
          <div className="mt-4 p-2.5 rounded-lg bg-white border border-amber-300 shadow-subtle">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900 mb-1">
              Fulfillment Scalability · Productization
            </div>
            <img
              src="/images/gdoc/img_21.png"
              alt="Productization: Experience vs Product"
              className="w-full h-20 object-contain rounded"
            />
            <div className="text-[10px] text-slate mt-1 text-center font-medium">
              Transforming bespoke hours into scalable modular delivery
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-surface border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-lavender text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <span>Business Resilience · The Fortress Effect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            The 6 Fortress Pillars of The OVYRO Method™
          </h2>
          <p className="mt-3 text-base text-slate">
            When you build an acquisition system around deep-trust YouTube content, your business develops six distinct competitive advantages that competitors simply cannot clone.
          </p>
        </div>

        {/* 6 Pastel Feature Cards with Authentic Google Doc Diagrams */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FORTRESS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 rounded-xl border ${pillar.tint} transition-all hover:shadow-subtle flex flex-col justify-between`}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/80 shadow-sm flex items-center justify-center mb-4">
                  {getIcon(pillar.iconName)}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal/70 mb-1">
                  {pillar.subtitle}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Embedded diagram if available */}
              {getPillarDiagram(pillar.id)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
