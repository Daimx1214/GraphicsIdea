import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, Award, Users, ArrowRight, Target, Eye } from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About GraphicsIdea Digital Agency | Our Mission & Craft",
  description:
    "Learn about GraphicsIdea: A full-service digital product engineering and design studio building scalable web apps, mobile products, and AI solutions.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Engineering digital products that scale
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            GraphicsIdea is a full-service software development and UI/UX design studio. We help founders and enterprise teams turn complex business ideas into high-converting, market-ready products.
          </p>
        </div>

        {/* Core Narrative */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed mb-12">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our Engineering Philosophy</h2>
            <p className="mb-4">
              We believe great software is built at the intersection of modern system architecture, clean user interfaces, and transparent communication. We cut out corporate bureaucracy and junior handoffs, giving you direct access to senior software architects and product designers.
            </p>
          </div>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <h3 className="font-bold text-sm text-slate-900 mb-1">1. Modern Tech Stack</h3>
              <p className="text-xs text-slate-600">
                We engineer scalable web and mobile applications using Next.js, React Native, TypeScript, Node.js, Python, and AWS cloud infrastructure.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <h3 className="font-bold text-sm text-slate-900 mb-1">2. Tokenized UI/UX</h3>
              <p className="text-xs text-slate-600">
                Our designers craft complete Figma design systems and user journey wireframes optimized for engagement and conversion.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <h3 className="font-bold text-sm text-slate-900 mb-1">3. 100% IP Transfer</h3>
              <p className="text-xs text-slate-600">
                You own 100% of your source code, design assets, and database schemas from day one with zero lock-in or licensing fees.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 text-center shadow-feature">
          <h2 className="text-2xl font-bold text-white mb-2">Have a project in mind?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Get an instant scope breakdown or schedule a discovery call with our lead architect.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#estimator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
            >
              Start Project Estimator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
