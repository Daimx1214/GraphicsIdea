import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ShieldCheck, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { PROVIDERS } from "@/lib/data";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Verified Client Reviews & Ratings | GraphicsIdea",
  description:
    "Read 100% authentic, audited client reviews and verified project feedback across development, design, and marketing providers on GraphicsIdea.",
};

export default function ReviewsDirectoryPage() {
  const allReviews = PROVIDERS.flatMap((p) =>
    p.reviews.map((r) => ({
      ...r,
      providerName: p.name,
      providerSlug: p.slug,
      providerLogo: p.logo,
    }))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Reviews" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Independent Verification
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Audited Client Reviews & Feedback
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Zero anonymous reviews. Every review on GraphicsIdea requires confirmed contract or invoice
            verification. We audit communication, technical execution quality, delivery timeliness,
            and value for money.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-200/90 shrink-0 shadow-sm">
                      <Image src={rev.providerLogo} alt={rev.providerName} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Review for Provider</div>
                      <Link
                        href={`/providers/${rev.providerSlug}`}
                        className="font-bold text-sm text-slate-900 hover:text-brand-600"
                      >
                        {rev.providerName}
                      </Link>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Engagement
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-900">{rev.rating.toFixed(1)}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500">{rev.serviceProvided}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &quot;{rev.comment}&quot;
                </p>

                {/* Score Breakdown */}
                <div className="grid grid-cols-4 gap-2 py-3 px-4 bg-slate-50/70 rounded-xl border border-slate-200/90 text-center mb-6 text-[11px]">
                  <div>
                    <span className="text-slate-400 block">Communication</span>
                    <span className="font-bold text-slate-900">{rev.scores.communication}/5</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Quality</span>
                    <span className="font-bold text-slate-900">{rev.scores.quality}/5</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Timeliness</span>
                    <span className="font-bold text-slate-900">{rev.scores.timeliness}/5</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Value</span>
                    <span className="font-bold text-slate-900">{rev.scores.value}/5</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                <div>
                  <span className="font-bold text-slate-900">{rev.clientName}</span>, {rev.clientRole} at {rev.companyName}
                </div>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
