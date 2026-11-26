"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroBand } from "@/components/hero-band";
import { TrustGapSection } from "@/components/trust-gap-section";
import { Rule7114Simulator } from "@/components/rule-7114-simulator";
import { FunnelArchitecture } from "@/components/funnel-architecture";
import { YoutubeMoat } from "@/components/youtube-moat";
import { FortressPillars } from "@/components/fortress-pillars";
import { DeliverySystem } from "@/components/delivery-system";
import { ProofGallery } from "@/components/proof-gallery";
import { ProposalCalculator } from "@/components/proposal-calculator";
import { Footer } from "@/components/footer";

export default function ProposalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Notion-Inspired Dark Navy Hero Band with Workspace Mockup */}
      <HeroBand />

      {/* 3. The Trust Recession & The 1-Hour Funnel Failure */}
      <TrustGapSection />

      {/* 4. Google 7-11-4 Behavioral Rule Interactive Simulator */}
      <Rule7114Simulator />

      {/* 5. Master Interactive SVG Funnel Architecture Canvas */}
      <FunnelArchitecture />

      {/* 6. Why YouTube is the Core Trust Anchor */}
      <YoutubeMoat />

      {/* 7. The 6 Fortress Pillars of The OVYRO Method */}
      <FortressPillars />

      {/* 8. Done-For-You Delivery Roadmap & Client Conveyor System */}
      <DeliverySystem />

      {/* 9. Verified Client Proof & Data Points */}
      <ProofGallery />

      {/* 10. Engagement Scope & Application Intake */}
      <ProposalCalculator />

      {/* 11. Minimal Notion-Style Footer */}
      <Footer />
    </main>
  );
}
