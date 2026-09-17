import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Building2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { DETAILED_INDUSTRIES_DATA, PROVIDERS, SERVICES } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return DETAILED_INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = DETAILED_INDUSTRIES_DATA.find((i) => i.slug === params.slug);
  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.name} Software & Digital Services | GraphicsIdea`,
    description: industry.description,
  };
}

export default function IndustryLandingPage({ params }: Props) {
  const industry = DETAILED_INDUSTRIES_DATA.find((i) => i.slug === params.slug);
  if (!industry) {
    notFound();
  }

  // Matching providers who serve this industry
  const matchingProviders = PROVIDERS.filter((p) =>
    p.industries.some(
      (ind) =>
        ind.toLowerCase().includes(industry.name.toLowerCase().split(" ")[0]) ||
        industry.name.toLowerCase().includes(ind.toLowerCase())
    )
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: industry.name },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-4 border border-brand-200">
              <Building2 className="w-3.5 h-3.5 text-brand-600" />
              Industry Specialized Marketplace Guide
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Technology & Digital Services for {industry.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              {industry.headline}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
              {industry.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#providers"
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                Browse {matchingProviders.length} Vetted Providers in {industry.name}
              </Link>
              <Link
                href="/post-project"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-brand-600" />
                Post a {industry.name} Project
              </Link>
            </div>
          </div>
        </header>

        {/* Common Projects in Industry */}
        <section className="mb-14">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Deliverables & Systems
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Common {industry.name} Digital Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.commonProjects.map((proj, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card">
                <div className="text-brand-600 font-bold text-lg mb-2">0{i + 1}</div>
                <h3 className="font-bold text-base text-slate-900 mb-2">{proj}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Engineered with strict domain compliance, clean data integration, and intuitive workflows.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Due Diligence: Questions to Ask */}
        <section className="mb-14 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Buyer Diligence Checklist
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Questions Businesses Should Ask Before Hiring in {industry.name}
            </h2>
          </div>

          <div className="space-y-4">
            {industry.questionsToAsk.map((q, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <HelpCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{q}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Vetted Providers in this Industry */}
        <section id="providers" className="mb-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Domain Specialists
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Verified Providers for {industry.name}
              </h2>
            </div>
            <Link
              href={`/providers?industry=${encodeURIComponent(industry.name.split(" ")[0])}`}
              className="text-xs font-semibold text-brand-600 hover:underline"
            >
              Filter in Directory ({matchingProviders.length} total) →
            </Link>
          </div>

          {matchingProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
              Check all available providers in the{" "}
              <Link href="/providers" className="text-brand-600 underline">
                Provider Directory
              </Link>
              .
            </div>
          )}
        </section>

        {/* Industry FAQs */}
        <section className="mb-14 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Industry Knowledge
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions for {industry.name} Projects
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-sm text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 text-center shadow-feature">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Build Your {industry.name} Product with Confidence
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
            Compare vetted studios and engineers with proven track records in your industry domain.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/post-project"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
            >
              Post a Project Requirement
            </Link>
            <Link
              href="/providers"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all shadow-sm"
            >
              Explore All Providers
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
