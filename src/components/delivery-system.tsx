"use client";

import React from "react";
import { DFY_PHASES } from "@/data/proposal-content";
import { CheckCircle2, RefreshCw, FileText } from "lucide-react";

export function DeliverySystem() {
  return (
    <section id="deliverables" className="py-24 sm:py-32 bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
            <span>Turnkey Execution · 100% Done-For-You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            14–30 Day Installation Roadmap
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Fully engineered and deployed by OVYRO. Zero courses or theoretical coaching. We embed with your team and install the complete architecture.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {DFY_PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline relative flex flex-col justify-between hover:shadow-subtle transition"
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
                <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate mb-5 leading-relaxed">
                  {phase.summary}
                </p>

                {/* Embedded Foundational Copy Blueprint in Phase 01 */}
                {idx === 0 && (
                  <div className="mb-5 p-3 rounded-xl bg-white border border-hairline shadow-subtle">
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
                      Avatar, Bottlenecks &amp; Campaign Arguments
                    </div>
                  </div>
                )}

                <div className="space-y-2.5 border-t border-hairline pt-4">
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
        <div className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-brand-teal text-xs font-bold uppercase tracking-wider mb-3">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Backend Delivery &amp; Retention</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Included: The Client Conveyor System™
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Acquiring clients without structured onboarding breaks delivery. We install standardized client Slack channels, automated kickoff forms, and KPI dashboards so closed deals transition seamlessly into referral-generating clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-700/60 text-xs">
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
                  <span>Dedicated Slack Ops</span>
                </div>
              </div>
            </div>

            {/* Embedded Calendly Throughput Proof */}
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
