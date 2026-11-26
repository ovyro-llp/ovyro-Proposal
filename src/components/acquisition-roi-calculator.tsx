"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  RotateCcw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface CurrencyBaseline {
  defaultBudget: number;
  budgetPresets: number[];
  budgetMin: number;
  budgetMax: number;
  budgetStep: number;
  defaultCpl: number;
  cplPresets: number[];
  cplMin: number;
  cplMax: number;
  cplStep: number;
  defaultAov: number;
  aovPresets: number[];
  aovMin: number;
  aovMax: number;
  aovStep: number;
  sensitivityCpls: number[];
}

interface IndustryConfig {
  id: string;
  name: string;
  badge: string;
  leadLabel: string;
  callLabel: string;
  dealLabel: string;
  dealValueLabel: string;
  defaultQual: number;
  preBookRate: number; // % of pre-educated leads booking a call
  coldBookRate: number; // % of raw/cold leads booking a call
  defaultShowup: number; // % of pre-educated booked calls attending
  coldShowup: number; // % of raw booked calls attending
  defaultCloseRate: number; // % of pre-educated attended calls closing
  coldCloseRate: number; // % of raw attended calls closing
  defaultMargin: number;
  inr: CurrencyBaseline;
  usd: CurrencyBaseline;
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
    defaultQual: 50,
    preBookRate: 25,
    coldBookRate: 5,
    defaultShowup: 80,
    coldShowup: 50,
    defaultCloseRate: 35,
    coldCloseRate: 12,
    defaultMargin: 65,
    inr: {
      defaultBudget: 150000,
      budgetPresets: [50000, 100000, 150000, 250000, 500000],
      budgetMin: 25000,
      budgetMax: 1000000,
      budgetStep: 25000,
      defaultCpl: 500,
      cplPresets: [250, 400, 500, 750, 1000],
      cplMin: 100,
      cplMax: 2000,
      cplStep: 50,
      defaultAov: 250000,
      aovPresets: [100000, 150000, 250000, 400000, 600000],
      aovMin: 50000,
      aovMax: 1500000,
      aovStep: 25000,
      sensitivityCpls: [350, 500, 750],
    },
    usd: {
      defaultBudget: 2500,
      budgetPresets: [1000, 2500, 5000, 10000, 20000],
      budgetMin: 500,
      budgetMax: 30000,
      budgetStep: 500,
      defaultCpl: 25,
      cplPresets: [15, 25, 40, 60, 90],
      cplMin: 10,
      cplMax: 150,
      cplStep: 5,
      defaultAov: 3500,
      aovPresets: [1500, 2500, 3500, 6000, 10000],
      aovMin: 1000,
      aovMax: 25000,
      aovStep: 250,
      sensitivityCpls: [15, 25, 45],
    },
  },
  {
    id: "education",
    name: "High-Ticket Education & Coaching",
    badge: "EDUCATION & ADVISORY",
    leadLabel: "Student Inquiries",
    callLabel: "Enrollment Calls",
    dealLabel: "Enrolled Students",
    dealValueLabel: "Tuition / Program Fee",
    defaultQual: 45,
    preBookRate: 20,
    coldBookRate: 5,
    defaultShowup: 75,
    coldShowup: 50,
    defaultCloseRate: 35,
    coldCloseRate: 10,
    defaultMargin: 75,
    inr: {
      defaultBudget: 100000,
      budgetPresets: [35000, 75000, 100000, 200000, 400000],
      budgetMin: 25000,
      budgetMax: 800000,
      budgetStep: 25000,
      defaultCpl: 350,
      cplPresets: [150, 250, 350, 500, 750],
      cplMin: 100,
      cplMax: 1500,
      cplStep: 25,
      defaultAov: 120000,
      aovPresets: [50000, 80000, 120000, 200000, 350000],
      aovMin: 25000,
      aovMax: 600000,
      aovStep: 10000,
      sensitivityCpls: [200, 350, 550],
    },
    usd: {
      defaultBudget: 2000,
      budgetPresets: [1000, 2000, 4000, 7500, 15000],
      budgetMin: 500,
      budgetMax: 20000,
      budgetStep: 500,
      defaultCpl: 20,
      cplPresets: [10, 20, 35, 50, 80],
      cplMin: 5,
      cplMax: 120,
      cplStep: 5,
      defaultAov: 2000,
      aovPresets: [1000, 1500, 2000, 3500, 6000],
      aovMin: 500,
      aovMax: 15000,
      aovStep: 250,
      sensitivityCpls: [12, 20, 35],
    },
  },
  {
    id: "saas",
    name: "B2B SaaS & Tech Solutions",
    badge: "ENTERPRISE & TECH",
    leadLabel: "Demo Requests",
    callLabel: "Executive Demos",
    dealLabel: "Annual Contracts",
    dealValueLabel: "Annual Contract Value (ACV)",
    defaultQual: 55,
    preBookRate: 30,
    coldBookRate: 8,
    defaultShowup: 85,
    coldShowup: 50,
    defaultCloseRate: 25,
    coldCloseRate: 8,
    defaultMargin: 80,
    inr: {
      defaultBudget: 250000,
      budgetPresets: [100000, 200000, 250000, 500000, 1000000],
      budgetMin: 50000,
      budgetMax: 1500000,
      budgetStep: 25000,
      defaultCpl: 1000,
      cplPresets: [400, 700, 1000, 1500, 2200],
      cplMin: 200,
      cplMax: 3000,
      cplStep: 50,
      defaultAov: 450000,
      aovPresets: [200000, 350000, 450000, 750000, 1500000],
      aovMin: 100000,
      aovMax: 2500000,
      aovStep: 50000,
      sensitivityCpls: [600, 1000, 1600],
    },
    usd: {
      defaultBudget: 5000,
      budgetPresets: [2000, 5000, 10000, 20000, 40000],
      budgetMin: 1000,
      budgetMax: 50000,
      budgetStep: 1000,
      defaultCpl: 60,
      cplPresets: [30, 45, 60, 90, 140],
      cplMin: 15,
      cplMax: 250,
      cplStep: 5,
      defaultAov: 6000,
      aovPresets: [2500, 4000, 6000, 12000, 25000],
      aovMin: 1500,
      aovMax: 50000,
      aovStep: 500,
      sensitivityCpls: [35, 60, 100],
    },
  },
  {
    id: "clinical",
    name: "Specialized Clinical & Services",
    badge: "HIGH-VALUE SERVICES",
    leadLabel: "Patient Inquiries",
    callLabel: "Clinical Consultations",
    dealLabel: "Procedure / Care Cases",
    dealValueLabel: "Average Case / Treatment Value",
    defaultQual: 45,
    preBookRate: 45,
    coldBookRate: 20,
    defaultShowup: 70,
    coldShowup: 40,
    defaultCloseRate: 35,
    coldCloseRate: 15,
    defaultMargin: 55,
    inr: {
      defaultBudget: 75000,
      budgetPresets: [30000, 50000, 75000, 120000, 200000],
      budgetMin: 20000,
      budgetMax: 500000,
      budgetStep: 10000,
      defaultCpl: 300,
      cplPresets: [150, 220, 300, 450, 650],
      cplMin: 100,
      cplMax: 1200,
      cplStep: 25,
      defaultAov: 75000,
      aovPresets: [30000, 50000, 75000, 120000, 250000],
      aovMin: 15000,
      aovMax: 500000,
      aovStep: 10000,
      sensitivityCpls: [200, 300, 450],
    },
    usd: {
      defaultBudget: 1500,
      budgetPresets: [750, 1500, 3000, 6000, 12000],
      budgetMin: 500,
      budgetMax: 15000,
      budgetStep: 250,
      defaultCpl: 20,
      cplPresets: [10, 15, 20, 35, 50],
      cplMin: 5,
      cplMax: 100,
      cplStep: 5,
      defaultAov: 1200,
      aovPresets: [500, 800, 1200, 2000, 4000],
      aovMin: 300,
      aovMax: 10000,
      aovStep: 100,
      sensitivityCpls: [12, 20, 35],
    },
  },
];

