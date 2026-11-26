export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tint: string;
  iconName: string;
}

export interface PhaseDeliverable {
  phase: string;
  title: string;
  duration: string;
  badge: string;
  summary: string;
  deliverables: string[];
}

export const RULE_7114_DATA = {
  hours: 7,
  touchpoints: 11,
  locations: 4,
  benchmarkSource: "Google Consumer Insights & Behavioral Research",
  oldWay: {
    title: "The Old Marketing Funnel (The 1-Hour Illusion)",
    exposureTime: "~45–60 Minutes Total",
    touchpoints: "1–3 fragmented touchpoints",
    flow: [
      { step: "Ad Click", time: "10 sec", status: "Cold curiosity" },
      { step: "Opt-In Squeeze Page", time: "2 min", status: "Name & Email given with fake phone" },
      { step: "Email Welcome", time: "3 min", status: "Skimmed or missed" },
      { step: "Hard Pitch Sales Call", time: "45 min", status: "High friction, guarded defense" },
      { step: "Outcome", time: "End", status: "Ghosted / 'Need to think about it'" },
    ],
    stats: {
      noShowRate: "45–60%",
      closeRate: "10–18%",
      salesCallLength: "60+ Minutes",
      repFatigue: "Extremely High (Burnout)",
      profitMargin: "30–35%",
    },
  },
  ovyroWay: {
    title: "The OVYRO Method™ (7+ Hours Binge Trust Engine)",
    exposureTime: "7+ Hours Deep Exposure",
    touchpoints: "11+ touchpoints across 4 platforms",
    flow: [
      { step: "Traffic Entry (Meta/Google/YT)", time: "1 min", status: "Curiosity triggered by real problem" },
      { step: "YouTube Binge Loop", time: "3–6 hrs", status: "Watches 4–8 deep breakdowns, learns founder frameworks" },
      { step: "Email / Newsletter Deep Dive", time: "30 min", status: "Reads case breakdowns & systems tear-downs" },
      { step: "Transfer of Trust Video", time: "4 min", status: "Introduced directly to assigned strategist" },
      { step: "Order-Confirmation Call", time: "25 min", status: "Arrives pre-sold, asks 'How soon can we start?'" },
    ],
    stats: {
      noShowRate: "< 15%",
      closeRate: "40–60%+",
      salesCallLength: "20–30 Minutes",
      repFatigue: "Minimal (Consultants close pre-sold buyers)",
      profitMargin: "50–65%",
    },
  },
};

export const FORTRESS_PILLARS: Pillar[] = [
  {
    id: "fortress",
    title: "Creates an Uncopyable Brand Fortress",
    subtitle: "Category of One Positioning",
    description: "Competitors can copy your guarantees, scrape your copy, and undercut your pricing. But nobody can replicate your founder's voice, nuances, and personal authority built through hours of YouTube face time.",
    tint: "bg-tint-peach border-amber-200",
    iconName: "Shield",
  },
  {
    id: "unbannable",
    title: "Never One Banned Ad Account Away From Zero",
    subtitle: "Diversified Traffic & Owned Asset Moat",
    description: "Traditional agencies live in constant terror of Meta ad-account disablement. The OVYRO Method turns viewers into subscribers and email list members, creating a self-sustaining asset that compounds even if ad platforms crash.",
    tint: "bg-tint-rose border-rose-200",
    iconName: "AlertTriangle",
  },
  {
    id: "margins",
    title: "Dramatically Higher Profit Margins",
    subtitle: "50%+ Net Margins vs. 34% Industry Average",
    description: "When close rates jump from 15% to 50% and no-shows plummet, your effective cost per acquired customer drops drastically. You don't need a bloated team of junior closers to make payroll.",
    tint: "bg-tint-mint border-emerald-200",
    iconName: "TrendingUp",
  },
  {
    id: "retargeting",
    title: "Organic Retargeting Built-In for Free",
    subtitle: "Algorithmic Viewer Pool Recycling",
    description: "Once a prospect watches one YouTube video, YouTube's algorithm perpetually serves your next videos on their home feed without you paying Meta a single rupee for retargeting impressions.",
    tint: "bg-tint-sky border-sky-200",
    iconName: "Repeat",
  },
  {
    id: "education",
    title: "Give Away Information, Sell Implementation",
    subtitle: "The Ultimate Anti-Skepticism Strategy",
    description: "In an era of hyper-skepticism, gatekeeping simple tips makes prospects cynical. By teaching your highest-level frameworks freely on YouTube, prospects realize the depth of the solution and pay premium retainers for execution.",
    tint: "bg-tint-lavender border-purple-200",
    iconName: "BookOpen",
  },
  {
    id: "salesperson",
    title: "Scales Your Best Salesperson: YOU",
    subtitle: "Founder Time Leveraged 24/7/365",
    description: "Nobody can articulate your vision like you can. YouTube allows your best presentation to be viewed thousands of times simultaneously across the globe while you sleep or focus on core operations.",
    tint: "bg-tint-yellow-bold border-amber-300",
    iconName: "Users",
  },
];

