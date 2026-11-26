"use client";

import React, { useState } from "react";
import { CLIENT_WINS, ClientWin } from "@/data/testimonials-data";
import { CheckCircle2, ShieldCheck, ZoomIn, X, ExternalLink } from "lucide-react";

export function TestimonialsVault() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeModalWin, setActiveModalWin] = useState<ClientWin | null>(null);

  const filteredWins = activeFilter === "all"
    ? CLIENT_WINS
    : CLIENT_WINS.filter((w) => w.category === activeFilter);

  const counts = {
    all: CLIENT_WINS.length,
    revenue: CLIENT_WINS.filter((w) => w.category === "Revenue & Cash").length,
    feedback: CLIENT_WINS.filter((w) => w.category === "Client Feedback").length,
    pipeline: CLIENT_WINS.filter((w) => w.category === "Pipeline & Booking").length,
  };

  return (
    <section id="client-wins" className="py-24 sm:py-32 bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Client Results · 30 Primary Evidence Records</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              Client Win Archive
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate leading-relaxed">
              Unfiltered Slack notifications, Stripe payouts, and calendar booking screenshots from client deployments. Tap any record to inspect full resolution.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface border border-hairline rounded-xl shrink-0">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeFilter === "all"
                  ? "bg-brand-navy text-white shadow-subtle"
                  : "text-steel hover:text-ink"
              }`}
            >
              All Records ({counts.all})
            </button>
            <button
              onClick={() => setActiveFilter("Revenue & Cash")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeFilter === "Revenue & Cash"
                  ? "bg-brand-navy text-white shadow-subtle"
                  : "text-steel hover:text-ink"
              }`}
            >
              Revenue &amp; Cash ({counts.revenue})
            </button>
            <button
              onClick={() => setActiveFilter("Client Feedback")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeFilter === "Client Feedback"
                  ? "bg-brand-navy text-white shadow-subtle"
                  : "text-steel hover:text-ink"
              }`}
            >
              Slack Feedback ({counts.feedback})
            </button>
            <button
              onClick={() => setActiveFilter("Pipeline & Booking")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeFilter === "Pipeline & Booking"
                  ? "bg-brand-navy text-white shadow-subtle"
                  : "text-steel hover:text-ink"
              }`}
            >
              Pipeline ({counts.pipeline})
            </button>
          </div>
        </div>

        {/* 30-Item Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredWins.map((win, idx) => (
            <div
              key={win.id}
              onClick={() => setActiveModalWin(win)}
              className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-surface border border-hairline hover:border-primary/50 hover:bg-white shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom Overlay */}
                <div className="relative rounded-xl overflow-hidden border border-hairline/80 bg-white mb-3.5 aspect-[16/10] flex items-center justify-center">
                  <img
                    src={win.file}
                    alt={win.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-steel">
                    Record #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1} · {win.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-brand-green">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-ink mb-1 group-hover:text-primary transition-colors">
                  {win.title}
                </h4>

                <p className="text-xs text-slate leading-relaxed">
                  {win.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-[11px] text-steel">
                <span>The OVYRO Method™</span>
                <span className="text-primary font-semibold flex items-center gap-1 group-hover:underline">
                  Inspect Record <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalWin && (
          <div
            className="fixed inset-0 z-50 bg-brand-navy/90 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center animate-fadeIn"
            onClick={() => setActiveModalWin(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl border border-hairline shadow-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-hairline mb-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-steel tracking-wider">
                    {activeModalWin.category} · Verified Proof
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    {activeModalWin.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalWin(null)}
                  className="w-8 h-8 rounded-full bg-surface border border-hairline flex items-center justify-center text-charcoal hover:bg-hairline transition"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image */}
              <div className="flex-1 overflow-auto flex items-center justify-center bg-[#fafaf9] rounded-xl p-2 sm:p-4 border border-hairline min-h-[300px]">
                <img
                  src={activeModalWin.file}
                  alt={activeModalWin.title}
                  className="max-h-[65vh] w-auto object-contain rounded"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-hairline mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate">
                <span>{activeModalWin.highlight}</span>
                <span className="text-primary font-bold">Documented Client Win</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
