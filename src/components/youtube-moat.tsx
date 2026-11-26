"use client";

import React from "react";
import {
  Youtube,
  Flame,
  Shield,
  Clock,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Lock,
  ArrowRight,
  BarChart3,
  DollarSign,
  Sparkles
} from "lucide-react";

export function YoutubeMoat() {
  return (
    <section id="youtube-moat" className="py-20 bg-white border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Youtube className="w-3.5 h-3.5 fill-red-600" />
            <span>The OVYRO Core Lever · The YouTube Trust Moat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Why YouTube is the Unbreakable Anchor <br />
            <span className="text-slate font-medium text-2xl sm:text-3xl">
              of Every High-Converting Funnel We Build.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Short-form content (Reels, TikToks) dies within 48 hours and generates shallow curiosity. YouTube is the only media engine on earth architected for long-form, intentional binge watching—allowing prospects to consume 7+ hours of your frameworks before you ever ask for money.
          </p>
        </div>

        {/* 3 Strategic Pillars of the YouTube Engine */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-surface border border-hairline hover:border-hairline-strong transition">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              The 7-Hour Binge Loop
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              When a prospect watches a 25-minute system teardown, YouTube immediately queues your next 3 videos. By the time they finish, they know your voice, your philosophy, and your track record better than their own team does.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-hairline hover:border-hairline-strong transition">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Unpaid Algorithmic Retargeting
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              Unlike Meta where you pay for every single retargeted impression, YouTube’s recommendation algorithm organically places your new content right in front of active viewers on their homepage for months at zero cost.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-hairline hover:border-hairline-strong transition">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Transfer-of-Trust Videos
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              We install custom post-booking greeting videos where the founder personally introduces the specific strategist taking the call—transferring 100% of founder authority directly to the sales team.
            </p>
          </div>
        </div>

        {/* The YouTube Compounding Engine & Fortress Economics Card */}
        <div className="p-7 sm:p-10 rounded-2xl bg-brand-navy text-white shadow-xl border border-slate-700/80 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-700/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Fortress Economics · Proven Performance Math</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                The RAD Funnel™ vs Traditional Paid Advertising
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Based on ₹2.5Cr+ in tracked ad spend & 7,100+ booked calls</span>
            </div>
          </div>

          {/* Side-by-side comparison matrix */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-700/80 text-slate-400 font-mono text-xs uppercase tracking-wider">
                  <th className="pb-3.5 font-bold">Metric / Friction Point</th>
                  <th className="pb-3.5 font-bold text-red-400">The Old 1-Hour Funnel (Meta Only)</th>
                  <th className="pb-3.5 font-bold text-emerald-400">The OVYRO Method™ (YouTube Anchor)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-3.5 font-semibold text-white">Top-of-Funnel Content Cost</td>
                  <td className="py-3.5 text-slate-400">$15.00 – $30.00 / cold VSL view</td>
                  <td className="py-3.5 text-emerald-300 font-bold">$0.17 / targeted video view</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-semibold text-white">7-Day Retargeting Cost</td>
                  <td className="py-3.5 text-slate-400">$25.00+ per click with ad fatigue</td>
                  <td className="py-3.5 text-emerald-300 font-bold">$0.32 (or $0.00 via YouTube algorithm)</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-semibold text-white">Pre-Call Prospect Exposure</td>
                  <td className="py-3.5 text-slate-400">&lt; 1 Hour (5m email + cold discovery)</td>
                  <td className="py-3.5 text-emerald-300 font-bold">7+ Hours across 11 touchpoints</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-semibold text-white">Consultation Show-Up Rate</td>
                  <td className="py-3.5 text-slate-400">35% – 50% (High ghosting rate)</td>
                  <td className="py-3.5 text-emerald-300 font-bold">&gt; 85% show-up via Show-Up VSL</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-semibold text-white">Sales Call Duration &amp; Dynamics</td>
                  <td className="py-3.5 text-slate-400">60+ minute high-friction pitch grind</td>
                  <td className="py-3.5 text-emerald-300 font-bold">20–30 min pre-sold order confirmation</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-semibold text-white">Ad Account Ban Vulnerability</td>
                  <td className="py-3.5 text-red-400 font-semibold">1 arbitrary ban = zero business revenue</td>
                  <td className="py-3.5 text-emerald-300 font-bold">Zero risk: permanent, owned brand moat</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4-Step Algorithmic Binge Loop Workflow */}
          <div className="mt-10 pt-8 border-t border-slate-700/60">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              How the YouTube Algorithmic Binge Loop Works
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white font-mono text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-xs font-bold text-white">Single Problem Click</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Prospect clicks 1 targeted ad or search result for an acute bottleneck.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white font-mono text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-xs font-bold text-white">Algorithm Auto-Queues</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  YouTube algorithm places 3–4 of your adjacent teardowns on their homepage and “Up Next” shelf.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white font-mono text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <span className="text-xs font-bold text-white">7+ Hours Clocked</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Prospect binge-watches your systems, learning your frameworks and validating your authority.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white font-mono text-xs font-bold flex items-center justify-center">
                    4
                  </span>
                  <span className="text-xs font-bold text-emerald-300">Pre-Sold Onboarding</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  They arrive on the calendar pre-sold, qualified, respecting your pricing and ready to pay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hormozi Brand Quote & Production Myth Buster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: The Hormozi Brand Maxim */}
          <div className="lg:col-span-5 p-7 rounded-xl bg-tint-yellow/40 border border-tint-yellow-bold flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-200/60 text-brand-orange-deep text-[11px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Unbreakable Brand Principle</span>
              </div>
              <blockquote className="text-base sm:text-lg font-bold text-ink leading-snug mb-3">
                “The longer I do business, the longer I believe in a single truth: Brand &gt; Everything.”
              </blockquote>
              <div className="text-xs font-semibold text-slate mb-4">
                — Alex Hormozi, Founder of Acquisition.com
              </div>
              <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                If your only advantage is a Facebook ad and a claim that “you care more,” competitors will copy your hooks and drive a race to the bottom. An owned YouTube media brand creates an untouchable category fortress that cannot be cloned.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/80 flex items-center gap-2 text-xs font-bold text-brand-orange-deep">
              <Lock className="w-4 h-4" />
              <span>Category Kings: Kylie ($1B), Rock ($800M), Hormozi, Gadzhi</span>
            </div>
          </div>

          {/* Right: The Production Myth Debunked */}
          <div className="lg:col-span-7 p-7 rounded-xl bg-surface border border-hairline flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                The Production Myth Debunked
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-3">
                “Do I need an expensive studio, cameras, or fancy editing?”
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                <strong>No. Over-produced content hurts B2B conversions.</strong> Decision-makers equate flashy cinematics with advertising. In today’s hyper-skeptical market, raw screen-share breakdowns, Lucidchart diagrams, and Notion walkthroughs outperform $10,000 studio productions by 300%+.
              </p>
              <div className="space-y-2 text-xs font-medium text-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Simple Loom / Screen-share frameworks convert highest</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>We provide the exact scripts, titles, and hooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Requires less than 2 hours of founder filming time per week</span>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-lg bg-white border border-hairline shadow-subtle text-xs text-charcoal">
              <strong className="text-primary block mb-1">The Compounding Math:</strong>
              50,000 TikTok views vanish in 48 hours. 1,500 targeted YouTube breakdown views compound evergreen search rankings, educate hundreds of high-intent prospects, and close $10,000+ retainers for years.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
