"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Palette, TrendingUp, Cpu, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { ServiceItem, PROVIDERS } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "default" | "compact";
  showCount?: boolean;
}

export default function ServiceCard({
  service,
  variant = "default",
  showCount = true,
}: ServiceCardProps) {
  // Count real matching providers
  const matchingCount = PROVIDERS.filter(
    (p) =>
      p.primaryServices.includes(service.name) ||
      p.technologies.some((t) => service.technologies.includes(t))
  ).length;

  const getServiceIcon = () => {
    switch (service.categorySlug) {
      case "development":
        return <Code className="w-5 h-5 text-brand-600" />;
      case "design":
        return <Palette className="w-5 h-5 text-purple-600" />;
      case "marketing":
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case "ai-automation":
        return <Cpu className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <Link
      href={`/services/${service.slug}`}
      className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between h-full"
    >
      <div>
        {/* Top Header Row: Icon + Count Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-300 transition-all">
            {getServiceIcon()}
          </div>
          {showCount && (
            <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-lg">
              {matchingCount > 0 ? `${matchingCount} Vetted Providers` : "Vetted Capability"}
            </span>
          )}
        </div>

        {/* Service Title */}
        <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Rate / Typical Scope */}
        {service.pricingBreakdown?.averageRange && (
          <div className="pt-3 border-t border-slate-100 mb-4">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
              Typical Range
            </span>
            <span className="text-xs font-semibold text-slate-800">
              {service.pricingBreakdown.averageRange}
            </span>
          </div>
        )}
      </div>

      {/* Footer Link Row */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600 group-hover:text-brand-700">
        <span>Explore Providers & Guide</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
