import React from "react";
import { DFY_PHASES } from "@/data/proposal-content";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, RefreshCw } from "lucide-react";

export function DeliverySystem() {
  return (
    <section id="deliverables" className="py-20 bg-white border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
            <span>Turnkey Execution · 100% Done-For-You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            The Done-For-You Installation Roadmap
          </h2>
          <p className="mt-3 text-base text-slate">
            This is not a course or a generic consultation. We embed with your leadership team, engineer the entire technical and messaging architecture, and deploy the complete OVYRO Method in your business.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {DFY_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className="p-7 rounded-xl bg-surface border border-hairline relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-primary text-white">
                    {phase.phase}
                  </span>
                  <span className="text-xs font-bold text-steel">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate mb-6 leading-relaxed">
                  {phase.summary}
                </p>

                <div className="space-y-2 border-t border-hairline pt-4">
                  <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>
                  {phase.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Client Conveyor System™ Callout */}
        <div className="p-8 rounded-2xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-brand-teal text-xs font-bold uppercase tracking-wider mb-3">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Backend Operations & Retention</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              Included: The Client Conveyor System™
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Once acquisition is solved, most businesses immediately break at service delivery. We install our proprietary Client Conveyor—standardized private Slack onboarding channels, project management software structures, and KPI templates—turning newly closed deals into referral-generating clients with the least complexity possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/60 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                <span>Zero Onboarding Drop-off</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                <span>Automated Referral Loops</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                <span>Dedicated Slack Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
