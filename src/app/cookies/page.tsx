import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy | GraphicsIdea",
  description: "GraphicsIdea cookie policy and tracking preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card text-slate-700 text-sm leading-relaxed space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Cookie Policy</h1>
          <p className="text-xs text-slate-400">Last updated: February 2026</p>

          <p>
            GraphicsIdea uses cookies and similar session storage technologies solely to maintain your
            browsing preferences (such as provider comparison state) and to ensure optimal platform security.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Essential Cookies</h2>
          <p>
            Essential cookies are required for platform navigation, authentication state, and session security.
            These cannot be disabled without affecting site functionality.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Performance & Comparison Preferences</h2>
          <p>
            We use local browser storage to remember which providers you have selected in your Provider Comparison
            Drawer, ensuring your evaluation is not lost when navigating between pages.
          </p>
        </div>
      </div>
    </div>
  );
}
