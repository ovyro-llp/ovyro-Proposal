import React from "react";
import { AlertCircle, TrendingDown, Users, Flame, Clock, ShieldX, CheckCircle2 } from "lucide-react";

export function TrustGapSection() {
  return (
    <section id="method" className="py-20 bg-white border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-peach text-brand-orange-deep text-xs font-bold uppercase tracking-wider mb-3">
            <span>Market Reality · The Trust Recession</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight leading-tight">
            Why Traditional Funnels No Longer Work: <br />
            <span className="text-slate font-medium text-2xl sm:text-3xl">
              Skepticism is at an all-time high.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Running Meta or Google ads directly to a squeeze page, grabbing a name and email, and expecting a cold prospect to buy on a 60-minute pitch call is dead. Prospects have developed an instant mental firewall: <em>“They are just trying to pitch me.”</em>
          </p>
        </div>

        {/* 3 Core Failure Points with Authentic Google Doc Diagrams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: The 1-Hour Exposure Illusion + Authentic Diagram */}
          <div className="p-6 rounded-xl bg-surface border border-hairline flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">
                The 1-Hour Exposure Illusion
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed mb-4">
                5 minutes on an email, 2 minutes on a landing page, and a cold 45-minute discovery call equals less than 1 hour of total exposure. To the prospect, you are still an absolute stranger.
              </p>
            </div>
            {/* Embedded Diagram from Google Doc: The Old Way (Exposure = ~1 Hour) */}
            <div className="mt-3 p-2 rounded-lg bg-white border border-hairline shadow-subtle overflow-hidden">
              <div className="text-[10px] font-bold uppercase tracking-wider text-steel mb-1">
                Visual Breakdown · The Old Way
              </div>
              <img
                src="/images/gdoc/img_2.png"
                alt="The Old Way: Exposure = ~1 Hour"
                className="w-full h-auto rounded border border-hairline/60 object-contain hover:scale-105 transition duration-200"
              />
            </div>
          </div>

          {/* Card 2: Closer Bottlenecks */}
          <div className="p-6 rounded-xl bg-surface border border-hairline flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">
                Founder &amp; Closer Bottlenecks
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed mb-4">
                Because zero trust was established beforehand, sales reps have to perform heroic emotional gymnastics on every call—resulting in 50%+ no-shows, 15% close rates, and massive salesperson burnout.
              </p>
            </div>
            {/* Authentic Calendly Metric Proof from Google Doc */}
            <div className="mt-3 p-3 rounded-lg bg-white border border-hairline shadow-subtle">
              <div className="text-[10px] font-bold uppercase tracking-wider text-steel mb-1">
                Verified Appointment Impact
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/gdoc/img_0.png"
                  alt="Calendly Analytics: 7.1K events created"
                  className="w-20 h-auto rounded border border-hairline object-cover"
                />
                <div className="text-xs">
                  <span className="font-extrabold text-ink block text-sm">7,100+ Events</span>
                  <span className="text-slate text-[11px]">~20 sales calls/day booked with pre-educated buyers.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Banned Accounts + Authentic Meta Warning Modal */}
          <div className="p-6 rounded-xl bg-surface border border-hairline flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <ShieldX className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">
                Commoditization &amp; Banned Accounts
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed mb-4">
                Without an owned media brand, competitors copy your ads and guarantees. Worse, you are perpetually one arbitrary Meta ad-account ban away from zero revenue.
              </p>
            </div>
            {/* Embedded Screenshot from Google Doc: Meta Ad Account Disabled */}
            <div className="mt-3 p-2 rounded-lg bg-white border border-rose-200 shadow-subtle overflow-hidden">
              <div className="text-[10px] font-bold uppercase tracking-wider text-rose-700 mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                <span>The Single-Point-of-Failure Risk</span>
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
        <div className="p-7 sm:p-8 rounded-xl bg-tint-yellow-bold border border-amber-300 text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                The OVYRO Discovery Formula
              </div>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                “For every client with a $30,000+ Lifetime Value, their journey started on YouTube.”
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/80 mt-2 leading-relaxed">
                They opted into a resource, binge-watched 3–4 long-form YouTube breakdowns, checked out client proof, and only booked once they already trusted the founder’s ability to fulfill.
              </p>
            </div>

            {/* Embedded Google/Meta Ad Spend Proof from Google Doc */}
            <div className="lg:col-span-4 p-3 rounded-lg bg-white border border-amber-300/80 shadow-sm text-center">
              <div className="text-[10px] font-bold text-steel uppercase tracking-wider mb-1">
                Verified Spend in Funnel Testing
              </div>
              <img
                src="/images/gdoc/img_1.png"
                alt="Google/Meta Ads Proof: 94.4M Impressions, $2.8M Cost"
                className="w-full h-auto rounded border border-hairline object-contain mb-1"
              />
              <div className="text-[11px] font-mono font-bold text-primary">
                94.4M Impressions · 711K Clicks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
