"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

export function Rule7114Simulator() {
  const [exposureHours, setExposureHours] = useState<number>(7);

  // Dynamic calculations based on exposure hours (1 to 7+)
  const trustScore = Math.min(96, Math.round(15 + (exposureHours / 7) * 81));
  const noShowRate = Math.max(10, Math.round(55 - (exposureHours / 7) * 43));
  const closeRate = Math.min(58, Math.round(12 + (exposureHours / 7) * 44));
  const callDuration = Math.max(20, Math.round(65 - (exposureHours / 7) * 45));

  return (
    <section id="simulator" className="py-24 sm:py-32 bg-surface border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-lavender text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <span>Behavioral Science Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            The Google 7-11-4 Rule
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Google consumer research verified that high-ticket buyers require an average of{" "}
            <strong className="text-ink">7 hours of content</strong> across{" "}
            <strong className="text-ink">11 touchpoints</strong> in{" "}
            <strong className="text-ink">4 locations</strong> before purchasing.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="bg-white rounded-2xl border border-hairline shadow-card p-6 sm:p-10 mb-12">
          {/* Slider Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-hairline">
            <div>
              <div className="text-xs uppercase font-bold text-steel tracking-wider">
                Pre-Call Content Exposure
              </div>
              <div className="text-2xl sm:text-3xl font-black text-ink mt-1 flex flex-wrap items-center gap-2.5">
                <span>{exposureHours} {exposureHours === 1 ? "Hour" : "Hours"} Consumed</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                  exposureHours >= 5
                    ? "bg-tint-mint text-brand-green"
                    : exposureHours >= 3
                    ? "bg-tint-yellow text-amber-800"
                    : "bg-red-100 text-red-700"
                }`}>
                  {exposureHours >= 5 ? "OVYRO Method™ Mode" : exposureHours >= 3 ? "Transitioning" : "Traditional Funnel"}
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
              <span className="hidden sm:inline">4 Hours (Ad → Video Letter → Email Followups)</span>
              <span className="text-primary font-bold">7+ Hours (OVYRO YouTube Engine)</span>
            </div>
          </div>

          {/* Real-Time Conversion Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="p-4 sm:p-5 rounded-xl bg-surface border border-hairline">
              <div className="text-[11px] uppercase font-bold text-steel">Trust Index</div>
              <div className="text-2xl sm:text-3xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{trustScore}%</span>
                <span className="text-[11px] text-slate font-medium">
                  {exposureHours >= 5 ? "Pre-Sold" : "Guarded"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2.5 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${trustScore}%` }}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface border border-hairline">
              <div className="text-[11px] uppercase font-bold text-steel">No-Show Rate</div>
              <div className="text-2xl sm:text-3xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{noShowRate}%</span>
                <span className={`text-[11px] font-bold ${noShowRate > 30 ? "text-red-600" : "text-brand-green"}`}>
                  {noShowRate > 30 ? "High Ghosting" : "Shows Up Primed"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    noShowRate > 30 ? "bg-red-500" : "bg-brand-green"
                  }`}
                  style={{ width: `${noShowRate}%` }}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface border border-hairline">
              <div className="text-[11px] uppercase font-bold text-steel">Close Rate</div>
              <div className="text-2xl sm:text-3xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{closeRate}%</span>
                <span className={`text-[11px] font-bold ${closeRate > 35 ? "text-brand-green" : "text-amber-700"}`}>
                  {closeRate > 35 ? "Order Confirmation" : "Hard Pitch"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2.5 overflow-hidden">
                <div
                  className="bg-brand-green h-full rounded-full transition-all duration-300"
                  style={{ width: `${closeRate}%` }}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface border border-hairline">
              <div className="text-[11px] uppercase font-bold text-steel">Sales Call Duration</div>
              <div className="text-2xl sm:text-3xl font-black text-ink mt-1 flex items-baseline gap-1.5">
                <span>{callDuration} Min</span>
                <span className="text-[11px] text-slate font-medium">
                  {callDuration <= 30 ? "Order Confirmation" : "60m Pitch"}
                </span>
              </div>
              <div className="w-full bg-hairline h-1.5 rounded-full mt-2.5 overflow-hidden">
                <div
                  className="bg-brand-navy-mid h-full rounded-full transition-all duration-300"
                  style={{ width: `${(callDuration / 65) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Cards: The Old Way vs The OVYRO Method */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-hairline">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-hairline">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-bold text-ink">1-Hour Arbitrage Funnel</h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-800">
                Fragile
              </span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>Ad to Squeeze Page:</strong> Captures cold contacts who immediately forget you.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>45-Minute Pitch Grind:</strong> Closers spend 45 minutes proving basic legitimacy.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>45–60% No-Shows:</strong> Zero emotional or time investment beforehand.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-red-500 font-bold">✕</span>
                <span><strong>10–15% Close Rates:</strong> Requires aggressive closing techniques.</span>
              </li>
            </ul>
          </div>

          {/* OVYRO Way Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-primary/50 shadow-subtle relative">
            <div className="absolute -top-3 right-5 px-2.5 py-0.5 bg-primary text-white text-[10px] font-bold rounded">
              RECOMMENDED SPECIFICATION
            </div>
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-hairline">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-green" />
                <h3 className="font-bold text-ink">The OVYRO Method™ (7+ Hours)</h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-tint-mint text-brand-green">
                Compounding
              </span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>YouTube Binge Engine:</strong> Prospects consume 7+ hours of deep teardowns.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>Pre-Sold Trust:</strong> They arrive already understanding your exact framework.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>&gt;85% Show-Up Rate:</strong> Prospects show up eager because they respect your authority.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-brand-green font-bold">✓</span>
                <span><strong>40–60%+ Close Rates:</strong> 20-minute order confirmation calls to finalize onboarding.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
