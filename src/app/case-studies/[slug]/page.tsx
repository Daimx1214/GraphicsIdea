import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Building2,
  Layers,
  Sparkles,
} from "lucide-react";
import { PROVIDERS } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = PROVIDERS.flatMap((p) => p.caseStudies);
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = PROVIDERS.flatMap((p) =>
    p.caseStudies.map((cs) => ({ ...cs, provider: p }))
  ).find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | GraphicsIdea Case Study`,
    description: caseStudy.summary,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [{ url: caseStudy.heroImage }],
    },
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const caseStudy = PROVIDERS.flatMap((p) =>
    p.caseStudies.map((cs) => ({ ...cs, provider: p }))
  ).find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Case Studies", href: "/case-studies" },
            { label: caseStudy.client },
          ]}
        />

        {/* Hero Header */}
        <header className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-card mb-10">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-300 uppercase tracking-wider mb-2">
                <span>{caseStudy.industry}</span>
                <span>•</span>
                <span>Client: {caseStudy.client}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {caseStudy.title}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-200/90">
                <Image
                  src={caseStudy.provider.logo}
                  alt={caseStudy.provider.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xs text-slate-500">Delivered By</div>
                <Link
                  href={`/providers/${caseStudy.provider.slug}`}
                  className="text-sm font-bold text-slate-900 hover:text-brand-600"
                >
                  {caseStudy.provider.name}
                </Link>
              </div>
            </div>

            <Link
              href={`/post-project?provider=${caseStudy.provider.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-sm transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5" /> Request Proposal From Provider
            </Link>
          </div>
        </header>

        {/* Case Study Deep Content */}
        <article className="space-y-8 mb-12">
          {/* Verified Outcomes & Impact */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Verified Key Metrics & Outcomes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center"
                >
                  <div className="font-extrabold text-lg text-emerald-900 mb-1">{metric}</div>
                  <div className="text-[11px] text-emerald-700">Verified Client Metric</div>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
            <h2 className="text-xl font-bold text-slate-900 mb-3">The Architectural Challenge</h2>
            <p className="text-sm text-slate-700 leading-relaxed">{caseStudy.challenge}</p>
          </div>

          {/* The Technical Solution */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
            <h2 className="text-xl font-bold text-slate-900 mb-3">The Engineered Solution</h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">{caseStudy.solution}</p>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/90">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.provider.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-white border border-slate-200/90 text-slate-800 px-2.5 py-1 rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Provider Spotlight */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">About the Provider</h3>
            <ProviderCard provider={caseStudy.provider} />
          </div>
        </article>
      </div>
    </div>
  );
}
