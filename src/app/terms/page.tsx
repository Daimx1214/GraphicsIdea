import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | GraphicsIdea Digital Agency",
  description: "Client service agreements, project intake policies, and intellectual property rights for GraphicsIdea clients.",
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
            Welcome to GraphicsIdea Digital Agency & Studio. By engaging our engineering services, requesting technical project scope estimates, or commissioning software deliverables, you agree to be bound by these Master Service Terms.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Direct Agency Engineering & Retainers</h2>
          <p>
            GraphicsIdea delivers custom software engineering, product design, and strategic consulting directly through dedicated in-house senior squads. All project scope, milestone acceptances, and SLA guarantees are governed under signed Statements of Work (SOW) and Non-Disclosure Agreements (NDA).
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Intellectual Property & Deliverable Assignment</h2>
          <p>
            Upon full payment of project milestone fees, 100% of custom code, design assets, and technical documentation produced by GraphicsIdea become the sole, unencumbered intellectual property of the client.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Sprint Guarantee & Code Standards</h2>
          <p>
            Every software release engineered by GraphicsIdea undergoes automated unit testing, static code analysis, and security auditing prior to staging environment deployment.
          </p>
        </div>
      </div>
    </div>
  );
}
