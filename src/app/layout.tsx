import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The OVYRO Method™ — Comprehensive Client Acquisition Funnel Architecture & Proposal",
  description:
    "We audit, build, and deploy high-converting client acquisition marketing funnels powered by YouTube and the Google 7-11-4 Rule for B2B founders, agencies, and high-ticket service businesses.",
  keywords: [
    "funnel audit",
    "client acquisition funnel",
    "the ovyro method",
    "b2b marketing funnel",
    "youtube sales funnel",
    "7-11-4 rule",
    "high ticket sales funnel",
  ],
  authors: [{ name: "OVYRO LLP" }],
  openGraph: {
    title: "The OVYRO Method™ — High-Converting Client Acquisition Architecture",
    description:
      "Audit, design, and deploy predictable client acquisition systems powered by YouTube and the Google 7-11-4 Rule.",
    type: "website",
    siteName: "OVYRO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-ink selection:bg-brand-navy selection:text-white">
        {children}
      </body>
    </html>
  );
}
