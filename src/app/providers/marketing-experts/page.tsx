import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, TrendingUp, Briefcase } from "lucide-react";
import { PROVIDERS } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Top Verified SEO & Growth Marketing Experts | GraphicsIdea",
  description:
    "Compare verified technical SEO architects, conversion rate optimization (CRO) consultancies, and digital growth strategists. Audited pipeline results and transparent pricing.",
};

export default function MarketingExpertsDirectoryPage() {
  const marketingProviders = PROVIDERS.filter(
    (p) =>
      p.providerType === "Consultant" ||
      p.primaryServices.some((s) => s.includes("SEO") || s.includes("Marketing") || s.includes("Strategy"))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Providers", href: "/providers" },
            { label: "Marketing Experts" },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card mb-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Top Verified Marketing & SEO Experts
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Compare performance-oriented SEO architects, CRO specialists, and fractional growth executives who drive qualified B2B pipeline and revenue rather than vanity traffic spikes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/post-project"
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all inline-flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Request Growth Proposals
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
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            Hiring Growth & SEO Experts: What Matters Most
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600 mt-4">
            <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/90 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">1. Pipeline Attribution</span>
              Prioritize partners who measure demo requests, closed deals, and customer acquisition cost (CAC) rather than empty pageviews.
            </div>
            <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/90 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">2. Technical Architecture</span>
              Top SEO providers fix headless hydration issues, structured schema, and crawl budgets directly in your codebase.
            </div>
            <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/90 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">3. Statistical CRO Rigor</span>
              Demand A/B testing methodologies with minimum sample size calculations and verified 95%+ statistical significance.
            </div>
          </div>
        </div>

        {/* Providers Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Verified Marketing & Growth Experts ({marketingProviders.length})
            </h2>
            <span className="text-xs text-slate-500">
              Sorted by Verified Pipeline Case Studies & Ratings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
