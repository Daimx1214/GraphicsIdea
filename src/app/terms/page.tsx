import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | GraphicsIdea",
  description: "Terms of service and marketplace standards for GraphicsIdea users.",
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card text-slate-700 text-sm leading-relaxed space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Terms & Conditions</h1>
          <p className="text-xs text-slate-400">Last updated: February 2026</p>

          <p>
            Welcome to GraphicsIdea. By accessing or using our marketplace platform, directories, and project
            intake tools, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Marketplace Platform Role</h2>
          <p>
            GraphicsIdea operates as an independent discovery, comparison, and verification directory.
            Contracts for professional services, milestone deliverables, and intellectual property assignments
            are executed directly between clients and independent service providers.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Provider Verification Standards</h2>
          <p>
            While GraphicsIdea conducts rigorous portfolio, reference, and identity audits prior to issuing
            Verified Badges, clients are encouraged to perform their own contract due diligence and technical
            assessments. GraphicsIdea does not guarantee the specific performance of third-party contracts.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Prohibited Conduct</h2>
          <p>
            Users agree not to submit fraudulent reviews, misrepresent corporate entities, scrape directory
            data via unauthorized automated agents, or engage in malicious bidding practices.
          </p>
        </div>
      </div>
    </div>
  );
}
