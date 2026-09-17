import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SERVICES, CATEGORIES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "All Technology & Digital Services Directory | GraphicsIdea",
  description:
    "Explore our complete directory of verified digital services: Web Development, Custom Software, UI/UX Design, SEO, Mobile Apps, AI Engineering, and more.",
};

export default function ServicesIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reusable Breadcrumb */}
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Service Capabilities
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Explore Verified Technology & Digital Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse our verified catalog of engineering, design, and growth services. Every category features independently evaluated agencies and senior contractors with clear pricing and verified client reviews.
          </p>
        </div>

        {/* Categories Grouped Services */}
        <div className="space-y-12">
          {CATEGORIES.map((category) => {
            const catServices = SERVICES.filter((s) => s.categorySlug === category.slug);
            if (catServices.length === 0) return null;

            return (
              <section
                key={category.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {category.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">{category.headline}</p>
                  </div>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 shrink-0"
                  >
                    View Category Hub <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
