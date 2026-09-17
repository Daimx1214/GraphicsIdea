import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { PROVIDERS } from "@/lib/data";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Featured Case Studies & Work | GraphicsIdea Digital Agency",
  description:
    "Explore GraphicsIdea case studies with verified ROI metrics, client architecture diagrams, and high-impact digital products delivered for market leaders.",
};

export default function CaseStudiesIndexPage() {
  const allCaseStudies = PROVIDERS.flatMap((p) =>
    p.caseStudies.map((cs) => ({
      ...cs,
      provider: p,
    }))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Case Studies" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Demonstrable Outcomes
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Real Work. Real Expertise.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore how GraphicsIdea designs, builds, and scales custom software products.
            From high-throughput fintech engines to native mobile apps, see how we solve complex technical challenges for fast-growing companies.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full">
                  <Image src={cs.heroImage} alt={cs.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {cs.industry}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-brand-600 font-semibold">Client: {cs.client}</span>
                    <span className="text-slate-400">By {cs.provider.name}</span>
                  </div>

                  <h2 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2">{cs.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {cs.summary}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-slate-100">
                    {cs.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl transition-colors shadow-sm"
                >
                  Read Technical Breakdown <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
