import React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-hairline pt-16 pb-12 text-xs text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-brand-navy flex items-center justify-center text-white font-black text-xs">
                OV
              </div>
              <span className="font-extrabold text-sm tracking-tight text-ink">
                OVYRO LLP
              </span>
            </div>
            <p className="text-steel text-xs leading-relaxed max-w-sm">
              We audit, engineer, and deploy high-converting client acquisition marketing funnels powered by YouTube and the Google 7-11-4 Rule for B2B founders and scaling brands.
            </p>
            <div className="text-[11px] text-stone pt-2">
              © {new Date().getFullYear()} OVYRO LLP. All rights reserved.
            </div>
          </div>

          {/* Column 2: The Method */}
          <div>
            <div className="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
              The Method
            </div>
            <ul className="space-y-2 text-steel">
              <li><a href="#method" className="hover:text-primary transition">The Trust Recession</a></li>
              <li><a href="#simulator" className="hover:text-primary transition">Google 7-11-4 Rule</a></li>
              <li><a href="#youtube-moat" className="hover:text-primary transition">YouTube Binge Engine</a></li>
              <li><a href="#deliverables" className="hover:text-primary transition">Client Conveyor™</a></li>
              <li><a href="#deliverables" className="hover:text-primary transition">Transfer of Trust</a></li>
            </ul>
          </div>

          {/* Column 3: Funnel Verticals */}
          <div>
            <div className="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
              Funnels
            </div>
            <ul className="space-y-2 text-steel">
              <li><a href="#interactive-funnel" className="hover:text-primary transition">B2B Consultation</a></li>
              <li><a href="#interactive-funnel" className="hover:text-primary transition">Automated Webinars</a></li>
              <li><a href="#interactive-funnel" className="hover:text-primary transition">Lead Magnet / Tripwire</a></li>
              <li><a href="#interactive-funnel" className="hover:text-primary transition">Hybrid B2B + B2C</a></li>
              <li><a href="#interactive-funnel" className="hover:text-primary transition">Custom Enterprise</a></li>
            </ul>
          </div>

          {/* Column 4: Scope & Proof */}
          <div>
            <div className="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
              Results & Scope
            </div>
            <ul className="space-y-2 text-steel">
              <li><a href="#case-studies" className="hover:text-primary transition">Client Case Studies</a></li>
              <li><a href="#deliverables" className="hover:text-primary transition">DFY 4-Phase Roadmap</a></li>
              <li><a href="#proposal-scope" className="hover:text-primary transition">Engagement Proposal</a></li>
              <li><a href="#simulator" className="hover:text-primary transition">Conversion Simulator</a></li>
              <li><a href="#interactive-funnel" className="hover:text-primary transition">Download 2x PNG</a></li>
            </ul>
          </div>

          {/* Column 5: Compliance */}
          <div>
            <div className="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
              Compliance & Legal
            </div>
            <ul className="space-y-2 text-steel">
              <li><span className="hover:text-primary transition cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-primary transition cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary transition cursor-pointer">Earnings Disclaimer</span></li>
              <li><span className="hover:text-primary transition cursor-pointer">DPDP Act 2023</span></li>
              <li><span className="hover:text-primary transition cursor-pointer">NMC Ethical Shield</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-hairline text-[11px] text-stone leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> Results and case metrics cited are from verified past client engagements. Client outcomes depend heavily on market demand, offer quality, pricing structure, founder commitment to content production, and ad spend capitalization. OVYRO does not guarantee specific revenue figures or get-rich-quick schemes; we provide institutional sales systems, technical funnel infrastructure, and strategic consulting.
          </p>
        </div>
      </div>
    </footer>
  );
}
