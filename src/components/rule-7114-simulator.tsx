"use client";

import React, { useState } from "react";
import { RULE_7114_DATA } from "@/data/proposal-content";
import { Clock, Eye, Layers, Sparkles, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export function Rule7114Simulator() {
  const [exposureHours, setExposureHours] = useState<number>(7);

  // Dynamic calculations based on exposure hours (1 to 7+)
  const trustScore = Math.min(96, Math.round(15 + (exposureHours / 7) * 81));
  const noShowRate = Math.max(10, Math.round(55 - (exposureHours / 7) * 43));
  const closeRate = Math.min(58, Math.round(12 + (exposureHours / 7) * 44));
  const callDuration = Math.max(20, Math.round(65 - (exposureHours / 7) * 45));

  return (
    <section id="simulator" className="py-20 bg-surface border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-lavender text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <span>Behavioral Science · Google Consumer Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            The Google 7-11-4 Rule Simulator
          </h2>
          <p className="mt-3 text-base text-slate">
            Google’s consumer research verified that it requires an average of{" "}
            <strong className="text-ink">7 hours of content</strong>, across{" "}
            <strong className="text-ink">11 touchpoints</strong>, in{" "}
            <strong className="text-ink">4 distinct locations</strong> before a prospect trusts a company enough to make a high-ticket buying decision.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="bg-white rounded-2xl border border-hairline shadow-card p-6 sm:p-10 mb-12">
          {/* Slider Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-hairline">
            <div>
              <div className="text-xs uppercase font-bold text-steel tracking-wider">
                Simulated Prospect Pre-Call Content Exposure
              </div>
              <div className="text-2xl font-black text-ink mt-0.5 flex items-center gap-2">
                <span>{exposureHours} {exposureHours === 1 ? "Hour" : "Hours"} of Content Consumed</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                  exposureHours >= 5
                    ? "bg-tint-mint text-brand-green"
                    : exposureHours >= 3
                    ? "bg-tint-yellow text-amber-800"
                    : "bg-red-100 text-red-700"
                }`}>
                  {exposureHours >= 5 ? "OVYRO Method™ Mode" : exposureHours >= 3 ? "Transitioning" : "Traditional Funnel Mode"}
                </span>
              </div>
            </div>

            {/* Current Preset Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setExposureHours(1)}
                className={`text-xs px-3 py-1.5 rounded-md font-semibold transition ${
                  exposureHours === 1
                    ? "bg-brand-navy text-white"
                    : "bg-surface text-slate hover:bg-hairline"
                }`}
              >
                1 Hr (Old Funnel)
              </button>
              <button
                onClick={() => setExposureHours(4)}
                className={`text-xs px-3 py-1.5 rounded-md font-semibold transition ${
                  exposureHours === 4
                    ? "bg-brand-navy text-white"
                    : "bg-surface text-slate hover:bg-hairline"
                }`}
              >
                4 Hrs (Mid)
              </button>
              <button
                onClick={() => setExposureHours(7)}
                className={`text-xs px-3 py-1.5 rounded-md font-semibold transition ${
                  exposureHours === 7
                    ? "bg-primary text-white"
                    : "bg-surface text-slate hover:bg-hairline"
                }`}
              >
                7 Hrs (OVYRO Target)
              </button>
            </div>
          </div>

          {/* Range Slider */}
          <div className="py-6 border-b border-hairline">
            <input
              type="range"
              min="1"
              max="7"
              step="1"
              value={exposureHours}
              onChange={(e) => setExposureHours(parseInt(e.target.value))}
              className="w-full h-3 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-steel mt-2 font-medium">
              <span>1 Hour (Ad → Squeeze Page → 60m Discovery Call)</span>
              <span>4 Hours (Ad → Video Letter → Email Followups)</span>
              <span className="text-primary font-bold">7+ Hours (The OVYRO YouTube Binge Engine)</span>
            </div>
          </div>

          {/* Real-Time Simulated Conversion Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-surface border border-hairline">
              <div className="text-xs uppercase font-bold text-steel">Psychological Trust Index</div>
              <div className="text-2xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{trustScore}%</span>
                <span className="text-[11px] text-slate font-medium">
                  {exposureHours >= 5 ? "Pre-Sold" : "Guarded Stranger"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${trustScore}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-hairline">
              <div className="text-xs uppercase font-bold text-steel">No-Show Rate</div>
              <div className="text-2xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{noShowRate}%</span>
                <span className={`text-[11px] font-bold ${noShowRate > 30 ? "text-red-600" : "text-brand-green"}`}>
                  {noShowRate > 30 ? "High Ghosting" : "Shows Up Primed"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    noShowRate > 30 ? "bg-red-500" : "bg-brand-green"
                  }`}
                  style={{ width: `${noShowRate}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-hairline">
              <div className="text-xs uppercase font-bold text-steel">Consultation Close Rate</div>
              <div className="text-2xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{closeRate}%</span>
                <span className={`text-[11px] font-bold ${closeRate > 35 ? "text-brand-green" : "text-amber-700"}`}>
                  {closeRate > 35 ? "Order Confirmation" : "Hard Objection Push"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-brand-green h-full rounded-full transition-all duration-300"
                  style={{ width: `${closeRate}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-hairline">
              <div className="text-xs uppercase font-bold text-steel">Sales Call Duration</div>
              <div className="text-2xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{callDuration} Min</span>
                <span className="text-[11px] text-slate font-medium">
                  {callDuration <= 30 ? "Order Confirmation" : "60m Exhaustive Pitch"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-brand-navy-mid h-full rounded-full transition-all duration-300"
                  style={{ width: `${(callDuration / 65) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Cards: The Old Way vs The OVYRO Method */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Old Way Card */}
          <div className="p-6 rounded-xl bg-white border border-hairline">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-hairline">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-bold text-ink">The Old Way (~1 Hour Exposure)</h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-800">
                Fragile & High Friction
              </span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate">
              <li className="flex items-start gap-2">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>Ad to Squeeze Page:</strong> Collects cold leads who immediately forget who you are.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>Discovery Call Grind:</strong> Reps spend 45 minutes proving basic competence and legitimacy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>High No-Show Rate (45–60%):</strong> Leads ghost because there is zero emotional or time investment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>Low 10–15% Close Rates:</strong> Requires heroic sales pitches to close skeptical prospects.</span>
              </li>
            </ul>
          </div>

          {/* OVYRO Way Card */}
          <div className="p-6 rounded-xl bg-white border-2 border-primary/50 shadow-subtle relative">
            <div className="absolute -top-3 right-4 px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded">
              RECOMMENDED SYSTEM
            </div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-hairline">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-green" />
                <h3 className="font-bold text-ink">The OVYRO Method™ (7+ Hours Exposure)</h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-tint-mint text-brand-green">
                Predictable & Compounding
              </span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate">
              <li className="flex items-start gap-2">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>YouTube Binge Engine:</strong> Prospects consume 2 to 7 hours of high-value breakdowns.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>Pre-Sold Trust:</strong> They already know your voice, your frameworks, and your case proof.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>High Show-Up Rate (&gt;85%):</strong> Prospects eagerly attend because they respect the founder’s time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>40–60%+ Close Rates:</strong> 20-minute order-confirmation calls where they ask how soon we can start.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
