"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, MessageCircle, ExternalLink, Sparkles } from "lucide-react";

export function ProposalCalculator() {
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "audit",
    "funnel_deploy",
    "youtube_engine",
    "client_conveyor",
  ]);

  const [companyName, setCompanyName] = useState("");
  const [revenueRange, setRevenueRange] = useState("₹3,00,000 – ₹10,00,000/mo ($4K – $15K)");

  const modules = [
    {
      id: "audit",
      name: "Comprehensive 5-Layer Funnel Audit",
      description: "Technical crawl of existing messaging, landing pages, tracking pixels, and conversion leaks.",
      mandatory: true,
      time: "Week 1",
    },
    {
      id: "funnel_deploy",
      name: "Bespoke Funnel & Multi-Step Qualifier Setup",
      description: "Custom Notion-minimalist lander, VSL setup, qualification logic, and scheduling calendar.",
      mandatory: true,
      time: "Week 2–3",
    },
    {
      id: "youtube_engine",
      name: "OVYRO YouTube Binge Engine Setup & Scripts",
      description: "Top 10 high-intent topic roadmaps, thumbnail frameworks, and 'Transfer-of-Trust' greeting video scripts.",
      mandatory: false,
      time: "Week 3–4",
    },
    {
      id: "client_conveyor",
      name: "Client Conveyor System™ & Delivery Ops",
      description: "Private client Slack channel setup, onboarding automation, and KPI tracking to prevent delivery breakdown.",
      mandatory: false,
      time: "Week 4+",
    },
  ];

  const toggleModule = (id: string) => {
    if (id === "audit" || id === "funnel_deploy") return; // mandatory core
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Build prefilled WhatsApp message for 7875920111
  const rawMessage = `Hi Hrushi, I reviewed the OVYRO Method proposal and funnel architecture. I want to schedule an Architecture Kickoff session for my business.

${companyName.trim() ? `Business: ${companyName.trim()}\n` : ""}${revenueRange ? `Current Cash Flow: ${revenueRange}\n` : ""}
Looking forward to connecting!`.trim();

  const whatsappUrl = `https://wa.me/917875920111?text=${encodeURIComponent(rawMessage)}`;

  return (
    <section id="proposal-scope" className="py-24 sm:py-32 bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-lavender text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <span>Proposal Engagement Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Deployment Scope &amp; Architecture Kickoff
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
            We onboard a limited cohort of clients each month for direct execution. Select your required deployment modules below and message founder Hrushi directly on WhatsApp to coordinate kickoff.
          </p>
        </div>

        {/* Qualification Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-hairline mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-semibold text-charcoal">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green shrink-0" />
            <span>Eligibility: Offers of ≥ ₹50,000 / $2,500 with at least ₹3,00,000 / $4,000/mo existing cash flow.</span>
          </div>
          <span className="text-steel font-medium shrink-0">Bespoke SLA Guaranteed</span>
        </div>

        {/* 2-Column: Module Selector + Direct WhatsApp Kickoff Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-steel mb-2">
              Select Deployment Modules:
            </div>

            {modules.map((mod) => {
              const isSelected = selectedModules.includes(mod.id);
              return (
                <div
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-primary shadow-subtle"
                      : "bg-surface border-hairline opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? "bg-primary text-white" : "border border-steel bg-white"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-sm sm:text-base text-ink">{mod.name}</h4>
                          {mod.mandatory && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-tint-peach text-brand-orange-deep">
                              MANDATORY CORE
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate mt-1.5 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-steel font-mono shrink-0">
                      {mod.time}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Support Callout */}
            <div className="p-6 rounded-2xl bg-tint-mint border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-start gap-3.5">
              <ShieldCheck className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-1">
                  Private Agency Slack Channel &amp; Strategic Advisory Included
                </strong>
                Direct daily communication with founder Hrushi and senior strategists throughout the entire deployment and launch cycle.
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Action Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-hairline shadow-subtle space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#25D366]/15 text-[#128C7E] text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>Direct Founder Access</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink">
                  Schedule Architecture Kickoff
                </h3>
                <p className="text-xs sm:text-sm text-slate mt-1 leading-relaxed">
                  Connect with founder Hrushi Sharma on WhatsApp at <strong className="text-ink font-semibold">+91 78759 20111</strong> to coordinate your session.
                </p>
              </div>

              {/* Optional Quick Context Inputs */}
              <div className="space-y-3 pt-2 border-t border-hairline text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-charcoal mb-1">
                    Company Website / Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. yourcompany.com"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-hairline-strong text-ink text-sm focus:border-[#25D366] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal mb-1">
                    Current Monthly Cash Collected
                  </label>
                  <select
                    value={revenueRange}
                    onChange={(e) => setRevenueRange(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-hairline-strong text-ink text-sm focus:border-[#25D366] focus:outline-none transition"
                  >
                    <option>Under ₹3,00,000/mo (&lt; $4K)</option>
                    <option>₹3,00,000 – ₹10,00,000/mo ($4K – $15K)</option>
                    <option>₹10,00,000 – ₹25,00,000/mo ($15K – $30K)</option>
                    <option>₹25,00,000+/mo ($30K+)</option>
                  </select>
                </div>
              </div>

              {/* Prefilled Message Bubble */}
              <div className="p-4 rounded-xl bg-white border border-hairline shadow-subtle text-xs space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-steel flex items-center justify-between">
                  <span>Prefilled WhatsApp Message</span>
                  <span className="text-[#128C7E] font-semibold">Ready to Send</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] text-slate font-mono text-[11px] whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto">
                  {rawMessage}
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-4 px-6 rounded-xl shadow-md transition flex items-center justify-center gap-2.5 text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Message on WhatsApp (7875920111)</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <div className="text-[11px] text-steel text-center space-y-0.5">
                <div>Direct line: <strong>+91 78759 20111</strong> · Hrushi Sharma</div>
                <div>Typical response time: under 15 minutes during business hours.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
