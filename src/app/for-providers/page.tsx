import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  LineChart,
  Lock,
  Layers,
  Award,
  Globe,
  Star,
} from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "For Providers | Get Discovered by Serious Clients | GraphicsIdea",
  description:
    "Join GraphicsIdea. Connect directly with founders and teams looking for verified agencies, software studios, and senior specialists. 0% platform cuts.",
};

export default function ForProvidersPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "For Providers" }]} />

        {/* Hero Section */}
        <header className="bg-white rounded-3xl p-8 sm:p-14 mb-16 border border-slate-200/90 shadow-card text-slate-900 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-6 border border-brand-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Direct client relationships • 0% platform fee
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Work with clients who value good engineering and design.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Tired of competing against 50 bot bids on open freelance platforms? GraphicsIdea is built for agencies, software studios, and senior independent specialists who take pride in what they ship. We showcase your actual code, verified reviews, and case studies to clients with real budgets.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/onboarding"
                className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm shadow-sm transition-all inline-flex items-center gap-2"
              >
                Apply as a Provider <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#standards"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold text-sm transition-all"
              >
                How We Review Applicants
              </Link>
            </div>
          </div>
        </header>

        {/* Provider Advantages Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Why list on GraphicsIdea?
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Built for craft, not a race to the bottom
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              On open bidding sites, clients search for the lowest hourly rate. On GraphicsIdea, founders look for proven reliability, clean repos, and honest communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Clients with Real Budgets</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with founders and product leaders who understand what good software costs and have realistic expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">A Badge That Means Something</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stand out with a profile that proves you have been vetted — because our technical team actually looked at your code and called your references.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">100% Direct Relationships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Message, email, Slack, and invoice your clients directly under your own terms. We never hold your communications hostage.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Highlight Real Technical Depth</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Showcase actual architectural decisions, problems you solved, and measurable outcomes rather than superficial screenshots.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Authentic Client Reviews</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Build a verified track record with real reviews covering communication, code quality, timeline adherence, and overall value.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Upfront Pricing Filters</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Publish your typical rates and project minimums right away. Attract clients who fit your pricing and avoid wasted discovery calls.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Standards Section */}
        <section id="standards" className="mb-20 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Verification standards
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Our 4-Step Provider Review Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              To keep trust high for everyone, every applicant is reviewed by technical peers before their profile is approved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xl font-extrabold text-brand-600 mb-2">01</div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Entity Verification</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Confirmation of company registration, domain ownership, and legitimate business standing.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xl font-extrabold text-brand-600 mb-2">02</div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Code & Work Audit</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Inspection of live production apps, responsive performance, and GitHub repository hygiene.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xl font-extrabold text-brand-600 mb-2">03</div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Client Reference Calls</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct conversations with past clients to confirm responsiveness, deadlines, and delivery.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xl font-extrabold text-brand-600 mb-2">04</div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Badge & Visibility</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Verified Provider badge awarded and indexed in relevant service categories and tech hubs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 text-center shadow-feature">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ready to connect with better clients?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
            Submit your profile details. Most qualified agencies and senior specialists are reviewed and live within 48 business hours.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            Start Provider Application <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
