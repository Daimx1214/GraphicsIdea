import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | GraphicsIdea",
  description: "GraphicsIdea platform privacy policy and client data protection commitments.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card text-slate-700 text-sm leading-relaxed space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Last updated: February 2026</p>

          <p>
            At GraphicsIdea Technologies Inc. (&quot;GraphicsIdea&quot;, &quot;we&quot;, &quot;our&quot;), we respect your privacy and are committed
            to protecting the proprietary information of businesses and service providers using our platform.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Information We Collect</h2>
          <p>
            We collect information provided directly by you when submitting a project intake requirement,
            creating a provider profile, or contacting our advisory board. This includes company names,
            work email addresses, project briefs, portfolio links, and client review feedback.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. How Information is Used</h2>
          <p>
            Project specifications submitted through our &quot;Post a Project&quot; flow are routed solely to verified
            service providers matching your technical and budgetary criteria. We do not sell your contact data
            or project requirements to third-party ad networks or brokers.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Data Security & Storage</h2>
          <p>
            All data in transit is encrypted using TLS 1.3. We maintain industry-standard administrative,
            technical, and physical safeguards to prevent unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">4. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal or business information at
            any time by emailing privacy@graphicsidea.com.
          </p>
        </div>
      </div>
    </div>
  );
}
