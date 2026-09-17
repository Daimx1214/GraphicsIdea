import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Code,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Sparkles,
  HelpCircle,
  Layers,
} from "lucide-react";
import { TECHNOLOGIES_DATA, PROVIDERS, SERVICES } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return TECHNOLOGIES_DATA.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tech = TECHNOLOGIES_DATA.find((t) => t.slug === params.slug);
  if (!tech) {
    return {
      title: "Technology Not Found",
    };
  }

  return {
    title: `${tech.name} Developers & Engineering Agencies | GraphicsIdea`,
    description: tech.whatItIs,
  };
}

export default function TechnologyLandingPage({ params }: Props) {
  const tech = TECHNOLOGIES_DATA.find((t) => t.slug === params.slug);
  if (!tech) {
    notFound();
  }

  // Matching providers whose tech stack includes this technology
  const matchingProviders = PROVIDERS.filter((p) =>
    p.technologies.some(
      (t) =>
        t.toLowerCase().includes(tech.name.toLowerCase()) ||
        tech.name.toLowerCase().includes(t.toLowerCase())
    )
  );

  const relevantServices = SERVICES.filter((s) => tech.relevantServiceSlugs.includes(s.slug));

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Technologies", href: "/technologies" },
            { label: tech.name },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-4 border border-brand-200">
              <Code className="w-3.5 h-3.5 text-brand-600" />
              Technology Stack Hub & Marketplace
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {tech.name} Specialists & Verified Providers
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              {tech.headline}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
              {tech.whatItIs}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#providers"
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                Browse {matchingProviders.length} Vetted {tech.name} Providers
              </Link>
              <Link
                href={`/post-project?tech=${tech.slug}`}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-brand-600" />
                Post a {tech.name} Project
              </Link>
            </div>
          </div>
        </header>

        {/* When Businesses Use This Technology */}
        <section className="mb-14">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Architecture Fit
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              When Should Businesses Choose {tech.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tech.whenToUse.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card">
                <div className="text-brand-600 font-bold text-lg mb-2">0{i + 1}</div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Developers Build */}
        <section className="mb-14 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Production Capabilities
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              What Senior {tech.name} Developers Build
            </h2>
          </div>

          <div className="space-y-3">
            {tech.whatDevsBuild.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant Service Capabilities */}
        {relevantServices.length > 0 && (
          <section className="mb-14">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Related Services Utilizing {tech.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relevantServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-brand-500 hover:shadow-card transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-brand-600 mb-1">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{service.shortDescription}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-brand-600 font-semibold mt-4">
                    <span>View Service Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Vetted Providers for this Tech */}
        <section id="providers" className="mb-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Stack Specialists
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Verified Providers for {tech.name}
              </h2>
            </div>
            <Link
              href={`/providers?search=${encodeURIComponent(tech.name)}`}
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

        {/* Related Technologies Chips */}
        <section className="mb-14 bg-white rounded-3xl p-8 border border-slate-200 shadow-card">
          <h3 className="font-bold text-base text-slate-900 mb-4">Related Technologies & Stacks</h3>
          <div className="flex flex-wrap gap-2">
            {tech.relatedTech.map((rTech) => (
              <Link
                key={rTech}
                href={`/technologies/${rTech.toLowerCase().replace(/[^a-z0-9]+/g, "")}`}
                className="bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs px-3.5 py-2 rounded-xl hover:border-brand-500 hover:text-brand-600 transition-colors"
              >
                {rTech} Developers →
              </Link>
            ))}
          </div>
        </section>

        {/* Technology FAQs */}
        <section className="mb-14 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Technical Due Diligence
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About Hiring {tech.name} Experts
            </h2>
          </div>

          <div className="space-y-4">
            {tech.faqs.map((faq, idx) => (
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
            Hire Top {tech.name} Engineers Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
            Compare vetted studios, agencies, and senior specialists with proven production {tech.name} architectures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/post-project?tech=${tech.slug}`}
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