export function AcquisitionRoiCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("b2b");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [showFormulas, setShowFormulas] = useState<boolean>(false);

  const activeInd = useMemo(
    () => INDUSTRIES.find((ind) => ind.id === selectedIndustry) || INDUSTRIES[0],
    [selectedIndustry]
  );

  const isUSD = currency === "USD";
  const baseline = isUSD ? activeInd.usd : activeInd.inr;

  // Form State
  const [budget, setBudget] = useState<number>(baseline.defaultBudget);
  const [cpl, setCpl] = useState<number>(baseline.defaultCpl);
  const [qualPct, setQualPct] = useState<number>(activeInd.defaultQual);
  const [showupRate, setShowupRate] = useState<number>(activeInd.defaultShowup);
  const [closeRate, setCloseRate] = useState<number>(activeInd.defaultCloseRate);
  const [aov, setAov] = useState<number>(baseline.defaultAov);
  const [marginPct, setMarginPct] = useState<number>(activeInd.defaultMargin);

  // Switch Industry helper
  const handleIndustryChange = (indId: string) => {
    const next = INDUSTRIES.find((i) => i.id === indId);
    if (!next) return;
    const nextBaseline = isUSD ? next.usd : next.inr;
    setSelectedIndustry(indId);
    setBudget(nextBaseline.defaultBudget);
    setCpl(nextBaseline.defaultCpl);
    setQualPct(next.defaultQual);
    setShowupRate(next.defaultShowup);
    setCloseRate(next.defaultCloseRate);
    setAov(nextBaseline.defaultAov);
    setMarginPct(next.defaultMargin);
  };

  // Switch Currency helper
  const handleCurrencyChange = (newCurr: "INR" | "USD") => {
    if (newCurr === currency) return;
    setCurrency(newCurr);
    const nextBaseline = newCurr === "USD" ? activeInd.usd : activeInd.inr;
    setBudget(nextBaseline.defaultBudget);
    setCpl(nextBaseline.defaultCpl);
    setAov(nextBaseline.defaultAov);
  };

  // Reset to current Industry baseline
  const handleResetBaseline = () => {
    setBudget(baseline.defaultBudget);
    setCpl(baseline.defaultCpl);
    setQualPct(activeInd.defaultQual);
    setShowupRate(activeInd.defaultShowup);
    setCloseRate(activeInd.defaultCloseRate);
    setAov(baseline.defaultAov);
    setMarginPct(activeInd.defaultMargin);
  };

  // Mathematically airtight funnel calculator engine
  const runFunnel = (
    inBudget: number,
    inCpl: number,
    inQualPct: number,
    inShowup: number,
    inClose: number,
    inAov: number,
    inMargin: number
  ) => {
    const safeBudget = Math.max(0, inBudget);
    const safeCpl = Math.max(1, inCpl);
    const qualRatio = Math.min(100, Math.max(0, inQualPct)) / 100;
    const preShowRatio = Math.min(100, Math.max(0, inShowup)) / 100;
    const preCloseRatio = Math.min(100, Math.max(0, inClose)) / 100;
    const safeAov = Math.max(0, inAov);
    const marginRatio = Math.min(100, Math.max(0, inMargin)) / 100;

    // Rates calibrated by business sector
    const preBookRatio = activeInd.preBookRate / 100;
    const coldBookRatio = activeInd.coldBookRate / 100;
    const coldShowRatio = activeInd.coldShowup / 100;
    const coldCloseRatio = activeInd.coldCloseRate / 100;

    // 1. Inquiries / Leads
    const totalLeads = safeBudget / safeCpl;
    const preSoldLeads = totalLeads * qualRatio;
    const coldLeads = totalLeads * (1 - qualRatio);

    // 2. Attended Consultations / Calls
    const preSoldCalls = preSoldLeads * preBookRatio * preShowRatio;
    const coldCalls = coldLeads * coldBookRatio * coldShowRatio;
    const totalCalls = preSoldCalls + coldCalls;

    // 3. Closed Deals
    const preSoldDeals = preSoldCalls * preCloseRatio;
    const coldDeals = coldCalls * coldCloseRatio;
    const totalDeals = preSoldDeals + coldDeals;

    // 4. Financial Economics
    const grossRevenue = totalDeals * safeAov;
    const grossContribution = grossRevenue * marginRatio;
    const netProfit = grossContribution - safeBudget;
    const roas = safeBudget > 0 ? grossRevenue / safeBudget : 0;
    const netRoas = safeBudget > 0 ? grossContribution / safeBudget : 0;

    // 5. Break-Even Analysis
    const perDealContribution = safeAov * marginRatio;
    const breakEvenDeals = perDealContribution > 0 ? safeBudget / perDealContribution : 0;

    // 6. Cold Funnel Baseline Comparison (Counter-Factual without 7-11-4 Engine)
    const coldBaselineCalls = totalLeads * coldBookRatio * coldShowRatio;
    const coldBaselineDeals = coldBaselineCalls * coldCloseRatio;
    const coldBaselineRevenue = coldBaselineDeals * safeAov;
    const coldBaselineContribution = coldBaselineRevenue * marginRatio;
    const coldBaselineNet = coldBaselineContribution - safeBudget;
    const profitLift = netProfit - coldBaselineNet;

    return {
      totalLeads,
      preSoldLeads,
      coldLeads,
      preSoldCalls,
      coldCalls,
      totalCalls,
      preSoldDeals,
      coldDeals,
      totalDeals,
      grossRevenue,
      grossContribution,
      netProfit,
      roas,
      netRoas,
      breakEvenDeals,
      perDealContribution,
      coldBaselineRevenue,
      coldBaselineNet,
      profitLift,
    };
  };

  // Current Live Metrics
  const metrics = useMemo(
    () => runFunnel(budget, cpl, qualPct, showupRate, closeRate, aov, marginPct),
    [budget, cpl, qualPct, showupRate, closeRate, aov, marginPct, activeInd]
  );

  // Live Sensitivity Scenarios (Evaluating at 3 industry CPL tiers)
  const sensitivityScenarios = useMemo(() => {
    return baseline.sensitivityCpls.map((scenarioCpl, idx) => {
      const scenarioMetrics = runFunnel(
        budget,
        scenarioCpl,
        qualPct,
        showupRate,
        closeRate,
        aov,
        marginPct
      );
      const tierLabel =
        idx === 0
          ? "Optimized (High Intent)"
          : idx === 1
          ? "Target Baseline"
          : "Conservative (Broad)";
      return {
        cpl: scenarioCpl,
        tierLabel,
        ...scenarioMetrics,
      };
    });
  }, [budget, qualPct, showupRate, closeRate, aov, marginPct, baseline, activeInd]);

  // Currency Formatter
  const formatMoney = (val: number, options?: { forceSign?: boolean; full?: boolean }) => {
    const abs = Math.abs(val);
    const sign = val < 0 ? "−" : options?.forceSign && val > 0 ? "+" : "";

    if (!isUSD) {
      if (!options?.full) {
        if (abs >= 10000000) return `${sign}₹${(abs / 10000000).toFixed(2)} Cr`;
        if (abs >= 100000) return `${sign}₹${(abs / 100000).toFixed(2)}L`;
        if (abs >= 1000) return `${sign}₹${(abs / 1000).toFixed(1)}k`;
      }
      return `${sign}₹${Math.round(abs).toLocaleString("en-IN")}`;
    } else {
      if (!options?.full) {
        if (abs >= 1000000) return `${sign}$${(abs / 1000000).toFixed(2)}M`;
        if (abs >= 1000) return `${sign}$${(abs / 1000).toFixed(1)}k`;
      }
      return `${sign}$${Math.round(abs).toLocaleString("en-US")}`;
    }
  };

  const isProfitable = metrics.netProfit >= 0;

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
              Model client volume, consultation flow, gross revenue, and net contribution based on your industry economics and OVYRO 7-11-4 conversion mechanics.
            </p>
          </div>

          {/* Action Strip: Currency Switcher & Reset Button */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              onClick={handleResetBaseline}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-hairline bg-white hover:bg-surface text-slate hover:text-ink text-xs font-bold transition shadow-subtle"
              title="Reset to industry standard baseline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Baseline</span>
            </button>

            <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-hairline shadow-subtle">
              <button
                onClick={() => handleCurrencyChange("INR")}
                className={`px-3 py-1.5 rounded text-xs font-bold transition ${
                  currency === "INR" ? "bg-brand-navy text-white" : "text-steel hover:text-ink"
                }`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => handleCurrencyChange("USD")}
                className={`px-3 py-1.5 rounded text-xs font-bold transition ${
                  currency === "USD" ? "bg-brand-navy text-white" : "text-steel hover:text-ink"
                }`}
              >
                USD ($)
              </button>
            </div>
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

            {/* Monthly Media Budget */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                <span>Monthly Media &amp; Ad Budget</span>
                <span className="text-primary font-mono text-sm sm:text-base">
                  {formatMoney(budget)}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {baseline.budgetPresets.map((preset) => (
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
                min={baseline.budgetMin}
                max={baseline.budgetMax}
                step={baseline.budgetStep}
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value) || 0)}
                className="w-full h-2.5 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-steel mt-1 font-mono">
                <span>{formatMoney(baseline.budgetMin)} (Test)</span>
                <span>{formatMoney(Math.round((baseline.budgetMin + baseline.budgetMax) / 2))} (Scale)</span>
                <span>{formatMoney(baseline.budgetMax)} (Aggressive)</span>
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
                {baseline.cplPresets.map((preset) => (
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
                min={baseline.cplMin}
                max={baseline.cplMax}
                step={baseline.cplStep}
                value={cpl}
                onChange={(e) => setCpl(parseInt(e.target.value) || baseline.cplMin)}
                className="w-full h-2.5 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-steel mt-1 font-mono">
                <span>{formatMoney(baseline.cplMin)}</span>
                <span>Baseline Target: {formatMoney(baseline.defaultCpl)}</span>
                <span>{formatMoney(baseline.cplMax)}</span>
              </div>
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
                  % of leads consuming 3+ hours of authority content
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                  <span>Pre-Sold Call Show-Up %</span>
                  <span className="text-brand-green font-mono font-bold">{showupRate}%</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={95}
                  step={5}
                  value={showupRate}
                  onChange={(e) => setShowupRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
                <span className="text-[10px] text-steel block mt-1">
                  Show-up rate for pre-educated candidates
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
                  min={10}
                  max={70}
                  step={5}
                  value={closeRate}
                  onChange={(e) => setCloseRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-[10px] text-steel block mt-1">
                  Pre-educated 20-min enrollment close
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-charcoal mb-2">
                  <span>{activeInd.dealValueLabel}</span>
                  <span className="text-primary font-mono font-bold">{formatMoney(aov)}</span>
                </div>
                <input
                  type="range"
                  min={baseline.aovMin}
                  max={baseline.aovMax}
                  step={baseline.aovStep}
                  value={aov}
                  onChange={(e) => setAov(parseInt(e.target.value) || baseline.aovMin)}
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
                min={25}
                max={95}
                step={5}
                value={marginPct}
                onChange={(e) => setMarginPct(parseInt(e.target.value))}
                className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-slate-600"
              />
              <span className="text-[10px] text-steel block mt-1">
                Gross margin before customer acquisition costs
              </span>
            </div>
          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hero ROI Banner */}
            <div
              className={`p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden transition-colors ${
                isProfitable ? "bg-brand-navy text-white" : "bg-red-950 text-white"
              }`}
            >
              <div className="text-xs uppercase font-bold tracking-wider mb-1 flex items-center gap-1.5">
                {isProfitable ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Projected Net Return</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span className="text-rose-400">Projected Net Deficit</span>
                  </>
                )}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 font-mono">
                {formatMoney(metrics.netProfit, { forceSign: true })}
              </div>

              <div className="text-xs text-slate-300">
                {isProfitable
                  ? `Net profit after deducting ${formatMoney(budget)} media spend.`
                  : `Ad spend exceeds gross contribution by ${formatMoney(Math.abs(metrics.netProfit))}.`}
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-700/80">
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">
                    Gross Return (ROAS)
                  </div>
                  <div
                    className={`text-2xl font-black mt-0.5 font-mono ${
                      metrics.roas >= 2.0
                        ? "text-emerald-400"
                        : metrics.roas >= 1.0
                        ? "text-amber-300"
                        : "text-rose-400"
                    }`}
                  >
                    {metrics.roas.toFixed(1)}×
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Gross revenue / media spend
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">
                    Break-Even Volume
                  </div>
                  <div className="text-2xl font-black text-amber-300 mt-0.5 font-mono">
                    {metrics.breakEvenDeals.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {activeInd.dealLabel} needed
                  </div>
                </div>
              </div>
            </div>

            {/* Volume Throughput Card */}
            <div className="p-6 rounded-2xl bg-white border border-hairline shadow-subtle space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-steel pb-2 border-b border-hairline flex items-center justify-between">
                <span>Monthly Funnel Throughput</span>
                <span className="text-[10px] text-steel font-normal">Calibrated Model</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate">{activeInd.leadLabel}:</span>
                <span className="font-extrabold text-ink font-mono text-base">
                  {Math.round(metrics.totalLeads).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate">{activeInd.callLabel} Attended:</span>
                <span className="font-extrabold text-primary font-mono text-base">
                  {metrics.totalCalls.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate">{activeInd.dealLabel} Closed:</span>
                <span className="font-extrabold text-brand-green font-mono text-base">
                  {metrics.totalDeals.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-hairline">
                <span className="font-bold text-ink">Projected Gross Revenue:</span>
                <span className="font-black text-ink font-mono text-base sm:text-lg">
                  {formatMoney(metrics.grossRevenue)}
                </span>
              </div>
            </div>

            {/* Break-Even Intelligence Card */}
            <div className="p-5 rounded-xl bg-white border border-hairline shadow-subtle text-xs text-charcoal">
              <div className="font-bold text-sm text-ink mb-1.5 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Break-Even Threshold: {metrics.breakEvenDeals.toFixed(1)} {activeInd.dealLabel}
                </span>
              </div>
              <p className="leading-relaxed text-slate">
                At an average deal value of{" "}
                <strong className="text-ink">{formatMoney(aov, { full: true })}</strong> and a{" "}
                <strong className="text-ink">{marginPct}%</strong> contribution margin (
                <strong className="text-ink">
                  {formatMoney(metrics.perDealContribution, { full: true })}
                </strong>{" "}
                net contribution per deal), just{" "}
                <strong className="text-primary font-bold">
                  {metrics.breakEvenDeals.toFixed(1)} {activeInd.dealLabel.toLowerCase()}
                </strong>{" "}
                cover your entire {formatMoney(budget)} media spend. Every acquisition beyond that generates pure business surplus.
              </p>
            </div>

            {/* The 7-11-4 Compounding Edge */}
            <div className="p-5 rounded-xl bg-tint-mint border border-emerald-200 text-xs text-emerald-950">
              <div className="font-bold text-sm text-emerald-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>The 7-11-4 Authority Compounding Edge:</span>
              </div>
              <p className="leading-relaxed text-emerald-900/90">
                Because prospects consume 7+ hours of YouTube content before the sales interaction, you capture{" "}
                <strong className="text-emerald-950 font-bold">
                  {formatMoney(metrics.profitLift, { forceSign: true })} additional net contribution
                </strong>{" "}
                compared to a traditional 1-hour cold ad funnel with the exact same media spend.
              </p>
            </div>
          </div>
        </div>

        {/* Live CPL Sensitivity Matrix Table */}
        <div className="mt-12 bg-white rounded-2xl border border-hairline shadow-subtle p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-hairline">
            <div>
              <h3 className="font-bold text-lg text-ink">
                Cost Per Lead (CPL) Sensitivity Matrix
              </h3>
              <p className="text-xs text-slate mt-0.5">
                Evaluates volume, consultation capacity, and net financial return across 3 acquisition cost scenarios for {activeInd.name}.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-surface rounded border border-hairline text-steel shrink-0 self-start sm:self-auto">
              Live Scenarios
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-hairline text-steel text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3">Acquisition Scenario</th>
                  <th className="py-3 px-3">Cost / Lead</th>
                  <th className="py-3 px-3">Inquiries</th>
                  <th className="py-3 px-3">{activeInd.callLabel}</th>
                  <th className="py-3 px-3">{activeInd.dealLabel}</th>
                  <th className="py-3 px-3">Gross Revenue</th>
                  <th className="py-3 px-3">Net Profit</th>
                  <th className="py-3 px-3">ROAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {sensitivityScenarios.map((row) => {
                  const rowProfitable = row.netProfit >= 0;
                  return (
                    <tr key={row.tierLabel} className="hover:bg-surface/50 transition">
                      <td className="py-3.5 px-3 font-semibold text-ink">
                        {row.tierLabel}
                      </td>
                      <td className="py-3.5 px-3 font-mono font-bold text-primary">
                        {formatMoney(row.cpl)}
                      </td>
                      <td className="py-3.5 px-3 font-mono text-slate">
                        {Math.round(row.totalLeads).toLocaleString()}
                      </td>
                      <td className="py-3.5 px-3 font-mono text-slate">
                        {row.totalCalls.toFixed(1)}
                      </td>
                      <td className="py-3.5 px-3 font-mono font-bold text-ink">
                        {row.totalDeals.toFixed(1)}
                      </td>
                      <td className="py-3.5 px-3 font-mono font-semibold text-ink">
                        {formatMoney(row.grossRevenue)}
                      </td>
                      <td
                        className={`py-3.5 px-3 font-mono font-black ${
                          rowProfitable ? "text-brand-green" : "text-rose-600"
                        }`}
                      >
                        {formatMoney(row.netProfit, { forceSign: true })}
                      </td>
                      <td className="py-3.5 px-3 font-mono font-bold text-slate">
                        {row.roas.toFixed(1)}×
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mathematical Model & Formula Transparency Toggle */}
        <div className="mt-8">
          <button
            onClick={() => setShowFormulas(!showFormulas)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-hairline text-left text-xs font-semibold text-slate hover:text-ink transition shadow-subtle"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>Inspect Mathematical Model &amp; Conversion Logic</span>
            </div>
            {showFormulas ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showFormulas && (
            <div className="mt-3 p-6 bg-white rounded-xl border border-hairline shadow-subtle text-xs text-slate space-y-4">
              <div className="font-bold text-sm text-ink pb-2 border-b border-hairline">
                Formula Specifications &amp; Unit Economics Audit
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px]">
                <div className="p-3 rounded-lg bg-surface border border-hairline space-y-1">
                  <div className="font-bold text-ink">1. Volume Generation:</div>
                  <div>Inquiries = Budget ÷ Cost Per Lead</div>
                  <div>Pre-Sold Leads = Inquiries × (Binge% ÷ 100)</div>
                  <div>Cold Leads = Inquiries × (1 − Binge% ÷ 100)</div>
                </div>

                <div className="p-3 rounded-lg bg-surface border border-hairline space-y-1">
                  <div className="font-bold text-ink">2. Consultation Flow:</div>
                  <div>Pre-Sold Calls = Pre-Sold Leads × {activeInd.preBookRate}% booking × Show-Up%</div>
                  <div>Cold Calls = Cold Leads × {activeInd.coldBookRate}% booking × {activeInd.coldShowup}% show-up</div>
                  <div>Total Attended = Pre-Sold Calls + Cold Calls</div>
                </div>

                <div className="p-3 rounded-lg bg-surface border border-hairline space-y-1">
                  <div className="font-bold text-ink">3. Conversions &amp; Revenue:</div>
                  <div>Deals Closed = (Pre-Sold Calls × Close%) + (Cold Calls × {activeInd.coldCloseRate}%)</div>
                  <div>Gross Revenue = Deals Closed × Average Deal Value</div>
                </div>

                <div className="p-3 rounded-lg bg-surface border border-hairline space-y-1">
                  <div className="font-bold text-ink">4. Net Profit &amp; Break-Even:</div>
                  <div>Gross Contribution = Gross Revenue × Margin%</div>
                  <div>Net Profit = Gross Contribution − Media Budget</div>
                  <div>Break-Even Deals = Media Budget ÷ (Average Deal Value × Margin%)</div>
                </div>
              </div>

              <p className="text-[11px] text-steel leading-relaxed pt-2">
                Note: Cold conversion parameters reflect standard uneducated paid traffic baselines ({activeInd.coldBookRate}% booking rate, {activeInd.coldShowup}% show-up, {activeInd.coldCloseRate}% close rate). The OVYRO 7-11-4 engine elevates prospects into the pre-sold stream before human contact, generating higher show-up and closing efficiency.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
