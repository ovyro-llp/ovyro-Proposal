import React from "react";
import { PROOF_STUDIES } from "@/data/proposal-content";
import { CheckCircle2, TrendingUp, DollarSign, Calendar, ArrowUpRight, ShieldCheck, Eye } from "lucide-react";

export function ProofGallery() {
  const visualProofs = [
    {
      img: "/images/gdoc/img_0.png",
      title: "7,100+ Sales Meetings Created",
      subtitle: "Calendly Last 365 Days",
      stat: "20 Calls/Day Average",
      note: "Continuous stream of pre-sold, qualified prospects without cold outreach.",
    },
    {
      img: "/images/gdoc/img_1.png",
      title: "₹2.5Cr+ ($2.8M) Spend Testing",
      subtitle: "Google & Meta Ad Platform Audit",
      stat: "94.4M Impressions · 711K Clicks",
      note: "Data-backed conversion mechanics refined across millions in ad spend.",
    },
    {
      img: "/images/gdoc/img_10.png",
      title: "200% Organic Reach Doubling",
      subtitle: "YouTube Algorithm Optimization",
      stat: "2x Organic Reach in 12 Months",
      note: "Audience compounds organically without relying purely on paid ads.",
    },
    {
      img: "/images/gdoc/img_14.png",
      title: "600+ Sales in 3 Days",
      subtitle: "Low-Production Content Campaign",
      stat: "600+ Units Sold",
      note: "Raw, authentic video breakdowns outperforming high-budget studio ads.",
    },
    {
      img: "/images/gdoc/img_15.png",
      title: "86,000 Views in 48 Hours",
      subtitle: "YouTube Algorithmic Velocity",
      stat: "86K Views (Only 40K Subs)",
      note: "Leveraging YouTube suggested sidebar to capture intentional viewers.",
    },
    {
      img: "/images/gdoc/img_7.png",
      title: "26,311 Realtime Views",
      subtitle: "48-Hour Continuous Influx",
      stat: "416 Views/Hour Realtime",
      note: "Evergreen search rankings creating permanent, non-stop client exposure.",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-surface border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Track Record · Real Data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Proven Results Across Diverse Verticals
          </h2>
          <p className="mt-3 text-base text-slate">
            Whether scaling high-ticket B2B agencies, clinical specialists, or educational platforms, The OVYRO Method systematically turns strangers into pre-sold, high-paying clients.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {PROOF_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl bg-white border border-hairline shadow-subtle hover:shadow-card transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-tint-lavender text-brand-purple uppercase">
                    {study.category}
                  </span>
                  <span className="text-xs font-semibold text-steel flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{study.timeline}</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-ink mb-1">
                  {study.client}
                </h3>
                <div className="text-2xl font-black text-brand-green mb-3">
                  {study.result}
                </div>
                <div className="text-xs font-bold text-primary mb-3">
                  ★ Key Performance: {study.metric}
                </div>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between text-xs text-charcoal font-medium">
                <span className="flex items-center gap-1.5 text-brand-green">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Client Win</span>
                </span>
                <span className="text-steel">The OVYRO Method™</span>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Evidence & Platform Proofs Gallery (From Google Doc) */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Unfiltered Platform Proof</span>
              </div>
              <h3 className="text-2xl font-bold text-ink">
                Direct Analytics &amp; Campaign Dashboards
              </h3>
            </div>
            <span className="text-xs text-steel hidden sm:inline">
              Verified screenshots from client accounts &amp; live campaigns
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualProofs.map((vp, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-hairline shadow-subtle hover:shadow-card transition flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-lg overflow-hidden border border-hairline/80 bg-surface mb-3 aspect-[16/10] flex items-center justify-center">
                    <img
                      src={vp.img}
                      alt={vp.title}
                      className="w-full h-full object-contain p-1 hover:scale-105 transition duration-200"
                    />
                  </div>
                  <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-0.5">
                    {vp.subtitle}
                  </div>
                  <h4 className="text-sm font-bold text-ink mb-1">
                    {vp.title}
                  </h4>
                  <div className="text-xs font-extrabold text-primary mb-2">
                    {vp.stat}
                  </div>
                  <p className="text-xs text-slate leading-relaxed">
                    {vp.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aggregate Stats Bar */}
        <div className="p-6 rounded-xl bg-white border border-hairline grid grid-cols-2 sm:grid-cols-4 gap-6 text-center shadow-subtle">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-ink">₹2.8M+</div>
            <div className="text-xs text-steel font-medium mt-1">Verified Ad Spend Managed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-primary">50%+</div>
            <div className="text-xs text-steel font-medium mt-1">Average Close Rates</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-brand-green">&lt;15%</div>
            <div className="text-xs text-steel font-medium mt-1">Consultation No-Show Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-brand-orange">7.2 Hrs</div>
            <div className="text-xs text-steel font-medium mt-1">Average Pre-Call Watch Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
