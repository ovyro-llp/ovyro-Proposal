# The OVYRO Method™ — Master Interactive Proposal & Funnel Architecture

An interactive proposal and client presentation web application built by **OVYRO LLP**—a funnel auditing and high-ticket client acquisition agency.

## Features & Core Capabilities
- **The OVYRO Method™ Philosophy**: Complete breakdown of why traditional ad-to-call funnels fail in high-skepticism markets.
- **The Google 7-11-4 Rule Interactive Simulator**: Real-time slider demonstrating the behavioral science of 7 hours of content, 11 touchpoints, and 4 platforms.
- **Interactive SVG Funnel Architecture Canvas**: Dynamic node-and-edge graph with live hover/click path tracing, layer filtering, and one-click **2x PNG Canvas Export**.
- **Multi-Vertical Architecture Switcher**:
  - **Vertical A**: High-Ticket B2B Consultation Booking Funnel
  - **Vertical B**: Automated & Live Webinar / Virtual Event Funnel
  - **Vertical C**: Lead Magnet, SOP Vault & Tripwire Funnel
  - **Vertical D**: Hybrid B2B + B2C Enterprise Funnel
- **The YouTube Moat**: Deep-dive on why YouTube is the integral anchor that turns cold prospects into pre-sold, high-margin buyers.
- **The 6 Fortress Pillars**: Business resilience models (Unbannable, High Margin, Retargeting built-in, Scales the founder).
- **Done-For-You Delivery Roadmap**: 4-Phase execution plan + The Client Conveyor System™ for backend operations.
- **Proposal Scope & Application**: Interactive module selector and strategy kickoff form.

## Tech Stack & Design System
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens from Notion's design system (`DESIGN.md`):
  - Brand Navy (`#0a1530`), Notion Purple (`#5645d4`), and pastel card tints (peach, rose, mint, lavender, sky, yellow).
- **Icons**: Lucide React
- **Deployment Target**: Railway (via Dockerfile standalone mode or Nixpacks)

## Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Start production server
npm start
```

## Railway Deployment

This project includes a production multi-stage `Dockerfile` and `railway.json`:
1. Connect this GitHub repository (`https://github.com/ovyro-llp/ovyro-Proposal.git`) in your Railway dashboard.
2. Railway will automatically detect the `Dockerfile` and build the standalone Next.js container.
3. The app will be live with full SSL and global CDN routing!

---
© OVYRO LLP. All rights reserved.
