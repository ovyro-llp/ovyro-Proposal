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
  benchmarkSource: "Google Consumer Research",
  oldWay: {
    title: "1-Hour Arbitrage Funnel",
    exposureTime: "< 1 Hour Total Exposure",
    touchpoints: "1–3 fragmented touches",
    flow: [
      { step: "Ad Click", time: "10s", status: "Cold curiosity" },
      { step: "Squeeze Page", time: "2m", status: "Low-intent contact capture" },
      { step: "Automated Email", time: "3m", status: "Mostly unread" },
      { step: "Cold Discovery Call", time: "45m", status: "High friction, guarded defense" },
      { step: "Outcome", time: "End", status: "Ghosted or 'Need to think'" },
    ],
    stats: {
      noShowRate: "45–60%",
      closeRate: "10–18%",
      salesCallLength: "60+ Minutes",
      repFatigue: "High (Closer Burnout)",
      profitMargin: "30–35%",
    },
  },
  ovyroWay: {
    title: "The OVYRO Method™",
    exposureTime: "7+ Hours Pre-Call Exposure",
    touchpoints: "11+ touchpoints across 4 channels",
    flow: [
      { step: "Targeted Entry", time: "1m", status: "Problem-focused hook" },
      { step: "YouTube Binge Loop", time: "3–6h", status: "Consumes 4+ deep system breakdowns" },
      { step: "Resource Deep Dive", time: "20m", status: "Reads case proof and teardowns" },
      { step: "Transfer of Trust Video", time: "4m", status: "Founder introduces assigned rep" },
      { step: "Order-Confirmation Call", time: "20m", status: "Pre-sold buyer ready to start" },
    ],
    stats: {
      noShowRate: "< 15%",
      closeRate: "40–60%+",
      salesCallLength: "20–30 Minutes",
      repFatigue: "Minimal (Pre-Sold Buyers)",
      profitMargin: "50–65%",
    },
  },
};

export const FORTRESS_PILLARS: Pillar[] = [
  {
    id: "fortress",
    title: "Uncopyable Brand Moat",
    subtitle: "Category Authority",
    description: "Competitors can copy your ads and promises. They cannot clone your founder's face, voice, and deep system breakdowns.",
    tint: "bg-tint-peach border-amber-200",
    iconName: "Shield",
  },
  {
    id: "unbannable",
    title: "Platform Ban Immunity",
    subtitle: "Owned Asset Engine",
    description: "Cold ad funnels die when Meta disables an account. YouTube subscribers and email lists create an owned, ban-proof asset.",
    tint: "bg-tint-rose border-rose-200",
    iconName: "AlertTriangle",
  },
  {
    id: "margins",
    title: "50%+ Operating Margins",
    subtitle: "Efficiency Economics",
    description: "When close rates triple and no-shows collapse, cost per acquisition drops. No bloated sales floor required.",
    tint: "bg-tint-mint border-emerald-200",
    iconName: "TrendingUp",
  },
  {
    id: "retargeting",
    title: "Free Algorithmic Retargeting",
    subtitle: "Zero Ad Spend Re-engagement",
    description: "YouTube recommendations place your content in front of active prospects for months at zero cost per click.",
    tint: "bg-tint-sky border-sky-200",
    iconName: "Repeat",
  },
  {
    id: "education",
    title: "Give Away Info, Sell Execution",
    subtitle: "Anti-Skepticism Framing",
    description: "Teaching frameworks freely disarms buyer defense. Prospects recognize the complexity and pay for hands-on execution.",
    tint: "bg-tint-lavender border-purple-200",
    iconName: "BookOpen",
  },
  {
    id: "salesperson",
    title: "Scale Founder Selling",
    subtitle: "24/7 Digital Clones",
    description: "Your best pitch delivered flawlessly to thousands of qualified prospects simultaneously, worldwide.",
    tint: "bg-tint-yellow-bold border-amber-300",
    iconName: "Users",
  },
];

export const DFY_PHASES: PhaseDeliverable[] = [
  {
    phase: "Phase 01",
    title: "Offer & Category Architecture",
    duration: "Week 1–2",
    badge: "FOUNDATION",
    summary: "Restructure your core service into a differentiated high-ticket offer ($2.5K–$25K / ₹1L–₹10L+) with clear risk-reversal.",
    deliverables: [
      "Avatar & Primary Bottleneck Blueprint",
      "High-Ticket Offer & Pricing Ladder",
      "SLA Guarantees & Risk-Reversal Terms",
      "Campaign Messaging & Core Thesis",
    ],
  },
  {
    phase: "Phase 02",
    title: "Funnel & Qualification Infrastructure",
    duration: "Week 2–3",
    badge: "DEPLOYMENT",
    summary: "Build and deploy clean landing assets, multi-step revenue qualification filters, and custom scheduling engines.",
    deliverables: [
      "Minimalist Landing Page & VSL Embed",
      "Multi-Step Revenue Gate & Disqualifier",
      "Round-Robin Closer Calendar Routing",
      "CAPI, Meta & GA4 Server Tracking Setup",
    ],
  },
  {
    phase: "Phase 03",
    title: "YouTube Binge Engine Setup",
    duration: "Week 3–4",
    badge: "TRUST ENGINE",
    summary: "Deploy the content production system that achieves the 7-11-4 rule through raw, high-conviction video breakdowns.",
    deliverables: [
      "10 High-Intent Niche Topic Roadmaps",
      "Screen-Share Video Script Frameworks",
      "High-CTR Thumbnail & Title Concepts",
      "Personal 'Transfer-of-Trust' Post-Booking Video",
    ],
  },
  {
    phase: "Phase 04",
    title: "Client Conveyor & Delivery Ops",
    duration: "Week 4+",
    badge: "OPERATIONS",
    summary: "Install backend delivery systems to transition new clients smoothly into execution without founder bottleneck.",
    deliverables: [
      "Dedicated Slack Onboarding Architecture",
      "Automated Kickoff Forms & Intake SOPs",
      "KPI Dashboards & Retention Protocol",
      "Direct Strategic Support with OVYRO Team",
    ],
  },
];

export const PROOF_STUDIES = [
  {
    client: "Conversionly",
    category: "B2B Appointment Agency",
    result: "7-Figure Run Rate",
    timeline: "6 Months",
    metric: "$35 Cost Per Booked Call",
    description: "Deployed automated VSL and YouTube binge engine, cutting acquisition costs by 55% while scaling cash collections past $100K/mo.",
  },
  {
    client: "Hispanic Auto Leads",
    category: "Automotive Lead Agency",
    result: "$30K → $365K/Mo",
    timeline: "9 Months",
    metric: "12.1× Revenue Growth",
    description: "Replaced outbound cold prospecting with an authoritative YouTube funnel and qualification gate.",
  },
  {
    client: "Ed Lloyd & Associates",
    category: "CPA & Tax Advisory",
    result: "$740K Cash Collected",
    timeline: "$128K Spend",
    metric: "5.78× Return on Ad Spend",
    description: "Eliminated 60-minute discovery calls by directing high-net-worth business owners through 45-minute YouTube tax breakdowns.",
  },
  {
    client: "Track & Field Recruiting",
    category: "Education & Advisory",
    result: "$44K → $120K/Mo",
    timeline: "90 Days",
    metric: "Immediate Call Flow",
    description: "Replaced high-burnout cold outreach with an educational YouTube playlist, immediately doubling consultation close rates.",
  },
];
