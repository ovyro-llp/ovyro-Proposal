"use client";

import React from "react";
import { TrendingDown, Users, ShieldX } from "lucide-react";

export function TrustGapSection() {
  return (
    <section id="method" className="py-24 sm:py-32 bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-peach text-brand-orange-deep text-xs font-bold uppercase tracking-wider mb-3">
            <span>The Core Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            The 1-Hour Funnel Failure. <br />
            <span className="text-slate font-medium text-2xl sm:text-3xl lg:text-4xl">
              Why cold ads to discovery calls no longer convert.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Running ads to a landing page to capture contact details for a 60-minute pitch call fails with high-ticket buyers. Zero trust beforehand creates high friction, defensive calls, and dismal close rates.
          </p>
        </div>

        {/* 3 Core Failure Points with Authentic Google Doc Diagrams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1: The 1-Hour Exposure Illusion + Authentic Diagram */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline flex flex-col justify-between hover:shadow-subtle transition">
            <div>
              <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-5">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                Shallow Exposure (&lt; 1 Hour)
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed mb-6">
                2 minutes on a lander + a 45-minute discovery call equals less than 1 hour total brand exposure. Prospects remain guarded strangers.
              </p>
            </div>
            {/* Embedded Diagram from Google Doc: The Old Way (Exposure = ~1 Hour) */}
            <div className="p-3 rounded-xl bg-white border border-hairline shadow-subtle overflow-hidden">
              <div className="text-[10px] font-bold uppercase tracking-wider text-steel mb-2">
                Exposure Breakdown · The Old Way
              </div>
              <img
                src="/images/gdoc/img_2.png"
                alt="The Old Way: Exposure = ~1 Hour"
                className="w-full h-auto rounded border border-hairline/60 object-contain hover:scale-105 transition duration-200"
              />
            </div>
          </div>

          {/* Card 2: Closer Bottlenecks */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline flex flex-col justify-between hover:shadow-subtle transition">
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                Closer Burnout &amp; Ghosting
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed mb-6">
                Zero pre-established trust forces closers into defensive objection handling, leading to 50%+ no-shows and low 15% close rates.
              </p>
            </div>
            {/* Authentic Calendly Metric Proof from Google Doc */}
            <div className="p-3 sm:p-4 rounded-xl bg-white border border-hairline shadow-subtle">
              <div className="text-[10px] font-bold uppercase tracking-wider text-steel mb-2">
                Verified OVYRO Pipeline Output
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/gdoc/img_0.png"
                  alt="Calendly Analytics: 7.1K events created"
                  className="w-20 sm:w-24 h-auto rounded border border-hairline object-cover"
                />
                <div className="text-xs">
                  <span className="font-extrabold text-ink block text-sm sm:text-base">7,100+ Calls</span>
                  <span className="text-slate text-[11px] sm:text-xs">~20 daily pre-sold calls with pre-educated buyers.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Banned Accounts + Authentic Meta Warning Modal */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline flex flex-col justify-between hover:shadow-subtle transition">
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
                <ShieldX className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                Ad Ban Vulnerability
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed mb-6">
                Pure ad arbitrage builds zero brand equity. One arbitrary Meta or Google ban eliminates entire client acquisition overnight.
              </p>
            </div>
            {/* Embedded Screenshot from Google Doc: Meta Ad Account Disabled */}
            <div className="p-3 rounded-xl bg-white border border-rose-200 shadow-subtle overflow-hidden">
              <div className="text-[10px] font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                <span>Single-Point-of-Failure Risk</span>
              </div>
              <img
                src="/images/gdoc/img_4.png"
                alt="Ad Account Disabled Screenshot"
                className="w-full h-auto rounded border border-rose-200/60 object-contain hover:scale-105 transition duration-200"
              />
            </div>
          </div>
        </div>

        {/* The Discovery Quote & Ad Spend Proof Banner */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-tint-yellow-bold border border-amber-300 text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                Data-Backed Finding
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-ink leading-snug">
                “Every client with a $30,000+ Lifetime Value watched long-form YouTube breakdowns before booking.”
              </h4>
              <p className="text-xs sm:text-sm lg:text-base text-charcoal/80 mt-3 leading-relaxed">
                They consumed 3–4 breakdowns, verified case proof, and only booked once they fully trusted fulfillment capability.
              </p>
            </div>

            {/* Embedded Google/Meta Ad Spend Proof from Google Doc */}
            <div className="lg:col-span-4 p-4 rounded-xl bg-white border border-amber-300 shadow-sm text-center">
              <div className="text-[10px] font-bold text-steel uppercase tracking-wider mb-2">
                Tested Across ₹2.5Cr+ Ad Spend
              </div>
              <img
                src="/images/gdoc/img_1.png"
                alt="Google/Meta Ads Proof: 94.4M Impressions, $2.8M Cost"
                className="w-full h-auto rounded border border-hairline object-contain mb-2"
              />
              <div className="text-xs sm:text-sm font-mono font-bold text-primary">
                94.4M Impressions · 711K Clicks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
