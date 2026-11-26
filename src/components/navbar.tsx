"useclient";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Shield, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-hairline shadow-subtle"
          : "bg-white border-hairline"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md bg-brand-navy flex items-center justify-center text-white font-black text-sm tracking-tighter group-hover:bg-primary transition-colors">
              OV
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-ink flex items-center gap-1.5">
                OVYRO
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-tint-lavender text-brand-purple uppercase tracking-wider">
                  Method™
                </span>
              </span>
              <span className="text-[10px] text-steel tracking-wide uppercase font-semibold">
                Funnel Architecture Agency
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-charcoal">
          <a href="#method" className="hover:text-primary transition-colors">
            The Philosophy
          </a>
          <a href="#simulator" className="hover:text-primary transition-colors flex items-center gap-1">
            Google 7-11-4 Rule
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
          </a>
          <a href="#interactive-funnel" className="hover:text-primary transition-colors">
            Interactive Funnels
          </a>
          <a href="#youtube-moat" className="hover:text-primary transition-colors">
            YouTube Moat
          </a>
          <a href="#deliverables" className="hover:text-primary transition-colors">
            DFY Scope
          </a>
          <a href="#case-studies" className="hover:text-primary transition-colors">
            Client Proof
          </a>
        </div>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#proposal-scope"
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-pressed text-white text-[13.5px] font-semibold px-4 py-2.5 rounded-md shadow-sm transition-all transform active:scale-95"
          >
            <span>Deploy The OVYRO Method</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-charcoal hover:bg-surface transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-hairline px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#method"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-charcoal hover:text-primary py-1.5"
          >
            The Philosophy
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-charcoal hover:text-primary py-1.5"
          >
            Google 7-11-4 Simulator
          </a>
          <a
            href="#interactive-funnel"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-charcoal hover:text-primary py-1.5"
          >
            Interactive Funnel Topologies
          </a>
          <a
            href="#youtube-moat"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-charcoal hover:text-primary py-1.5"
          >
            YouTube Trust Moat
          </a>
          <a
            href="#deliverables"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-charcoal hover:text-primary py-1.5"
          >
            Done-For-You Roadmap
          </a>
          <a
            href="#proposal-scope"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-primary text-white text-sm font-semibold py-2.5 rounded-md mt-4"
          >
            Deploy The OVYRO Method
          </a>
        </div>
      )}
    </nav>
  );
}
