"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroBand } from "@/components/hero-band";
import { TrustGapSection } from "@/components/trust-gap-section";
import { Rule7114Simulator } from "@/components/rule-7114-simulator";
import { FunnelArchitecture } from "@/components/funnel-architecture";
import { YoutubeMoat } from "@/components/youtube-moat";
import { FortressPillars } from "@/components/fortress-pillars";
import { AcquisitionRoiCalculator } from "@/components/acquisition-roi-calculator";
import { DeliverySystem } from "@/components/delivery-system";
import { ProofGallery } from "@/components/proof-gallery";
import { TestimonialsVault } from "@/components/testimonials-vault";
import { ProposalCalculator } from "@/components/proposal-calculator";
import { Footer } from "@/components/footer";

export default function ProposalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Wide Hero Band with Pipeline Visualizer */}
      <HeroBand />

      {/* 3. The 1-Hour Funnel Failure */}
      <TrustGapSection />

      {/* 4. Google 7-11-4 Behavioral Rule Interactive Simulator */}
      <Rule7114Simulator />

      {/* 5. Master Interactive SVG Funnel Architecture Canvas */}
      <FunnelArchitecture />

      {/* 6. The YouTube Trust Moat */}
      <YoutubeMoat />

      {/* 7. The 6 Fortress Pillars */}
      <FortressPillars />

      {/* 8. Interactive Industry-Specific Acquisition & ROI Forecast Calculator */}
      <AcquisitionRoiCalculator />

      {/* 9. 14–30 Day Done-For-You Delivery Roadmap & Client Conveyor */}
      <DeliverySystem />

      {/* 10. Verified Case Studies & Platform Dashboards */}
      <ProofGallery />

      {/* 11. 30 Authentic Client Wins & RTB Proof Archive with Lightbox */}
      <TestimonialsVault />

      {/* 12. Proposal Scope & Application Intake */}
      <ProposalCalculator />

      {/* 13. Minimal Notion-Style Footer */}
      <Footer />
    </main>
  );
}
