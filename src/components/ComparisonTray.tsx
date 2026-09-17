"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCompare } from "@/context/CompareContext";
import { X, CheckCircle2, Star, ArrowRight, ShieldCheck, Scale, ExternalLink } from "lucide-react";

export default function ComparisonTray() {
  const {
    comparedProviders,
    removeFromCompare,
    clearCompare,
    isCompareModalOpen,
    setIsCompareModalOpen,
  } = useCompare();

  if (comparedProviders.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Tray */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-2xl w-[92%] bg-slate-900 text-white rounded-2xl shadow-feature border border-slate-800 p-3 sm:px-5 flex items-center justify-between gap-4 animate-in slide-in-from-bottom-5 duration-200">
        <div className="flex items-center gap-3 overflow-x-auto py-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-300 shrink-0">
            <Scale className="w-4 h-4" />
            <span>Comparing ({comparedProviders.length}/3):</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {comparedProviders.map((provider) => (
              <div
                key={provider.id}
                className="flex items-center gap-2 bg-slate-800/90 pl-2 pr-1.5 py-1 rounded-lg border border-slate-700 text-xs"
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                  <Image src={provider.logo} alt={provider.name} fill className="object-cover" />
                </div>
                <span className="font-medium truncate max-w-[100px]">{provider.name}</span>
                <button
                  type="button"
                  onClick={() => removeFromCompare(provider.id)}
                  className="text-slate-400 hover:text-white p-0.5"
                  title="Remove"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsCompareModalOpen(true)}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
          >
            Compare Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={clearCompare}
            className="text-slate-400 hover:text-slate-200 text-xs px-2 py-1"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Full Comparison Matrix Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-brand-600" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Side-by-Side Dedicated Squad Comparison</h3>
                  <p className="text-xs text-slate-500">
                    Compare GraphicsIdea engineering squad capabilities, team sizes, stack competencies, and sprint rates
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparison Matrix Table */}
            <div className="overflow-x-auto p-6 flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                      Attribute
                    </th>
                    {comparedProviders.map((prov) => (
                      <th key={prov.id} className="p-3 text-left w-1/4">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                            <Image src={prov.logo} alt={prov.name} fill className="object-cover" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">{prov.name}</div>
                            <span className="text-[11px] text-slate-500">{prov.providerType}</span>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {/* Verified & Trust */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Vetting Status</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3">
                        {prov.verified ? (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <ShieldCheck className="w-3.5 h-3.5" /> Vetted Agency Squad
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400">Standard</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Rating & Reviews */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Rating & Reviews</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-slate-900">{prov.rating.toFixed(2)}</span>
                          <span className="text-xs text-slate-500">({prov.reviewCount} verified reviews)</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Hourly Rate */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Hourly Rate Range</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3 font-semibold text-slate-900">
                        {prov.hourlyRate}
                      </td>
                    ))}
                  </tr>

                  {/* Min Project Budget */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Min. Project Size</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3 text-slate-700">
                        {prov.minProjectBudget}
                      </td>
                    ))}
                  </tr>

                  {/* Team Size */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Team Size & Scale</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3 text-slate-700">
                        {prov.teamSize}
                      </td>
                    ))}
                  </tr>

                  {/* Location & Remote */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Location</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3 text-slate-700">
                        {prov.location}
                      </td>
                    ))}
                  </tr>

                  {/* Response Time */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Avg. Response Time</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3 text-slate-700">
                        {prov.responseTime}
                      </td>
                    ))}
                  </tr>

                  {/* Core Technologies */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Core Tech Stack</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {prov.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Profile Completeness */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Profile Audit Score</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-brand-600 h-full rounded-full"
                              style={{ width: `${prov.profileCompleteness}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-semibold text-slate-700">
                            {prov.profileCompleteness}%
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Direct Action */}
                  <tr>
                    <td className="p-3 font-medium text-slate-600 text-xs">Take Action</td>
                    {comparedProviders.map((prov) => (
                      <td key={prov.id} className="p-3">
                        <div className="space-y-2">
                          <Link
                            href={`/providers/${prov.slug}`}
                            onClick={() => setIsCompareModalOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-lg transition-colors shadow-2xs"
                          >
                            View Full Profile <ExternalLink className="w-3 h-3" />
                          </Link>
                          <Link
                            href={`/post-project?provider=${prov.slug}`}
                            onClick={() => setIsCompareModalOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors"
                          >
                            Request Quote
                          </Link>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span>All dedicated squads are directly managed, vetted, and guaranteed by GraphicsIdea.</span>
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(false)}
                className="font-medium text-slate-700 hover:text-slate-900"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
