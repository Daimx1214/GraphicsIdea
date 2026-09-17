import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, Palette, Briefcase } from "lucide-react";
import { PROVIDERS } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Top Verified UI/UX & Product Design Studios | GraphicsIdea",
  description:
    "Compare vetted product design studios, UI/UX researchers, and brand identity specialists. Audited Figma design systems, real case studies, and transparent pricing.",
};

export default function DesignersDirectoryPage() {
  const designProviders = PROVIDERS.filter(
    (p) =>
      p.providerType === "Studio" ||
      p.primaryServices.some((s) => s.includes("Design") || s.includes("Branding"))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Providers", href: "/providers" },
            { label: "Designers & Studios" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold mb-3 border border-purple-200">
              <Palette className="w-3.5 h-3.5 text-purple-600" />
              <span>Product Design & Creative Studios</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Top Verified Design Studios
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Compare elite product designers and boutique studios specializing in conversion-focused UX, Figma design systems, interactive prototypes, and iconic visual brand identities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/post-project"
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all inline-flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Request Design Proposals
              </Link>
              <Link
                href="/providers"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200/90 font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                Browse All Provider Types
              </Link>
            </div>
          </div>
        </header>

        {/* Buyer Guidance */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-10 border border-slate-200/90 shadow-card">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            Evaluating Design Studios: What to Look For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600 mt-4">
            <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/90 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">1. Tokenized Auto-Layout</span>
              Verify that Figma files use strict auto-layout discipline and clean design tokens, so frontend engineers can build components without guesswork.
            </div>
            <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/90 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">2. Quantitative Retention Focus</span>
              Top studios design for time-to-value (TTV), activation metrics, and reduced user churn, not just aesthetic Dribbble shots.
            </div>
            <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/90 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">3. Complete Edge Cases</span>
              Demand realistic designs for loading skeletons, validation errors, empty states, and responsive breakpoint flows.
            </div>
          </div>
        </div>

        {/* Providers Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Verified Design Studios ({designProviders.length})
            </h2>
            <span className="text-xs text-slate-500">
              Sorted by Verified Portfolio & Client Reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
