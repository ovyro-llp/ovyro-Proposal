"use client";

import React from "react";
import {
  Youtube,
  Flame,
  Shield,
  Clock,
  CheckCircle2,
  Lock,
  Sparkles
} from "lucide-react";

export function YoutubeMoat() {
  return (
    <section id="youtube-moat" className="py-24 sm:py-32 bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Youtube className="w-3.5 h-3.5 fill-red-600" />
            <span>Core Strategic Lever</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            The YouTube Trust Moat. <br />
            <span className="text-slate font-medium text-2xl sm:text-3xl lg:text-4xl">
              Why long-form video anchors every high-converting funnel.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Short-form social content creates fleeting curiosity. YouTube is the only media engine built for intentional binge-watching, enabling prospects to consume 7+ hours of your frameworks before the sales call.
          </p>
        </div>

        {/* 3 Strategic Pillars of the YouTube Engine */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline hover:border-hairline-strong transition">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">
              The 7-Hour Binge Loop
            </h3>
            <p className="text-xs sm:text-sm text-slate leading-relaxed">
              When a prospect finishes a 25-minute system teardown, YouTube queues your next breakdowns. They understand your methodology before ever speaking with sales.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline hover:border-hairline-strong transition">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">
              Zero-Cost Algorithmic Retargeting
            </h3>
            <p className="text-xs sm:text-sm text-slate leading-relaxed">
              Unlike Meta ad spend per impression, YouTube’s recommendation algorithm places your content directly on active viewers’ homepages for months at zero ad spend.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline hover:border-hairline-strong transition">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">
              Transfer-of-Trust Videos
            </h3>
            <p className="text-xs sm:text-sm text-slate leading-relaxed">
              Post-booking confirmation videos where the founder personally introduces the designated strategist, transferring founder authority directly to the closer.
            </p>
          </div>
        </div>

        {/* Wide Visual Proof Box of the YouTube Recommendation Machine */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-brand-navy text-white shadow-xl border border-slate-700/80 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
                <Youtube className="w-3.5 h-3.5 fill-red-400" />
                <span>Algorithmic Moat in Action</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Free Perpetual Retargeting
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When a viewer watches one breakdown, YouTube’s sidebar and homepage feed perpetually recommend your other content. We architect titles, thumbnails, and structures to trigger this mechanism.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs space-y-1 font-mono">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Continuous Algorithmic Nurturing</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  Retargets high-intent buyers for 30–90 days with zero additional media cost.
                </div>
              </div>
            </div>

            {/* Embedded Screenshot from Google Doc: YouTube Algorithm Suggested Videos */}
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
                <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>YouTube Suggested Sidebar Algorithm</span>
                  <span className="text-emerald-400">Organic Retargeting: ACTIVE</span>
                </div>
                <img
                  src="/images/gdoc/img_8.png"
                  alt="YouTube Algorithmic Recommendation Machine"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Performance Economics Table with Embedded Real CPV Proof */}
          <div className="pt-8 border-t border-slate-700/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Economics: OVYRO Method™ vs. Cold Paid Funnels
                </h4>
                <p className="text-xs text-slate-400">
                  Data-backed metrics across ₹2.5Cr+ testing
                </p>
              </div>

              {/* Embedded CPV Proof from Google Doc */}
              <div className="flex items-center gap-3 p-2 px-3 rounded-lg bg-slate-900 border border-slate-700">
                <img
                  src="/images/gdoc/img_12.png"
                  alt="Google Ads CPV Proof: $0.177 avg CPV"
                  className="h-10 w-auto rounded border border-slate-700 object-contain"
                />
                <div className="text-xs">
                  <span className="text-emerald-400 font-extrabold block text-sm">$0.177 CPV</span>
                  <span className="text-slate-400 text-[10px]">Tracked Top-of-Funnel Cost</span>
                </div>
              </div>
            </div>

            {/* Comparison Table with Mobile Scroll */}
            <div className="overflow-x-auto pb-2">
              <table className="w-full text-left text-xs sm:text-sm min-w-[620px]">
                <thead>
                  <tr className="border-b border-slate-700/80 text-slate-400 font-mono text-xs uppercase tracking-wider">
                    <th className="pb-3 font-bold">Metric</th>
                    <th className="pb-3 font-bold text-red-400">The Old 1-Hour Funnel (Meta Only)</th>
                    <th className="pb-3 font-bold text-emerald-400">The OVYRO Method™ (YouTube Anchor)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-3 font-semibold text-white">Pre-Call Exposure</td>
                    <td className="py-3 text-slate-400">&lt; 1 Hour (5m email + cold discovery)</td>
                    <td className="py-3 text-emerald-300 font-bold">7+ Hours across 11 touchpoints</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-white">Retargeting Cost</td>
                    <td className="py-3 text-slate-400">$25.00+ per click with ad fatigue</td>
                    <td className="py-3 text-emerald-300 font-bold">$0.00 (Free via YouTube Algorithm)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-white">Consultation Show-Up</td>
                    <td className="py-3 text-slate-400">35% – 50% (High ghosting)</td>
                    <td className="py-3 text-emerald-300 font-bold">&gt; 85% show-up via Show-Up VSL</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-white">Sales Call Type</td>
                    <td className="py-3 text-slate-400">60+ minute high-friction pitch grind</td>
                    <td className="py-3 text-emerald-300 font-bold">20–30 min pre-sold order confirmation</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-white">Platform Fragility</td>
                    <td className="py-3 text-red-400 font-semibold">1 ban = zero business revenue</td>
                    <td className="py-3 text-emerald-300 font-bold">Permanent, owned brand asset</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Realtime Engagement Proof Strip from Google Doc */}
            <div className="mt-8 pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <img
                  src="/images/gdoc/img_7.png"
                  alt="YouTube Realtime Views: 26,311 Views"
                  className="w-28 sm:w-32 h-auto rounded border border-slate-700 object-contain"
                />
                <div className="text-xs">
                  <span className="font-extrabold text-white block text-sm">26,311 Realtime Views</span>
                  <span className="text-slate-400 text-[11px]">Compounding organic traffic without paying for additional media.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <img
                  src="/images/gdoc/img_6.png"
                  alt="YouTube Average View Duration: 5:49"
                  className="w-18 sm:w-20 h-auto rounded border border-slate-700 object-contain"
                />
                <div className="text-xs">
                  <span className="font-extrabold text-white block text-sm">5:49 Avg Watch Time</span>
                  <span className="text-slate-400 text-[11px]">High intentional retention clocking hours of pre-call authority.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hormozi Brand Quote & Production Myth Buster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Hormozi Principle */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-tint-yellow/40 border border-tint-yellow-bold flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-200/60 text-brand-orange-deep text-[11px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Brand Principle</span>
              </div>
              
              {/* Embedded Tweet Image from Google Doc */}
              <div className="mb-4 rounded-xl overflow-hidden border border-amber-300/80 bg-white shadow-subtle p-2">
                <img
                  src="/images/gdoc/img_3.png"
                  alt="Alex Hormozi Tweet: Brand >"
                  className="w-full h-auto object-contain rounded"
                />
              </div>

              <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                If your only advantage is an ad and a promise, competitors will clone it. An owned YouTube media engine builds enduring category authority that cannot be copied.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/80 flex items-center gap-2 text-xs font-bold text-brand-orange-deep">
              <Lock className="w-4 h-4" />
              <span>Category Kings: Kylie ($1B), Rock ($800M), Hormozi, Gadzhi</span>
            </div>
          </div>

          {/* Right: The Production Myth */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-surface border border-hairline flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                Production Reality
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-3">
                “Do I need an expensive studio or camera crew?”
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed mb-4">
                <strong>No. Over-production damages B2B trust.</strong> Decision-makers equate cinematic ads with being sold. Simple screen-share breakdowns, Lucidchart diagrams, and Notion walkthroughs convert 3× higher.
              </p>
              <div className="space-y-2 text-xs font-medium text-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Screen-share and Loom teardowns convert highest</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>We provide all scripts, titles, and hooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Requires under 2 hours of founder filming per week</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-white border border-hairline shadow-subtle text-xs text-charcoal">
              <strong className="text-primary block mb-1">The Compounding Math:</strong>
              50,000 TikTok views vanish in 48 hours. 1,500 targeted YouTube breakdown views compound evergreen search rankings and close retainers for years.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
