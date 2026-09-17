import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Code,
  Laptop,
  Award,
  Globe,
  Briefcase,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Careers & Engineering Recruitment | GraphicsIdea Agency",
  description:
    "Join GraphicsIdea Agency. We hire senior full-stack developers, UI/UX product designers, and AI architects to build high-impact digital products.",
};

export default function AgencyCareersPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Careers & Recruitment" }]} />

        {/* Hero Section */}
        <header className="bg-white rounded-3xl p-8 sm:p-14 mb-16 border border-slate-200/90 shadow-card text-slate-900 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Build high-impact software with senior tech leads.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              At GraphicsIdea, we assemble elite software development squads for high-growth tech companies and enterprise clients. If you write clean TypeScript, design production Figma systems, or engineer AI pipelines, we want to hear from you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/onboarding"
                className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition-all inline-flex items-center gap-2"
              >
                Apply to Join Our Squads <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold text-sm transition-all"
              >
                Learn About Our Culture
              </Link>
            </div>
          </div>
        </header>

        {/* Open Engineering Roles */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Current Openings
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Open Engineering & Design Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Senior Full-Stack Next.js Architect",
                type: "Full-Time / Remote",
                dept: "Web Engineering Squad",
                desc: "Lead Next.js 14 App Router architecture, PostgreSQL migrations, and GraphQL API design for enterprise clients.",
              },
              {
                title: "Lead React Native Mobile Developer",
                type: "Full-Time / Remote",
                dept: "Mobile App Studio",
                desc: "Engineer cross-platform iOS & Android mobile products with offline SQLite sync and WebRTC streaming.",
              },
              {
                title: "Principal UI/UX Product Designer",
                type: "Full-Time / Remote",
                dept: "Product Design Lab",
                desc: "Craft comprehensive Figma design systems, component tokens, and conversion-focused wireframes.",
              },
              {
                title: "AI & Vector Search Engineer",
                type: "Full-Time / Remote",
                dept: "AI & Data Intelligence Squad",
                desc: "Build OpenAI GPT-4o RAG pipelines, Pinecone vector search backends, and FastAPI microservices.",
              },
            ].map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-brand-600 uppercase tracking-wider">{role.dept}</span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">{role.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{role.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{role.desc}</p>
                </div>

                <Link
                  href="/onboarding"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
