"use client";

import React, { useState } from "react";
import { Youtube, Flame, Shield, ArrowUpRight, CheckCircle2, Clock, Play, ExternalLink } from "lucide-react";

export function YoutubeMoat() {
  const [isPlaying, setIsPlaying] = useState(false);

  const chapters = [
    { time: "00:00", title: "The 20 Calls/Day Benchmark & The Trust Recession" },
    { time: "02:54", title: "The Google 7-11-4 Behavioral Rule Deconstructed" },
    { time: "04:02", title: "Why the 1-Hour Funnel Fails (The Ghosting Cycle)" },
    { time: "07:38", title: "YouTube as the 7-Hour Pre-Selling Anchor" },
    { time: "18:00", title: "The Fortress Effect: Unbannable Brand Equity" },
    { time: "22:38", title: "Free Built-In Algorithmic Retargeting" },
    { time: "41:18", title: "The Client Conveyor System™ & Operational Scale" },
  ];

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

        {/* Master Video Breakdown Embed */}
        <div className="p-7 sm:p-10 rounded-2xl bg-brand-navy text-white shadow-xl border border-slate-700/80 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Context & Chapters */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
                <Youtube className="w-3.5 h-3.5 fill-red-400" />
                <span>Founder Masterclass · 43 Min</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Why You Cannot Close Clients: The RAD Funnel™ Deep Dive
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Watch founder Hrushi break down the exact mathematics of 20 sales calls per day, the 7-11-4 Google benchmark, and how we eliminate 60-minute pitch calls.
              </p>

              {/* Chapters list */}
              <div className="space-y-1.5 pt-2 border-t border-slate-700/60">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Video Chapters:
                </div>
                {chapters.map((ch, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-slate-800 text-primary font-bold">
                      {ch.time}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://www.youtube.com/watch?v=itcJ2dRZuSY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
                >
                  <span>Watch directly on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Embedded YouTube Video */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl">
                {isPlaying ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/itcJ2dRZuSY?autoplay=1&rel=0"
                    title="Why You Cannot Close Clients ? — The OVYRO Method"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="w-full h-full relative cursor-pointer group flex items-center justify-center bg-slate-950"
                  >
                    {/* High-res thumbnail preview */}
                    <img
                      src="https://img.youtube.com/vi/itcJ2dRZuSY/maxresdefault.jpg"
                      alt="Why You Cannot Close Clients"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Big Red YouTube Play Button */}
                    <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:bg-red-600 transition duration-200">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white ml-1" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <div>
                        <span className="font-bold block text-sm sm:text-base">
                          Why You Cannot Close Clients ?
                        </span>
                        <span className="text-slate-300 text-xs">
                          Radian Media / OVYRO · 43:51 Masterclass
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-black/80 font-mono text-xs font-semibold">
                        Click to Play
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
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

            <div className="p-5 rounded-xl bg-white border border-hairline shadow-subtle space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-steel">
                The Compounding Math of YouTube
              </div>
              <div className="space-y-2 text-xs text-charcoal leading-relaxed">
                <p>
                  • <strong>Instagram/TikTok:</strong> 50,000 views $\rightarrow$ 48-hour shelf life $\rightarrow$ 0 long-term compounding.
                </p>
                <p>
                  • <strong>The OVYRO YouTube Engine:</strong> 1,500 targeted views $\rightarrow$ Evergreen search ranking $\rightarrow$ 7 hours consumed per buyer $\rightarrow$ Pre-sold $10,000+ retainers closed for years.
                </p>
              </div>
              <div className="pt-2 border-t border-hairline text-[11px] font-bold text-primary">
                Focus on depth of trust, not vanity views.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
