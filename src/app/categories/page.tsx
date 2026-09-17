import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Code, Palette, TrendingUp, Cpu, ShieldCheck } from "lucide-react";
import { CATEGORIES, SERVICES } from "@/lib/data";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Service Categories Directory | GraphicsIdea",
  description:
    "Explore all service categories on GraphicsIdea: Development, Design, Growth Marketing, AI, and Cloud Infrastructure.",
};

export default function CategoriesIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Categories" }]} />

        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Taxonomy Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Service Categories
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse our core service domains. Each category connects you with specialized studios,
            engineering firms, and strategic consultancies vetted for production excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const catServices = SERVICES.filter((s) => s.categorySlug === cat.slug);

            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-100/80 flex items-center justify-center mb-5">
                    {cat.slug === "development" && <Code className="w-6 h-6" />}
                    {cat.slug === "design" && <Palette className="w-6 h-6" />}
                    {cat.slug === "marketing" && <TrendingUp className="w-6 h-6" />}
                    {cat.slug === "ai-automation" && <Cpu className="w-6 h-6" />}
                    {cat.slug === "cloud-it" && <ShieldCheck className="w-6 h-6" />}
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{cat.description}</p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Services in this domain:
                    </span>
                    {catServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block text-xs font-medium text-slate-700 hover:text-brand-600 py-1"
                      >
                        • {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                  >
                    View Category Hub <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-slate-400">
                    {catServices.length} Active Services
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
