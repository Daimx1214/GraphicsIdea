"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Provider } from "@/lib/data";
import { useCompare } from "@/context/CompareContext";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const isCompared = isInCompare(provider.id);

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCompared) {
      removeFromCompare(provider.id);
    } else {
      addToCompare(provider);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group h-full">
      <div>
        {/* Top Badges & Compare Toggle */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700">
              {provider.providerType}
            </span>
            {provider.verified && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200/80">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified
              </span>
            )}
            {provider.topRated && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/80">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Top Rated
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={toggleCompare}
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg transition-all ${
              isCompared
                ? "bg-brand-600 text-white shadow-xs"
                : "bg-slate-100 hover:bg-slate-200 text-slate-600"
            }`}
            title="Compare up to 3 providers"
            aria-label={`Compare ${provider.name}`}
          >
            {isCompared ? <Check className="w-3 h-3" /> : null}
            {isCompared ? "Comparing" : "+ Compare"}
          </button>
        </div>

        {/* Provider Identity: Logo + Name + Rating */}
        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-50">
            <Image
              src={provider.logo}
              alt={provider.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="flex-1 min-w-0">
            <Link
              href={`/providers/${provider.slug}`}
              className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-brand-600 transition-colors block truncate"
            >
              {provider.name}
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1 text-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-900">{provider.rating.toFixed(2)}</span>
                <span className="text-slate-500">({provider.reviewCount})</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1 text-xs text-slate-500 truncate">
                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="truncate">{provider.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline / Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {provider.tagline}
        </p>

        {/* Metrics Bar: Rates + Response Time */}
        <div className="grid grid-cols-2 gap-2 text-xs py-2.5 px-3 border border-slate-100 rounded-xl bg-slate-50/70 mb-4">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
              Rate Range
            </span>
            <span className="font-semibold text-slate-900">{provider.hourlyRate}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
              Response Time
            </span>
            <span className="font-semibold text-slate-900">{provider.responseTime}</span>
          </div>
        </div>

        {/* Primary Services / Expertise (2-4 services) */}
        <div className="mb-4">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Primary Capabilities
          </div>
          <div className="flex flex-wrap gap-1.5">
            {provider.primaryServices.slice(0, 3).map((service) => (
              <span
                key={service}
                className="text-xs bg-slate-100 text-slate-700 font-medium px-2 py-1 rounded-md"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action: Prominent View Profile */}
      <div className="pt-4 border-t border-slate-100 mt-2">
        <Link
          href={`/providers/${provider.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl transition-all shadow-sm hover:shadow"
        >
          View Profile & Verified Work <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
