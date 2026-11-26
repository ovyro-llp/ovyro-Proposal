import React from "react";
import { DFY_PHASES } from "@/data/proposal-content";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, RefreshCw, FileText } from "lucide-react";

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
            This is not a course or generic coaching. We embed with your leadership team, engineer the entire technical and messaging architecture, and deploy the complete OVYRO Method in your business.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {DFY_PHASES.map((phase, idx) => (
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
                <p className="text-xs sm:text-sm text-slate mb-5 leading-relaxed">
                  {phase.summary}
                </p>

                {/* Embedded Foundational Copy Blueprint in Phase 01 */}
                {idx === 0 && (
                  <div className="mb-5 p-3 rounded-lg bg-white border border-hairline shadow-subtle">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-steel mb-1.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" />
                      <span>Deliverable Artifact · Foundational Copy Blueprint</span>
                    </div>
                    <img
                      src="/images/gdoc/img_19.png"
                      alt="Foundational Copy Document Screenshot"
                      className="w-full h-32 object-cover object-top rounded border border-hairline/80 hover:h-48 transition-all duration-300"
                    />
                    <div className="text-[10px] text-slate mt-1 text-center font-medium">
                      Avatar, Goals, Primary Complaints &amp; Campaign Arguments
                    </div>
                  </div>
                )}

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

        {/* The Client Conveyor System™ Callout with Real Events Proof */}
        <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-brand-teal text-xs font-bold uppercase tracking-wider mb-3">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Backend Operations &amp; Retention</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Included: The Client Conveyor System™
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Once acquisition is solved, most businesses immediately break at service delivery. We install our proprietary Client Conveyor—standardized private Slack onboarding channels, project management structures, and KPI templates—turning newly closed deals into referral-generating clients with the least complexity possible.
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

            {/* Embedded Calendly 7.1K events in 365 Days */}
            <div className="lg:col-span-4 p-4 rounded-xl bg-slate-900 border border-slate-700 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Operational Throughput
              </div>
              <img
                src="/images/gdoc/img_0.png"
                alt="Calendly 7.1K Events Created"
                className="w-full h-auto rounded border border-slate-700 object-contain mb-2"
              />
              <div className="text-xs font-semibold text-emerald-300">
                7,100+ Meetings Handled
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Managed smoothly with 1 person in &lt; 1 hour/day
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
