"use client";

import React from "react";
import { PROOF_STUDIES } from "@/data/proposal-content";
import { CheckCircle2, Calendar, ShieldCheck } from "lucide-react";

export function ProofGallery() {
  const visualProofs = [
    {
      img: "/images/gdoc/img_0.png",
      title: "7,100+ Sales Calls Created",
      subtitle: "Calendly Last 365 Days",
      stat: "20 Calls/Day Average",
      note: "Continuous stream of pre-sold, qualified prospects without cold outreach.",
    },
    {
      img: "/images/gdoc/img_1.png",
      title: "₹2.5Cr+ ($2.8M) Spend Audit",
      subtitle: "Google & Meta Ad Platform Proof",
      stat: "94.4M Impressions · 711K Clicks",
      note: "Conversion mechanics refined across millions in ad spend.",
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
    <section id="case-studies" className="py-24 sm:py-32 bg-surface border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Case Studies &amp; Track Record
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            Verified outcomes across B2B agencies, clinical specialists, tech providers, and advisory firms.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {PROOF_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-hairline shadow-subtle hover:shadow-card transition flex flex-col justify-between"
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

                <h3 className="text-lg sm:text-xl font-extrabold text-ink mb-1">
                  {study.client}
                </h3>
                <div className="text-2xl sm:text-3xl font-black text-brand-green mb-2">
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
                  <span>Verified Client Outcome</span>
                </span>
                <span className="text-steel">The OVYRO Method™</span>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Evidence & Platform Proofs Gallery (From Google Doc) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Unfiltered Primary Source Data</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink">
                Campaign Dashboards &amp; Platform Audits
              </h3>
            </div>
            <span className="text-xs text-steel">
              Screenshots from client ad managers &amp; analytics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visualProofs.map((vp, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-hairline shadow-subtle hover:shadow-card transition flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl overflow-hidden border border-hairline/80 bg-surface mb-3.5 aspect-[16/10] flex items-center justify-center">
                    <img
                      src={vp.img}
                      alt={vp.title}
                      className="w-full h-full object-contain p-1 hover:scale-105 transition duration-200"
                    />
                  </div>
                  <div className="text-[11px] font-bold text-steel uppercase tracking-wider mb-1">
                    {vp.subtitle}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-ink mb-1">
                    {vp.title}
                  </h4>
                  <div className="text-xs sm:text-sm font-extrabold text-primary mb-2">
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
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-hairline grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-subtle">
          <div>
            <div className="text-2xl sm:text-4xl font-black text-ink">₹2.8M+</div>
            <div className="text-xs text-steel font-medium mt-1">Verified Ad Spend Tested</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-black text-primary">50%+</div>
            <div className="text-xs text-steel font-medium mt-1">Average Consultation Close Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-black text-brand-green">&lt;15%</div>
            <div className="text-xs text-steel font-medium mt-1">Consultation No-Show Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-black text-brand-orange">7.2 Hrs</div>
            <div className="text-xs text-steel font-medium mt-1">Average Pre-Call Watch Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
