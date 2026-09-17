import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, Award, Users, ArrowRight, Target, Eye } from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About GraphicsIdea | Why We Built This",
  description:
    "Why we built GraphicsIdea: to get rid of spammy bidding wars, fake portfolios, and bloated agency markups.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "About" }]} />

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-3 border border-brand-200">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            Built by builders, for builders
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why we built GraphicsIdea
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Finding dependable technical talent shouldn&apos;t feel like gambling. Here is the story behind our platform and how we do things differently.
          </p>
        </div>

        {/* Core Narrative */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed mb-12">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">The problem with hiring online today</h2>
            <p className="mb-4">
              If you have ever tried hiring developers or design studios online, you already know how painful it is. The industry has been stuck between two frustrating extremes:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 list-disc pl-5">
              <li>
                <strong>Massive freelance platforms:</strong> You post a project and receive 40 copy-pasted bot bids within five minutes. Portfolios are full of downloaded templates, reviews can easily be gamed, and it quickly turns into a race to the bottom where quality is an afterthought.
              </li>
              <li>
                <strong>Enterprise talent brokers:</strong> They pitch you seasoned experts and charge $200–$300/hour, but pocket a 40–60% middleman margin and assign your project to fresh graduates working behind a closed curtain.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our approach: transparency, proof, and direct contact</h2>
            <p>
              We built GraphicsIdea to be the platform we always wished existed when we were building our own companies. A curated directory where every single agency, studio, and senior freelancer is personally reviewed by people who understand software.
            </p>
            <p className="mt-3">
              We check real Git commits, test production web applications, call past clients, and verify business registrations before anyone gets a profile. And once you find someone you like, you reach out to them directly. No middleman fees, no communication silos, and zero cuts from your project budget.
            </p>
          </div>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <h3 className="font-bold text-sm text-slate-900 mb-1">1. Real code, not slides</h3>
              <p className="text-xs text-slate-600">
                Anyone can post a pretty mockup. We inspect actual production repositories, test suites, and clean architecture before awarding a badge.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <h3 className="font-bold text-sm text-slate-900 mb-1">2. Upfront, honest rates</h3>
              <p className="text-xs text-slate-600">
                No wasted 45-minute discovery calls just to find out a team is 5x over budget. Hourly rates and minimum project sizes are visible right away.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <h3 className="font-bold text-sm text-slate-900 mb-1">3. Direct collaboration</h3>
              <p className="text-xs text-slate-600">
                Work directly with the people building your product. You own 100% of your code and intellectual property from day one.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 text-center shadow-feature">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to see who is on here?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Explore verified engineering agencies, boutique design studios, and senior specialists.
          </p>
          <Link
            href="/providers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            Browse Verified Teams <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
