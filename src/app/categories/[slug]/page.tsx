import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Code, Briefcase } from "lucide-react";
import { CATEGORIES, SERVICES, PROVIDERS } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} | Verified Providers & Services`,
    description: category.description,
  };
}

export default function CategoryLandingPage({ params }: Props) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) {
    notFound();
  }

  const services = SERVICES.filter((s) => s.categorySlug === category.slug);
  const serviceNames = services.map((s) => s.name);

  // Matching providers
  const matchingProviders = PROVIDERS.filter((p) =>
    p.primaryServices.some((ps) => serviceNames.includes(ps))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Categories", href: "/categories" },
            { label: category.name },
          ]}
        />

        {/* Hero */}
        <header className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-2">
              Category Domain Overview
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {category.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              {category.headline}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/providers?category=${category.slug}`}
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                Filter {matchingProviders.length} Providers in Directory
              </Link>
              <Link
                href="/post-project"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200/90 font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-brand-600" />
                Post Project for {category.name}
              </Link>
            </div>
          </div>
        </header>

        {/* Services in Category */}
        <section className="mb-14">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Specific Capabilities
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Services Available under {category.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Matching Providers */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Top Talent & Studios
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Verified Providers in {category.name}
              </h2>
            </div>
            <Link
              href={`/providers?category=${category.slug}`}
              className="text-xs font-semibold text-brand-600 hover:underline"
            >
              View all in directory →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </section>

        {/* Popular Tech & Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 border border-slate-200/90 shadow-card">
            <h3 className="font-bold text-base text-slate-900 mb-4">Popular Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {category.popularTech.map((tech) => (
                <Link
                  key={tech}
                  href={`/providers?search=${encodeURIComponent(tech)}`}
                  className="bg-slate-50 border border-slate-200/90 text-slate-700 font-mono text-xs px-3 py-1.5 rounded-xl hover:border-brand-500 hover:text-brand-600 transition-colors shadow-sm"
                >
                  {tech} →
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 border border-slate-200/90 shadow-card">
            <h3 className="font-bold text-base text-slate-900 mb-4">Relevant Industries</h3>
            <div className="flex flex-wrap gap-2">
              {category.industries.map((ind) => (
                <Link
                  key={ind}
                  href={`/providers?industry=${encodeURIComponent(ind)}`}
                  className="bg-slate-50 border border-slate-200/90 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-xl hover:border-brand-500 hover:text-brand-600 transition-colors shadow-sm"
                >
                  {ind} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
