import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, ShieldCheck, Briefcase } from "lucide-react";
import { DETAILED_INDUSTRIES_DATA } from "@/lib/data";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Browse Providers by Industry Focus | GraphicsIdea",
  description:
    "Find verified software development agencies, design studios, and technology providers with confirmed domain experience in FinTech, Healthcare, SaaS, eCommerce, and more.",
};

export default function IndustriesIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Industries" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Domain Competence
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Find Providers Who Understand Your Industry
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Building software in regulated or complex domains requires more than generic programming skills.
            Discover verified providers who understand your industry regulations, workflows, and user expectations.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                  {ind.name}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {ind.description}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-slate-100 text-xs text-slate-700 mb-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Common Deliverables:
                  </div>
                  {ind.commonProjects.slice(0, 2).map((proj, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-brand-600 font-bold">•</span>
                      <span className="line-clamp-1">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600">
                <span>View Industry Guide & Providers</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
