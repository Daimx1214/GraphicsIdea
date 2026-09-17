"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, HelpCircle, ShieldCheck } from "lucide-react";
import { GENERAL_FAQS } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = GENERAL_FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-600">
            Quick, clear answers about how our vetting works, direct contracts, pricing, and getting started.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs (e.g. fees, verification, contracts)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-card"
          />
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-card transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-brand-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-xs text-slate-500">
              No FAQs matched your search. Contact our advisory team directly at{" "}
              <Link href="/contact" className="text-brand-600 underline">
                Support
              </Link>
              .
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
