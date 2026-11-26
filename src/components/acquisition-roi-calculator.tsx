"use client";

import React, { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface IndustryConfig {
  id: string;
  name: string;
  badge: string;
  leadLabel: string;
  callLabel: string;
  dealLabel: string;
  dealValueLabel: string;
  defaultBudget: number;
  defaultCpl: number;
  defaultQual: number;
  defaultShowup: number;
  defaultCloseRate: number;
  defaultAov: number;
  defaultMargin: number;
}

const INDUSTRIES: IndustryConfig[] = [
  {
    id: "b2b",
    name: "B2B Agency & Consulting",
    badge: "HIGH-TICKET B2B",
    leadLabel: "Targeted Inquiries",
    callLabel: "Strategy Sessions",
    dealLabel: "Retainer Clients",
    dealValueLabel: "Average Client LTV / Retainer",
    defaultBudget: 150000,
    defaultCpl: 450,
    defaultQual: 50,
    defaultShowup: 75,
    defaultCloseRate: 40,
    defaultAov: 250000,
    defaultMargin: 65,
  },
  {
    id: "education",
    name: "High-Ticket Education & Coaching",
    badge: "EDUCATION & ADVISORY",
    leadLabel: "Student Inquiries",
    callLabel: "Enrollment Calls",
    dealLabel: "Enrolled Students",
    dealValueLabel: "Tuition / Program Fee",
    defaultBudget: 100000,
    defaultCpl: 300,
    defaultQual: 45,
    defaultShowup: 70,
    defaultCloseRate: 35,
    defaultAov: 120000,
    defaultMargin: 75,
  },
  {
    id: "saas",
    name: "B2B SaaS & Tech Solutions",
    badge: "ENTERPRISE & TECH",
    leadLabel: "Demo Requests",
    callLabel: "Executive Demos",
    dealLabel: "Annual Contracts",
    dealValueLabel: "Annual Contract Value (ACV)",
    defaultBudget: 250000,
    defaultCpl: 800,
    defaultQual: 55,
    defaultShowup: 80,
    defaultCloseRate: 30,
    defaultAov: 450000,
    defaultMargin: 80,
  },
  {
    id: "clinical",
    name: "Specialized Clinical & Services",
    badge: "HIGH-VALUE SERVICES",
    leadLabel: "Patient Inquiries",
    callLabel: "Clinical Consultations",
    dealLabel: "Procedure / Care Cases",
    dealValueLabel: "Average Case / Treatment Value",
    defaultBudget: 75000,
    defaultCpl: 300,
    defaultQual: 45,
    defaultShowup: 65,
    defaultCloseRate: 35,
    defaultAov: 75000,
    defaultMargin: 55,
  },
];

export function AcquisitionRoiCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("b2b");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const activeInd = useMemo(
    () => INDUSTRIES.find((ind) => ind.id === selectedIndustry) || INDUSTRIES[0],
    [selectedIndustry]
  );

  // Currency multiplier (display & calculation baseline)
  const isUSD = currency === "USD";
  const currencySymbol = isUSD ? "$" : "₹";
  const rateDivisor = isUSD ? 85 : 1;

  // Form State
  const [budget, setBudget] = useState<number>(activeInd.defaultBudget);
  const [cpl, setCpl] = useState<number>(activeInd.defaultCpl);
  const [qualPct, setQualPct] = useState<number>(activeInd.defaultQual);
  const [showupRate, setShowupRate] = useState<number>(activeInd.defaultShowup);
  const [closeRate, setCloseRate] = useState<number>(activeInd.defaultCloseRate);
  const [aov, setAov] = useState<number>(activeInd.defaultAov);
  const [marginPct, setMarginPct] = useState<number>(activeInd.defaultMargin);

  // Switch Industry helper
  const handleIndustryChange = (indId: string) => {
    const next = INDUSTRIES.find((i) => i.id === indId);
    if (!next) return;
    setSelectedIndustry(indId);
    setBudget(next.defaultBudget);
    setCpl(next.defaultCpl);
    setQualPct(next.defaultQual);
    setShowupRate(next.defaultShowup);
    setCloseRate(next.defaultCloseRate);
    setAov(next.defaultAov);
    setMarginPct(next.defaultMargin);
  };

  // Calculations
  const metrics = useMemo(() => {
    const rawBudget = Math.max(0, budget);
    const rawCpl = Math.max(10, cpl);
    const qualRatio = Math.min(1, Math.max(0, qualPct / 100));
    const preShowRatio = Math.min(1, Math.max(0, showupRate / 100));
    const coldShowRatio = 0.15; // Uneducated cold inquiries show up at ~15%
    const preCloseRatio = Math.min(1, Math.max(0, closeRate / 100));
    const coldCloseRatio = 0.12; // Uneducated cold inquiries close at ~12%
    const rawAov = Math.max(0, aov);
    const marginRatio = Math.min(1, Math.max(0, marginPct / 100));

    // Volume
    const totalLeads = rawBudget / rawCpl;
    const preSoldLeads = totalLeads * qualRatio;
    const rawLeads = totalLeads - preSoldLeads;

    // Consultations Attended
    const preSoldCalls = preSoldLeads * preShowRatio;
    const rawCalls = rawLeads * coldShowRatio;
    const totalCalls = preSoldCalls + rawCalls;

    // Deals Closed
    const preSoldDeals = preSoldCalls * preCloseRatio;
    const rawDeals = rawCalls * coldCloseRatio;
    const totalDeals = preSoldDeals + rawDeals;

    // Financials
    const grossRevenue = totalDeals * rawAov;
    const grossContribution = grossRevenue * marginRatio;
    const netProfit = grossContribution - rawBudget;
    const roas = rawBudget > 0 ? grossRevenue / rawBudget : 0;
    const netRoas = rawBudget > 0 ? grossContribution / rawBudget : 0;

    // Break-even
    const perDealContribution = rawAov * marginRatio;
    const breakEvenDeals = perDealContribution > 0 ? rawBudget / perDealContribution : 0;

    // Benchmark comparison: what would a cold 1-hour ad funnel produce?
    const coldCallsOnly = totalLeads * coldShowRatio;
    const coldDealsOnly = coldCallsOnly * coldCloseRatio;
    const coldRevenue = coldDealsOnly * rawAov;
    const coldNet = coldRevenue * marginRatio - rawBudget;
    const profitLift = netProfit - coldNet;

    return {
      totalLeads: Math.round(totalLeads),
      totalCalls: Math.round(totalCalls * 10) / 10,
      totalDeals: Math.round(totalDeals * 10) / 10,
      grossRevenue: Math.round(grossRevenue),
      netProfit: Math.round(netProfit),
      roas: Math.round(roas * 10) / 10,
      netRoas: Math.round(netRoas * 10) / 10,
      breakEvenDeals: Math.round(breakEvenDeals * 10) / 10,
      profitLift: Math.round(profitLift),
    };
  }, [budget, cpl, qualPct, showupRate, closeRate, aov, marginPct]);

  // Currency Formatter
  const formatMoney = (val: number) => {
    const displayVal = isUSD ? Math.round(val / 85) : val;
    const abs = Math.abs(displayVal);
    const sign = displayVal < 0 ? "−" : "";

    if (!isUSD) {
      if (abs >= 10000000) return `${sign}₹${(abs / 10000000).toFixed(2)} Cr`;
      if (abs >= 100000) return `${sign}₹${(abs / 100000).toFixed(2)}L`;
      if (abs >= 1000) return `${sign}₹${(abs / 1000).toFixed(1)}k`;
      return `${sign}₹${abs.toLocaleString("en-IN")}`;
    } else {
      if (abs >= 1000000) return `${sign}$${(abs / 1000000).toFixed(2)}M`;
      if (abs >= 1000) return `${sign}$${(abs / 1000).toFixed(1)}k`;
      return `${sign}$${abs.toLocaleString("en-US")}`;
    }
  };

  return (
    <section id="roi-calculator" className="py-24 sm:py-32 bg-surface border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tint-mint text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Financial Economics · Interactive Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              Acquisition &amp; ROI Forecast Calculator
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate leading-relaxed">
              Model client volume, revenue yield, and net contribution based on your specific industry economics and the OVYRO 7-11-4 conversion mechanics.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1 bg-white rounded-lg border border-hairline shadow-subtle shrink-0 self-start md:self-auto">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1.5 rounded text-xs font-bold transition ${
                currency === "INR" ? "bg-brand-navy text-white" : "text-steel hover:text-ink"
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1.5 rounded text-xs font-bold transition ${
                currency === "USD" ? "bg-brand-navy text-white" : "text-steel hover:text-ink"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Industry Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => handleIndustryChange(ind.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedIndustry === ind.id
                  ? "bg-white border-primary shadow-subtle ring-2 ring-primary/20"
                  : "bg-white/60 border-hairline hover:bg-white text-slate hover:text-ink"
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-steel mb-1">
                {ind.badge}
              </div>
              <div className="font-bold text-xs sm:text-sm text-ink leading-snug">
                {ind.name}
              </div>
            </button>
          ))}
        </div>

        {/* Main Calculator Grid (Input Sliders + Real-Time Result Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-hairline shadow-subtle">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <h3 className="font-bold text-base sm:text-lg text-ink">
                Model Inputs ({activeInd.name})
              </h3>
              <span className="text-xs font-semibold text-steel">
                Adjust sliders or click presets
              </span>
            </div>

            {/* Quick Media Budget Presets */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                <span>Monthly Media &amp; Ad Budget</span>
                <span className="text-primary font-mono text-sm sm:text-base">
                  {formatMoney(budget)}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[50000, 100000, 150000, 250000, 500000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setBudget(preset)}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold border transition ${
                      budget === preset
                        ? "bg-brand-navy text-white border-brand-navy"
                        : "bg-surface border-hairline text-steel hover:text-ink"
                    }`}
                  >
                    {formatMoney(preset)}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min={25000}
                max={1000000}
                step={25000}
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-2.5 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-steel mt-1">
                <span>{formatMoney(25000)} (Test)</span>
                <span>{formatMoney(500000)} (Scale)</span>
                <span>{formatMoney(1000000)} (Enterprise)</span>
              </div>
            </div>

            {/* Cost Per Lead (CPL) */}
            <div className="pt-4 border-t border-hairline">
              <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                <span>Cost Per Lead ({activeInd.leadLabel})</span>
                <span className="text-primary font-mono text-sm sm:text-base">
                  {formatMoney(cpl)}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[200, 350, 500, 750, 1000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setCpl(preset)}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold border transition ${
                      cpl === preset
                        ? "bg-brand-navy text-white border-brand-navy"
                        : "bg-surface border-hairline text-steel hover:text-ink"
                    }`}
                  >
                    {formatMoney(preset)}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min={100}
                max={2000}
                step={50}
                value={cpl}
                onChange={(e) => setCpl(parseInt(e.target.value))}
                className="w-full h-2.5 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* 7-11-4 Pre-Education & Show-up Rates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-hairline">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                  <span>7-11-4 YouTube Binge %</span>
                  <span className="text-brand-green font-mono font-bold">{qualPct}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={90}
                  step={5}
                  value={qualPct}
                  onChange={(e) => setQualPct(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
                <span className="text-[10px] text-steel block mt-1">
                  % of leads consuming &gt;3 YouTube breakdowns
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                  <span>Pre-Sold Call Show-Up %</span>
                  <span className="text-brand-green font-mono font-bold">{showupRate}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={95}
                  step={5}
                  value={showupRate}
                  onChange={(e) => setShowupRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
                <span className="text-[10px] text-steel block mt-1">
                  Show-up rate for pre-educated prospects
                </span>
              </div>
            </div>

            {/* Close Rate & Deal Value */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-hairline">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                  <span>Consultation Close Rate</span>
                  <span className="text-primary font-mono font-bold">{closeRate}%</span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={75}
                  step={5}
                  value={closeRate}
                  onChange={(e) => setCloseRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-[10px] text-steel block mt-1">
                  Average 20-min order confirmation close
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                  <span>{activeInd.dealValueLabel}</span>
                  <span className="text-primary font-mono font-bold">{formatMoney(aov)}</span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={1000000}
                  step={25000}
                  value={aov}
                  onChange={(e) => setAov(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-[10px] text-steel block mt-1">
                  Contract / Client average value
                </span>
              </div>
            </div>

            {/* Operating Margin */}
            <div className="pt-4 border-t border-hairline">
              <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                <span>Gross Operating Margin %</span>
                <span className="text-steel font-mono font-bold">{marginPct}%</span>
              </div>
              <input
                type="range"
                min={30}
                max={95}
                step={5}
                value={marginPct}
                onChange={(e) => setMarginPct(parseInt(e.target.value))}
                className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-slate-600"
              />
            </div>
          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hero ROI Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
              <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Projected Net Return</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                {formatMoney(metrics.netProfit)}
              </div>
              <div className="text-xs text-slate-300">
                Net profit after subtracting {formatMoney(budget)} media spend.
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-700/80">
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">
                    Gross Return (ROAS)
                  </div>
                  <div className="text-2xl font-black text-emerald-400 mt-0.5">
                    {metrics.roas}×
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Gross revenue / media spend
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">
                    Break-Even Deals
                  </div>
                  <div className="text-2xl font-black text-amber-300 mt-0.5">
                    {metrics.breakEvenDeals}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {activeInd.dealLabel} needed
                  </div>
                </div>
              </div>
            </div>

            {/* Volume Throughput Card */}
            <div className="p-6 rounded-2xl bg-white border border-hairline shadow-subtle space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-steel pb-2 border-b border-hairline">
                Monthly Funnel Throughput
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate">{activeInd.leadLabel}:</span>
                <span className="font-extrabold text-ink font-mono text-base">
                  {metrics.totalLeads}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate">{activeInd.callLabel} Attended:</span>
                <span className="font-extrabold text-primary font-mono text-base">
                  {metrics.totalCalls}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate">{activeInd.dealLabel} Closed:</span>
                <span className="font-extrabold text-brand-green font-mono text-base">
                  {metrics.totalDeals}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-hairline">
                <span className="font-bold text-ink">Projected Gross Revenue:</span>
                <span className="font-black text-ink font-mono text-base sm:text-lg">
                  {formatMoney(metrics.grossRevenue)}
                </span>
              </div>
            </div>

            {/* The 7-11-4 Advantage Callout */}
            <div className="p-5 rounded-xl bg-tint-mint border border-emerald-200 text-xs text-emerald-950">
              <div className="font-bold text-sm text-emerald-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>The 7-11-4 Compounding Edge:</span>
              </div>
              <p className="leading-relaxed text-emerald-900/90">
                Because prospects consume 7+ hours of YouTube content prior to the call, you capture{" "}
                <strong className="text-emerald-950 font-bold">
                  +{formatMoney(metrics.profitLift)} additional net profit
                </strong>{" "}
                compared to a traditional 1-hour cold ad funnel with the exact same media spend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
