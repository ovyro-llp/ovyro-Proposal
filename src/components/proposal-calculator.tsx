"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Sparkles, Send } from "lucide-react";

export function ProposalCalculator() {
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "audit",
    "funnel_deploy",
    "youtube_engine",
    "client_conveyor",
  ]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    revenue: "₹3,00,000 – ₹10,00,000/mo ($4K – $15K)",
  });

  const modules = [
    {
      id: "audit",
      name: "Comprehensive 5-Layer Funnel Audit",
      description: "Complete technical & messaging crawl of existing ad copy, squeeze pages, tracking pixels, and conversion leaks.",
      mandatory: true,
      time: "Week 1",
    },
    {
      id: "funnel_deploy",
      name: "Bespoke Funnel Architecture & Multi-Step Qualifier",
      description: "Done-For-You minimalist lander, VSL video setup, Alpine.js revenue gate, and proprietary scheduling calendar.",
      mandatory: true,
      time: "Week 2–3",
    },
    {
      id: "youtube_engine",
      name: "The OVYRO YouTube Binge Engine Setup & Scripts",
      description: "Top 10 high-intent topic blueprint, thumbnail frameworks, and 'Transfer-of-Trust' consultant greeting videos.",
      mandatory: false,
      time: "Week 3–4",
    },
    {
      id: "client_conveyor",
      name: "The Client Conveyor System™ & Retention Ops",
      description: "Private Slack kickoff architecture, onboarding automation, and KPI tracking to prevent delivery breakdown.",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="proposal-scope" className="py-20 bg-white border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-lavender text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engagement Proposal · Custom Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Deploy The OVYRO Method™ in Your Business
          </h2>
          <p className="mt-3 text-base text-slate">
            We only take on a limited number of clients per month to ensure deep one-on-one execution. Review the deployment modules below and submit your application to schedule a private architecture session.
          </p>
        </div>

        {/* Qualification Box */}
        <div className="p-5 rounded-xl bg-surface border border-hairline mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 font-semibold text-charcoal">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>Client Eligibility: Businesses selling an offer of ≥ ₹50,000 / $2,500 with at least ₹3,00,000 / $4,000/mo cash flow.</span>
          </div>
          <span className="text-steel font-medium">Bespoke SLA & Delivery Guaranteed</span>
        </div>

        {/* 2-Column: Module Selector + Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-primary shadow-subtle"
                      : "bg-surface border-hairline opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? "bg-primary text-white" : "border border-steel bg-white"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-ink">{mod.name}</h4>
                          {mod.mandatory && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-tint-peach text-brand-orange-deep">
                              MANDATORY CORE
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate mt-1 leading-relaxed">
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
            <div className="p-5 rounded-xl bg-tint-mint border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-1">
                  Private Agency Slack Channel & Growth Advisory Included
                </strong>
                Direct daily communication with founder Hrushi and senior strategists. If campaign metrics ever dip, our team diagnoses and implements the fix immediately.
              </div>
            </div>
          </div>

          {/* Application Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-hairline shadow-subtle">
              <h3 className="text-lg font-bold text-ink mb-1">
                Schedule Architecture Kickoff
              </h3>
              <p className="text-xs text-slate mb-5">
                Tell us about your offer and current bottlenecks. We’ll review your business and come prepared with custom funnel pathways.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-white border border-hairline text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-tint-mint text-brand-green flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-ink">Application Received</h4>
                  <p className="text-xs text-slate leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our senior architecture team will review your website and reach out via WhatsApp at <strong>{formData.phone}</strong> within 4 business hours to coordinate your architecture session.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-primary font-bold hover:underline pt-2 block mx-auto"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-charcoal mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hrushi Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-white border border-hairline-strong text-ink focus:border-primary focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal mb-1">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. founder@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-white border border-hairline-strong text-ink focus:border-primary focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-white border border-hairline-strong text-ink focus:border-primary focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal mb-1">Company Website / Handle</label>
                    <input
                      type="text"
                      required
                      placeholder="https://yourcompany.com"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-white border border-hairline-strong text-ink focus:border-primary focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal mb-1">Current Monthly Cash Collected</label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full h-10 px-3 rounded-md bg-white border border-hairline-strong text-ink focus:border-primary focus:outline-none transition"
                    >
                      <option>Under ₹3,00,000/mo (&lt; $4K)</option>
                      <option>₹3,00,000 – ₹10,00,000/mo ($4K – $15K)</option>
                      <option>₹10,00,000 – ₹25,00,000/mo ($15K – $30K)</option>
                      <option>₹25,00,000+/mo ($30K+)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-pressed text-white font-bold py-3 px-4 rounded-md shadow-sm transition flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit & Request Architecture Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-steel text-center leading-normal mt-2">
                    Zero obligation. We will review your digital footprint and present your customized 7-11-4 roadmap.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
