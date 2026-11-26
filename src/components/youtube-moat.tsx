import React from "react";
import { Youtube, Flame, Shield, ArrowUpRight, CheckCircle2, Clock, Play } from "lucide-react";

export function YoutubeMoat() {
  return (
    <section id="youtube-moat" className="py-20 bg-white border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Youtube className="w-3.5 h-3.5 fill-red-600" />
            <span>The OVYRO Core Lever · YouTube Binge Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Why YouTube is the Unbreakable Anchor <br />
            <span className="text-slate font-medium text-2xl sm:text-3xl">
              of Every High-Converting Funnel We Build.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Short-form content (Reels, TikToks) dies within 48 hours and builds shallow curiosity. YouTube is the only media platform on earth engineered for intentional, long-form binge watching—allowing prospects to consume 7+ hours of your frameworks before you ever ask for money.
          </p>
        </div>

        {/* 3 Strategic Pillars of the YouTube Engine */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-xl bg-surface border border-hairline">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              The 7-Hour Binge Experience
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              When a prospect watches a 25-minute breakdown, YouTube immediately queues up your next 3 videos. By the time they finish, they know your voice, your philosophy, and your track record better than their own team does.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-hairline">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Free Algorithmic Retargeting
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              Unlike Meta where you pay for every single retargeted impression, YouTube’s recommendation algorithm organically places your new content right in front of active viewers on their homepage for months for zero cost.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-hairline">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Transfer-of-Trust Videos
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              We install custom post-booking greeting videos where the founder personally introduces the specific strategist taking the call—transferring 100% of the founder’s credibility directly to the closer.
            </p>
          </div>
        </div>

        {/* Content Myth Buster Banner */}
        <div className="p-7 sm:p-8 rounded-xl bg-surface border border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                The Production Myth Debunked
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-3">
                “Do I need an expensive studio, cameras, or fancy editing?”
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                <strong>No. In fact, over-produced content hurts conversions.</strong> Prospects equate flashy cinematic b-roll with advertisements. In today’s hyper-skeptical market, raw, authentic screen-share breakdowns and high-conviction explanations outperform $10,000 studio productions by 300%+.
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

            {/* Simulated YouTube Video Card */}
            <div className="bg-brand-navy p-4 rounded-xl border border-slate-700 text-white shadow-lg">
              <div className="relative aspect-video rounded-lg bg-slate-800 overflow-hidden flex items-center justify-center group border border-slate-700/80">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">The OVYRO Method™ Breakdown</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 font-mono text-[10px]">32:14</span>
                </div>
              </div>
              <div className="mt-3.5 flex items-start justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-white text-sm">
                    How We Engineer Pre-Sold $10K+ B2B Client Acquisitions
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    OVYRO Method · 142K views · 98.4% Average Watch Duration
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
