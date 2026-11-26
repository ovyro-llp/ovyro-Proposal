import React from "react";
import { AlertCircle, TrendingDown, Users, Flame, Clock, ShieldX } from "lucide-react";

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

        {/* 3 Core Failure Points of Old Funnels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-surface border border-hairline">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              The 1-Hour Exposure Illusion
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              5 minutes on an email, 2 minutes on a landing page, and a cold 45-minute discovery call equals less than 1 hour of total exposure. To the prospect, you are still an absolute stranger.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-hairline">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Founder & Closer Bottlenecks
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              Because zero trust was established beforehand, sales reps have to perform heroic emotional gymnastics on every call—resulting in 50%+ no-shows, 15% close rates, and massive salesperson burnout.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-hairline">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <ShieldX className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Commoditization & Banned Accounts
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              Without an owned media brand, competitors copy your ads and guarantees, triggering a race to the bottom. Worse, you are perpetually one arbitrary Meta ad-account ban away from zero revenue.
            </p>
          </div>
        </div>

        {/* The Discovery Quote Banner */}
        <div className="p-7 sm:p-8 rounded-xl bg-tint-yellow-bold border border-amber-300 text-charcoal">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                The OVYRO Discovery Formula
              </div>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                “For every client with a $30,000+ Lifetime Value, their journey started on YouTube.”
              </h4>
              <p className="text-sm text-charcoal/80 mt-1 max-w-2xl">
                They opted into a resource, binge-watched 3–4 long-form YouTube breakdowns, checked out client proof, and only booked once they already trusted the founder’s ability to fulfill.
              </p>
            </div>
            <div className="shrink-0 px-4 py-2.5 rounded-lg bg-white border border-amber-300/80 shadow-sm text-center">
              <div className="text-xs font-semibold text-slate uppercase">Core Metric</div>
              <div className="text-2xl font-extrabold text-primary">7-11-4 Rule</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
