"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  ChevronDown,
  ShieldCheck,
  Star,
  Sparkles,
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Cpu,
  Laptop,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import { PROVIDERS, CATEGORIES, SERVICES } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

function SquadsDirectoryContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Transform provider data into Agency Engineering Squads
  const agencySquads = [
    {
      id: "squad-web",
      name: "GraphicsIdea Web Engineering Squad",
      slug: "web-development",
      category: "development",
      lead: "Alex Rivera (Principal Web Architect)",
      teamSize: "8 Senior Full-Stack Engineers",
      icon: <Code className="w-6 h-6 text-brand-600" />,
      tagline: "High-performance Next.js 14 web applications, PostgreSQL schemas, and custom API backends.",
      primaryTech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
      metrics: "150+ Web Applications Delivered • 99.8% Uptime Architecture",
      projects: ["PayStream Fintech Engine", "SaaS Billing Portals", "Enterprise REST & GraphQL APIs"],
    },
    {
      id: "squad-mobile",
      name: "GraphicsIdea Mobile App Studio",
      slug: "mobile-app-development",
      category: "development",
      lead: "Sophia Chen (Lead Mobile Engineer)",
      teamSize: "6 iOS & Android Specialists",
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      tagline: "Native-quality React Native & Flutter mobile applications with offline sync and push notifications.",
      primaryTech: ["React Native", "Flutter", "iOS Swift", "Android Kotlin", "Firebase"],
      metrics: "45+ Mobile Apps on App Store & Play Store • 4.9 Star Average",
      projects: ["HealthHub Telehealth Mobile App", "Logistics Fleet Tracker", "Crypto Wallet App"],
    },
    {
      id: "squad-design",
      name: "GraphicsIdea Product UI/UX Lab",
      slug: "ui-ux-design",
      category: "design",
      lead: "Marcus Vance (Director of Design)",
      teamSize: "5 Product UI/UX Designers",
      icon: <Palette className="w-6 h-6 text-amber-600" />,
      tagline: "Tokenized Figma design systems, interactive user prototypes, and conversion-optimized interfaces.",
      primaryTech: ["Figma", "Framer", "Design Tokens Studio", "User Testing", "Prototyping"],
      metrics: "100+ Figma Design Systems Crafted • +38% Avg Conversion Lift",
      projects: ["DataMesh Analytics Design System", "B2B SaaS Workspace", "E-Commerce Checkout"],
    },
    {
      id: "squad-ai",
      name: "GraphicsIdea AI & Data Intelligence Lab",
      slug: "software-development",
      category: "ai-automation",
      lead: "Dr. Aris Thorne (AI Systems Lead)",
      teamSize: "5 Machine Learning Engineers",
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      tagline: "Intelligent AI agents, OpenAI GPT-4o integrations, RAG vector search, and automated business workflows.",
      primaryTech: ["Python", "FastAPI", "OpenAI API", "Pinecone Vector DB", "LangChain"],
      metrics: "30+ Enterprise AI Workflows Deployed • 0% Hallucination Safety RAG",
      projects: ["LegalTech Document Synthesis", "AI Support Agent", "Predictive Analytics Engine"],
    },
    {
      id: "squad-ecom",
      name: "GraphicsIdea E-Commerce Engineering Unit",
      slug: "shopify-development",
      category: "development",
      lead: "David Miller (Head of eCommerce)",
      teamSize: "4 Shopify Plus Engineers",
      icon: <Laptop className="w-6 h-6 text-rose-600" />,
      tagline: "Custom Shopify Plus liquid storefronts and headless Next.js e-commerce architectures.",
      primaryTech: ["Shopify Plus", "Liquid", "Next.js Storefront", "Stripe API", "Klaviyo"],
      metrics: "60+ High-Converting Storefronts • Sub-Second Mobile Checkout",
      projects: ["Global Apparel Storefront", "B2B Wholesale Portal", "Custom Checkout Functions"],
    },
    {
      id: "squad-seo",
      name: "GraphicsIdea Technical SEO & Growth Squad",
      slug: "seo",
      category: "marketing",
      lead: "Rachel Adams (Organic Growth Lead)",
      teamSize: "4 Technical SEO Specialists",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      tagline: "Technical search architecture, programmatic SEO engines, and Core Web Vitals performance tuning.",
      primaryTech: ["Ahrefs", "GA4", "Search Console", "Programmatic SEO", "Schema.org"],
      metrics: "30M+ Organic Visitors Generated • 100% Core Web Vitals Pass Rate",
      projects: ["SaaS Programmatic Directory", "Enterprise Search Audit", "Local SEO Hub"],
    },
  ];

  const filteredSquads = useMemo(() => {
    return agencySquads.filter((squad) => {
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = squad.name.toLowerCase().includes(query);
        const matchesTech = squad.primaryTech.some((t) => t.toLowerCase().includes(query));
        const matchesLead = squad.lead.toLowerCase().includes(query);
        if (!matchesName && !matchesTech && !matchesLead) return false;
      }

      if (selectedCategory !== "all" && squad.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Agency Squads" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            GraphicsIdea Dedicated Tech Squads
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every project at GraphicsIdea is assigned a dedicated senior engineering squad led by a principal software architect. Explore our specialized units and their technical deliverables.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-card mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tech stack, squad name, or architect..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium text-slate-900"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Units
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("development")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === "development" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Engineering
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("design")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === "design" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              UI/UX Design
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("ai-automation")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === "ai-automation" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              AI & Cloud
            </button>
          </div>
        </div>

        {/* Squad Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSquads.map((squad) => (
            <div
              key={squad.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                    {squad.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    Active Squad
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {squad.name}
                </h3>

                <div className="text-xs text-brand-600 font-semibold mb-3">
                  Lead: {squad.lead} ({squad.teamSize})
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {squad.tagline}
                </p>

                <div className="bg-slate-50 rounded-xl p-3 mb-5 border border-slate-200/60">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Proven Track Record
                  </div>
                  <div className="text-xs font-bold text-slate-900">{squad.metrics}</div>
                </div>

                <div className="space-y-1.5 mb-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Featured Deliverables
                  </div>
                  {squad.projects.map((proj, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {squad.primaryTech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Book Discovery Call with Squad</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProvidersPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs font-semibold text-slate-500">Loading GraphicsIdea Squads...</div>}>
      <SquadsDirectoryContent />
    </Suspense>
  );
}
