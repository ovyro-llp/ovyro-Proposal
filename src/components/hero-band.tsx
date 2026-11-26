"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";

export function HeroBand() {
  return (
    <section className="relative bg-brand-navy text-white pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(86,69,212,0.18)_0%,transparent_75%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Nurturing Document Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          <span>OVYRO Method™ · System Architecture &amp; Client Proposal</span>
        </div>

        {/* Display Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Pre-Sold Client Acquisition. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
            Engineered for High-Ticket B2B.
          </span>
        </h1>

        {/* Concise Proposal Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          A full-stack acquisition system replacing cold pitches with the{" "}
          <strong className="text-white font-semibold">Google 7-11-4 Rule</strong> and an owned{" "}
          <strong className="text-white font-semibold">YouTube trust engine</strong>. Prospects arrive on 20-minute calls pre-sold, qualified, and ready to buy.
        </p>

        {/* Navigation CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 w-full sm:w-auto">
          <a
            href="#interactive-funnel"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-pressed text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md shadow-sm transition"
          >
            <span>Review Funnel Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-md transition"
          >
            <Play className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span>Test 7-11-4 Rule Model</span>
          </a>
        </div>

        {/* Executive Benchmark Pills */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span>40%–60%+ Close Rate</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span>&lt;15% No-Show Rate</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span>20-Min Order Calls</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span>Zero Platform Dependency</span>
          </div>
        </div>

        {/* Wide Full-Width Pipeline Visualizer Card */}
        <div className="mt-14 sm:mt-18 relative rounded-2xl border border-white/15 bg-white text-ink text-left shadow-mockup overflow-hidden w-full">
          <div className="bg-[#fcfbf9] px-4 sm:px-6 py-3 border-b border-hairline flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-2 font-bold text-charcoal sm:text-sm">
                OVYRO Funnel Architecture Pipeline
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-steel">
              <span className="px-2.5 py-0.5 rounded bg-tint-mint text-brand-green font-bold">● Active 24/7</span>
              <span className="hidden sm:inline">Google 7-11-4 Engine</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#fafaf9]">
            {/* Step 1 */}
            <div className="bg-white p-4 rounded-xl border border-hairline shadow-subtle flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2.5 flex justify-between">
                  <span>1. Multi-Traffic</span>
                  <span className="text-primary font-bold">12.4K/mo</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-tint-lavender border border-purple-200 text-xs font-semibold text-brand-purple-800">
                    Meta Problem Ads
                    <div className="text-[11px] text-slate font-normal mt-0.5">Targeted cold curiosity</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-tint-sky border border-sky-200 text-xs font-semibold text-blue-900">
                    Google High-Intent Search
                    <div className="text-[11px] text-slate font-normal mt-0.5">Active solution seekers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-4 rounded-xl border-2 border-primary/40 shadow-subtle relative flex flex-col justify-between">
              <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-primary text-white text-[9px] font-bold rounded">
                CORE ANCHOR
              </div>
              <div>
                <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2.5 flex justify-between">
                  <span>2. YouTube Binge</span>
                  <span className="text-brand-green font-bold">7.2h Avg</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-tint-yellow-bold border border-amber-300 text-xs font-bold text-charcoal">
                    Deep Breakdowns
                    <div className="text-[11px] text-charcoal/80 font-normal mt-0.5">Prospects watch 4+ videos</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-tint-mint border border-emerald-200 text-xs font-semibold text-emerald-900">
                    Case Proof &amp; Teardowns
                    <div className="text-[11px] text-slate font-normal mt-0.5">Zero skepticism remains</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-4 rounded-xl border border-hairline shadow-subtle flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2.5 flex justify-between">
                  <span>3. Qualification</span>
                  <span className="text-amber-600 font-bold">Revenue Gate</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-tint-peach border border-amber-200 text-xs font-semibold text-brand-orange-deep">
                    Revenue Gate
                    <div className="text-[11px] text-slate font-normal mt-0.5">Filters unqualified leads</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-tint-rose border border-rose-200 text-xs font-semibold text-rose-900">
                    Transfer-of-Trust Video
                    <div className="text-[11px] text-slate font-normal mt-0.5">Founder introduces rep</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-4 rounded-xl border border-hairline shadow-subtle flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-2.5 flex justify-between">
                  <span>4. Pre-Sold Close</span>
                  <span className="text-emerald-600 font-bold">54% Close</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                    20-Min Order Call
                    <div className="text-[11px] text-slate font-normal mt-0.5">Paid-in-full buyer</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface border border-hairline text-xs font-semibold text-charcoal">
                    Client Conveyor™
                    <div className="text-[11px] text-slate font-normal mt-0.5">Instant Slack onboarding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
