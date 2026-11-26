"use client";

import React from "react";
import { ArrowRight, Play, CheckCircle2, Shield, Eye, Layers, TrendingUp } from "lucide-react";

export function HeroBand() {
  return (
    <section className="relative bg-brand-navy text-white pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
      {/* Decorative Brand Sticky Dots and Subtle Mesh Accents per DESIGN.md */}
      <div className="absolute top-12 left-[12%] w-3 h-3 rounded-full bg-brand-pink opacity-80 animate-pulse pointer-events-none" />
      <div className="absolute top-28 right-[15%] w-2.5 h-2.5 rounded-full bg-brand-yellow opacity-75 pointer-events-none" />
      <div className="absolute top-48 left-[6%] w-2 h-2 rounded-full bg-brand-teal opacity-60 pointer-events-none" />
      <div className="absolute top-36 right-[8%] w-3.5 h-3.5 rounded-full bg-brand-orange opacity-80 pointer-events-none" />
      <div className="absolute bottom-20 left-[18%] w-2.5 h-2.5 rounded-full bg-brand-purple opacity-75 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(86,69,212,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          <span>The OVYRO Method™ Master Proposal</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">Funnel Auditing & Architecture</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Client Acquisition That Scales <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
            Without Breaking Your Business.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10">
          We audit, architect, and deploy end-to-end client acquisition funnels that replace high-friction cold calls with the{" "}
          <strong className="text-white font-semibold">Google 7-11-4 Rule</strong> and an owned{" "}
          <strong className="text-white font-semibold">YouTube binge-trust engine</strong>—so prospects arrive on sales calls pre-sold, qualified, and ready to buy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#interactive-funnel"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-pressed text-white font-semibold text-[14.5px] px-6 py-3 rounded-md shadow-lg transition-all transform active:scale-95"
          >
            <span>Open Interactive Funnel Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/25 font-semibold text-[14.5px] px-5 py-3 rounded-md transition-colors"
          >
            <Play className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span>Simulate Google 7-11-4 Rule</span>
          </a>
        </div>

        {/* Fast metric pills */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>40%–60%+ Consultation Close Rate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>&lt; 15% No-Show Rates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>20–30 Min Pre-Sold Calls</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>Zero Banned-Account Dependency</span>
          </div>
        </div>

        {/* Workspace Mockup Card (Breaks out of hero band with deep shadow) */}
        <div className="mt-14 relative rounded-xl border border-white/15 bg-white text-ink text-left shadow-mockup overflow-hidden max-w-4xl mx-auto">
          {/* Mockup header */}
          <div className="bg-[#fcfbf9] px-4 py-3 border-b border-hairline flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
              <span className="ml-3 text-xs font-semibold text-charcoal">
                OVYRO Funnel Architecture Engine — Live Prospect Pipeline
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-steel">
              <span className="px-2 py-0.5 rounded bg-tint-mint text-brand-green font-bold">● Active 24/7 System</span>
              <span className="hidden sm:inline">Google 7-11-4 Mode: ON</span>
            </div>
          </div>

          {/* Mockup Grid */}
          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#fafaf9]">
            {/* Column 1 */}
            <div className="bg-white p-3.5 rounded-lg border border-hairline shadow-subtle">
              <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>1. Multi-Traffic</span>
                <span className="text-primary font-bold">12.4K/mo</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded bg-tint-lavender border border-purple-200 text-xs font-semibold text-brand-purple-800">
                  Meta Pain-Point Creatives
                  <div className="text-[10px] text-slate font-normal">₹1.30 Avg CPC · Targeted</div>
                </div>
                <div className="p-2 rounded bg-tint-sky border border-sky-200 text-xs font-semibold text-blue-900">
                  Google High-Intent Search
                  <div className="text-[10px] text-slate font-normal">Active Problem Solvers</div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-3.5 rounded-lg border-2 border-primary/40 shadow-subtle relative">
              <div className="absolute -top-2.5 right-2 px-1.5 py-0.2 bg-primary text-white text-[9px] font-bold rounded">
                OVYRO CORE
              </div>
              <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>2. YouTube Binge</span>
                <span className="text-brand-green font-bold">7.2h Avg</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded bg-tint-yellow-bold border border-amber-300 text-xs font-bold text-charcoal">
                  15–40m Deep Breakdowns
                  <div className="text-[10px] text-charcoal/80 font-normal">Prospects watch 4+ videos</div>
                </div>
                <div className="p-2 rounded bg-tint-mint border border-emerald-200 text-xs font-semibold text-emerald-900">
                  Client Proof & Teardowns
                  <div className="text-[10px] text-slate font-normal">Zero skepticism remaining</div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-3.5 rounded-lg border border-hairline shadow-subtle">
              <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>3. Qualifier Triage</span>
                <span className="text-amber-600 font-bold">&gt;₹1L Floor</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded bg-tint-peach border border-amber-200 text-xs font-semibold text-brand-orange-deep">
                  Revenue Hard Gate
                  <div className="text-[10px] text-slate font-normal">Filters out unqualified leads</div>
                </div>
                <div className="p-2 rounded bg-tint-rose border border-rose-200 text-xs font-semibold text-rose-900">
                  Transfer-of-Trust Video
                  <div className="text-[10px] text-slate font-normal">Founder introduces rep</div>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="bg-white p-3.5 rounded-lg border border-hairline shadow-subtle">
              <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>4. Pre-Sold Close</span>
                <span className="text-emerald-600 font-bold">54% Close</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                  20-Min Order Call
                  <div className="text-[10px] text-slate font-normal">Paid-in-Full Client</div>
                </div>
                <div className="p-2 rounded bg-surface border border-hairline text-xs font-semibold text-charcoal">
                  Client Conveyor™
                  <div className="text-[10px] text-slate font-normal">Instant Slack & onboarding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
