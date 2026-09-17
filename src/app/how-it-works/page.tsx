import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Code2,
  FileCheck2,
  UserCheck2,
  Rocket,
  Lock,
  Workflow,
  Check,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Engineering Process & Delivery Lifecycle | GraphicsIdea",
  description:
    "Learn how GraphicsIdea delivers custom software products. Predictable 4-step lifecycle: Discovery & Architecture, UI/UX Prototyping, Agile Sprints, and Launch & Scale.",
};

const DELIVERY_STAGES = [
  {
    step: "01",
    title: "Discovery & Technical Architecture",
    subtitle: "Mapping scope & database schemas",
    icon: FileCheck2,
    description:
      "We analyze your technical requirements, model relational database schemas, format REST/GraphQL API specifications, and break down the sprint timeline with fixed milestone quotes.",
    deliverables: [
      "Technical architecture & DB schema blueprint",
      "API contract specs & third-party integration plan",
      "Sprint roadmap & milestone cost breakdown",
      "Binding work-for-hire IP agreement",
    ],
  },
  {
    step: "02",
    title: "UI/UX & Design Systems",
    subtitle: "Tokenized Figma files & prototypes",
    icon: UserCheck2,
    description:
      "Our product designers build high-fidelity Figma design systems with auto-layout discipline, tokenized component libraries, and interactive click-through prototypes.",
    deliverables: [
      "Figma component library & token tokens",
      "Interactive click-through user prototype",
      "User journey maps & edge-case screen states",
      "Developer handoff documentation",
    ],
  },
  {
    step: "03",
    title: "Agile Sprints & QA Testing",
    subtitle: "Bi-weekly builds & clean code",
    icon: Code2,
    description:
      "Senior full-stack developers write clean, typed Next.js and React Native code backed by automated test coverage, bi-weekly staging deploys, and daily Loom updates.",
    deliverables: [
      "Bi-weekly staging environment builds",
      "Automated unit & integration test coverage",
      "Dedicated Slack communication channel",
      "Daily Loom walkthroughs & progress logs",
    ],
  },
  {
    step: "04",
    title: "Launch & Continuous Scaling",
    subtitle: "Zero-downtime deploy & IP handover",
    icon: Rocket,
    description:
      "We deploy your application to production cloud infrastructure (AWS/Vercel), transfer 100% of repository ownership, and provide 30 days of post-launch warranty monitoring.",
    deliverables: [
      "Zero-downtime production cloud deployment",
      "100% GitHub repository & IP ownership transfer",
      "30-day complimentary warranty & bug fixes",
      "Developer handover documentation & retainer options",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Engineering Process" }]} />

        {/* Hero Section */}
        <header className="bg-white rounded-3xl p-8 sm:p-14 mb-16 border border-slate-200/90 shadow-card text-slate-900">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              A predictable process from initial scope to production launch.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We eliminate technical uncertainty with transparent milestone sprints, bi-weekly staging builds, and 100% source code ownership from day one.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#estimator"
                className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition-all inline-flex items-center gap-2"
              >
                Estimate Your Project Scope <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* 4 Stages Detailed */}
        <div className="space-y-12 mb-16">
          {DELIVERY_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-600 text-white font-extrabold text-sm flex items-center justify-center">
                      {stage.step}
                    </span>
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                      {stage.subtitle}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{stage.title}</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                    Stage Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stage.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">Ready to start your engineering sprint?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-8">
            Get an instant scope breakdown or book a 30-minute discovery call with our principal software architect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#estimator"
              className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              Start Project Estimator
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-all"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