export const DFY_PHASES: PhaseDeliverable[] = [
  {
    phase: "Phase 01",
    title: "Irresistible Offer Crafting & Category Positioning",
    duration: "Week 1–2",
    badge: "FOUNDATION",
    summary: "We take your existing service or product and restructure it using our proprietary pricing and positioning framework, creating a clear high-ticket offering that demands premium rates.",
    deliverables: [
      "Target Avatar & Market Constraint Audit",
      "Irresistible Value Proposition & Offer Packaging ($2.5K–$25K / ₹1L–₹10L+)",
      "Guarantees & Risk-Reversal Architecture (SLA & Milestone Design)",
      "Pricing Tier & Retention Ladder Documentation",
    ],
  },
  {
    phase: "Phase 02",
    title: "Full-Funnel Architecture & Technical Deployment",
    duration: "Week 2–3",
    badge: "DEPLOYMENT",
    summary: "We build and deploy every digital asset: high-converting landers, multi-step qualification filters, custom booking engines, and serverless tracking infrastructure.",
    deliverables: [
      "Custom Notion-Minimalist Landing Page & VSL Embed",
      "Multi-Step Revenue & Bottleneck Qualifier (Alpine.js / React)",
      "Proprietary Round-Robin Closer Calendar (Zero Calendly Leakage)",
      "Server-side Meta CAPI, Google Tag Manager & Attribution Setup",
    ],
  },
  {
    phase: "Phase 03",
    title: "The OVYRO Content Engine & YouTube Binge Setup",
    duration: "Week 3–4",
    badge: "THE TRUST ENGINE",
    summary: "We license our battle-tested YouTube content production system. We provide exact topic selection, hooks, scripts, and video architecture designed to manufacture the 7-11-4 rule.",
    deliverables: [
      "Top 10 High-Intent YouTube Topic Roadmap tailored to your niche",
      "Plug-and-Play Video Script Frameworks (Low-production, High-conviction)",
      "High-CTR Thumbnail & Title Concepts",
      "Personal 'Transfer-of-Trust' Post-Booking Video Script & Deployment",
    ],
  },
  {
    phase: "Phase 04",
    title: "The Client Conveyor System™ & Growth Operations",
    duration: "Week 4+",
    badge: "SCALE & RETENTION",
    summary: "Acquiring clients is only half the battle. We install our backend Client Conveyor System so new deals transition seamlessly into ecstatic, referral-generating clients without founder burnout.",
    deliverables: [
      "Standardized Private Client Slack Channel & Kickoff Protocols",
      "Automated Onboarding Forms & Project Management Templates",
      "Rupee-per-Employee Organizational Chart & KPI Structure",
      "Private Agency Slack Support Channel with OVYRO Strategists",
    ],
  },
];

export const PROOF_STUDIES = [
  {
    client: "Conversionly",
    category: "B2B Appointment Agency",
    result: "7-Figure Run Rate",
    timeline: "From $0 in 6 Months",
    metric: "$35 per Booked Call",
    description: "Built the automated VSL and YouTube binge engine, cutting lead acquisition cost by 55% while scaling cash collections past $100K/month.",
  },
  {
    client: "Hispanic Auto Leads",
    category: "Automotive Lead Gen Agency",
    result: "$30K → $365K/Month",
    timeline: "Within 9 Months",
    metric: "12.1× Revenue Growth",
    description: "Replaced door-to-door prospecting with an authoritative YouTube video funnel and multi-step Meta qualifier, creating a self-sustaining client flow.",
  },
  {
    client: "Ed Lloyd & Associates",
    category: "CPA & Tax Advisory Firm",
    result: "$740K New Cash Collected",
    timeline: "$128K Ad Spend",
    metric: "5.78× Return on Ad Spend",
    description: "Eliminated 60-minute discovery calls by routing high-net-worth business owners through 45-minute educational YouTube tax teardowns before booking.",
  },
  {
    client: "Track & Field Recruiting",
    category: "High-Ticket Education & Coaching",
    result: "$44K → $120K/Month",
    timeline: "In 90 Days",
    metric: "4 Calls Booked on Day One",
    description: "Replaced an overworked cold-calling room dialing parents with a YouTube educational playlist, doubling consultation close rates immediately.",
  },
];
