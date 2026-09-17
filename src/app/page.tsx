"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  Star,
  CheckCircle2,
  Code,
  Palette,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Briefcase,
  Users,
  ChevronDown,
  Building2,
  Lock,
} from "lucide-react";
import { CATEGORIES, SERVICES, PROVIDERS, INDUSTRIES, GENERAL_FAQS } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/ui/Button";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      router.push(`/providers?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/providers");
    }
  };

  const featuredProviders = PROVIDERS.filter((p) => p.featured).slice(0, 3);
  const realCaseStudies = PROVIDERS.flatMap((p) => p.caseStudies).slice(0, 3);
  const featuredReviews = PROVIDERS.flatMap((p) =>
    p.reviews.map((r) => ({ ...r, providerName: p.name, providerSlug: p.slug }))
  ).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO (LIGHT, SPACIOUS, MODERN & UNCLUTTERED)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-50 border-b border-slate-200/60 pt-16 pb-20 md:pt-22 md:pb-24">
        {/* Subtle ambient radial tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(219,234,254,0.35),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-6 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Hand-checked tech teams you can actually trust</span>
            </div>

            {/* Dominant H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Hire developers and designers who actually ship.
            </h1>

            {/* Outcome-Focused Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Tired of endless bot bids, inflated agency markups, and surprise invoices? We check real GitHub code, talk directly with past clients, and publish upfront pricing so you can hire with confidence.
            </p>

            {/* High-Converting Search Form */}
            <form
              onSubmit={handleHeroSearch}
              className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-card hover:shadow-card-hover border border-slate-200/90 text-slate-900 mb-5 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto transition-shadow"
            >
              <div className="flex-1 flex items-center gap-3 px-3">
                <Search className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you building? (e.g. Next.js SaaS, Figma UI, Shopify store)"
                  className="w-full text-slate-900 placeholder-slate-400 bg-transparent text-xs sm:text-sm outline-none font-medium"
                />
              </div>

              <div className="h-px sm:h-auto sm:w-px bg-slate-200"></div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs sm:text-sm text-slate-700 bg-transparent px-3 py-2 outline-none font-medium cursor-pointer"
                aria-label="Category selector"
              >
                <option value="all">All Specialties</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all shrink-0"
              >
                <Search className="w-4 h-4" />
                Find Teams
              </button>
            </form>

            {/* Popular Search Suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 mb-8">
              <span className="text-slate-400 font-medium">Popular:</span>
              {["Next.js", "UI/UX Design", "Technical SEO", "Custom Software", "Shopify Plus", "AI RAG"].map(
                (term) => (
                  <Link
                    key={term}
                    href={`/providers?search=${encodeURIComponent(term)}`}
                    className="bg-white hover:bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200 shadow-2xs transition-colors font-medium"
                  >
                    {term}
                  </Link>
                )
              )}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/providers" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Browse Vetted Teams
              </Button>
              <Button
                href="/post-project"
                variant="outline"
                size="lg"
                leftIcon={<Briefcase className="w-4 h-4 text-brand-600" />}
              >
                Tell Us What You Need
              </Button>
            </div>
          </div>

          {/* Clean Trust Metrics Strip */}
          <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">100%</div>
              <div className="text-xs text-slate-500 mt-1">Real Repos & Case Studies Checked</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">$0</div>
              <div className="text-xs text-slate-500 mt-1">Zero Platform Markups or Cuts</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">4.95 / 5</div>
              <div className="text-xs text-slate-500 mt-1">Verified Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">&lt; 2.5 hrs</div>
              <div className="text-xs text-slate-500 mt-1">Direct Provider Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SERVICE TAXONOMY (AIRY & CLEAN CATEGORIES)
      ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Browse by craft
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Find specialists for every phase of your product
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            >
              Browse all categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-hover hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    {cat.slug === "development" && <Code className="w-5 h-5" />}
                    {cat.slug === "design" && <Palette className="w-5 h-5" />}
                    {cat.slug === "marketing" && <TrendingUp className="w-5 h-5" />}
                    {cat.slug === "ai-automation" && <Cpu className="w-5 h-5" />}
                    {!["development", "design", "marketing", "ai-automation"].includes(cat.slug) && (
                      <Layers className="w-5 h-5" />
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600">
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: HOW IT WORKS (CLEAN 3-STEP NARRATIVE)
      ========================================================================= */}
      <section className="py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              No fluff, no runaround
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              How GraphicsIdea works
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cut through the noise. Here is how founders and teams find dependable partners without the usual hiring headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between">
              <div>
                <div className="text-4xl font-black text-brand-600/30 mb-4">01</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Search by stack & budget</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Filter by the exact technologies you use, your budget constraints, and the type of partner you need. No sifting through hundreds of irrelevant bot pitches.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between">
              <div>
                <div className="text-4xl font-black text-brand-600/30 mb-4">02</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Review real proof</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We check actual Git commits, test live web apps, and interview previous clients directly. What you see is what they actually delivered.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between">
              <div>
                <div className="text-4xl font-black text-brand-600/30 mb-4">03</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Talk straight to the builders</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reach out directly to schedule an intro call. You discuss scope with the engineers or designers doing the work, contract directly, and keep 100% IP ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: POPULAR SERVICES (FEATURED CAPABILITIES)
      ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Popular areas
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Services teams hire for most often
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 8).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: PROVIDER CLASSIFICATION GUIDE (WHO TO HIRE)
      ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Who to work with
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Match the right team size to your project scope
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Paying a 30-person agency to fix a few CSS bugs makes no sense. Neither does asking a solo freelancer to build a high-volume banking backend. Here is how our partners break down:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Model 1: Agencies */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Full-Service Product Agencies
                </h3>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Complete Turnkey Product Squads
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Multi-disciplinary squads featuring a Project Lead, UI/UX Designer, Frontend/Backend Engineers, and QA. You get total delivery ownership and a single point of contact.
                </p>
                <div className="text-[11px] text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Best for:</span> Complete MVP launches, full product overhauls, and software requiring ongoing sprint teams.
                </div>
              </div>
              <Link
                href="/providers/agencies"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
              >
                Browse Vetted Agencies <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Model 2: Software Companies */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Software Engineering Firms
                </h3>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Backend, Cloud & Data Architecture
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Deep technical teams specializing in distributed backend systems, compliance (SOC 2, HIPAA), high-throughput databases, and microservices architecture.
                </p>
                <div className="text-[11px] text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Best for:</span> Mission-critical APIs, database migrations, security hardening, and high-load platforms.
                </div>
              </div>
              <Link
                href="/providers/software-companies"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
              >
                Browse Software Companies <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Model 3: Design Studios */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Boutique Design Studios
                </h3>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Product UI/UX & Design Systems
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Design-first teams that turn messy user journeys into clean, practical Figma design systems and interactive prototypes your developers can actually build.
                </p>
                <div className="text-[11px] text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Best for:</span> SaaS dashboards, mobile app UX flows, design systems, and visual rebrands.
                </div>
              </div>
              <Link
                href="/providers/designers"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
              >
                Browse Design Studios <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Model 4: Senior Developers */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Independent Senior Specialists
                </h3>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Direct Sprint Embeds & Technical Principals
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Seasoned freelance engineers who plug straight into your GitHub repo and daily standups. Zero agency management overhead, direct commits, and pure output.
                </p>
                <div className="text-[11px] text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Best for:</span> Immediate team augmentation, unblocking technical debt, or tackling niche framework challenges.
                </div>
              </div>
              <Link
                href="/providers/developers"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
              >
                Browse Senior Specialists <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Model 5: Marketing Experts */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Growth & SEO Specialists
                </h3>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Technical SEO, CRO & Pipeline Growth
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Pragmatic growth teams focused on Core Web Vitals, organic search structure, conversion rate tests, and building qualified inbound traffic that actually converts.
                </p>
                <div className="text-[11px] text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Best for:</span> B2B organic lead generation, search ranking recovery, and eCommerce revenue scale.
                </div>
              </div>
              <Link
                href="/providers/marketing-experts"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
              >
                Browse Growth Labs <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Model 6: Custom Advisory */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Unsure What Setup You Need?
                </h3>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Free Architecture & Sourcing Advice
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Tell us what you are building and your budget parameters. We will give you an honest, vendor-neutral recommendation on whether you need an agency, a studio, or a solo contractor.
                </p>
                <div className="text-[11px] text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Best for:</span> Teams without a technical lead or founders comparing multiple development routes.
                </div>
              </div>
              <Link
                href="/post-project"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
              >
                Get Free Matching Advice <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED VERIFIED PROVIDERS (SPACIOUS 3-COLUMN)
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Tested partners
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Teams delivering exceptional work right now
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                A hand-picked selection of agencies, studios, and senior specialists with verified delivery records
              </p>
            </div>
            <Link
              href="/providers"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            >
              Browse all {PROVIDERS.length} providers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE VETTING STANDARD (EDITORIAL TRUST SECTION)
      ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Explanatory Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/80 text-xs font-semibold mb-6 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Our vetting standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                How we check every team before they ever get listed
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Most online directories let anyone sign up if they have an email address or buy an ad. We reject over 90% of applicants so you do not have to waste weeks filtering out unvetted profiles yourself.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">1. We inspect actual code repositories:</strong> We review active Git repositories, test coverage, and documentation habits. No fake GitHub stars or purchased templates.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">2. We speak with past clients directly:</strong> We hop on phone or video calls with previous clients to verify delivery timelines, responsiveness, and problem solving under pressure.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">3. We verify real business entities:</strong> We verify corporate registration, tax IDs, and executive identities to make sure you are dealing with a legitimate, accountable business.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">4. Direct contracts, zero cuts:</strong> You work directly with your chosen team. We take $0 commission from your budget, keeping everyone&apos;s incentives clean and transparent.
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Read our full 4-stage vetting protocol & comparison matrix →
                </Link>
              </div>
            </div>

            {/* Right: Visual Verification Scorecard */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Audited Provider Card
                  </span>
                  <div className="text-lg font-bold text-slate-900">Apex Arc Studio</div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Tier 1
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-700 mb-6">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-medium text-slate-800">GitHub Code & Architecture Audit</span>
                  <span className="text-emerald-700 font-semibold">Verified Clean (98/100)</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-medium text-slate-800">Direct Client Interviews</span>
                  <span className="text-emerald-700 font-semibold">3 Confirmed (5.0/5.0)</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-medium text-slate-800">Business Registration & KYB</span>
                  <span className="text-emerald-700 font-semibold">Confirmed Active</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-medium text-slate-800">Average First Response Time</span>
                  <span className="text-slate-900 font-semibold">&lt; 1.5 Hours</span>
                </div>
              </div>

              <Link
                href="/providers"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl transition-all shadow-sm hover:shadow"
              >
                Browse All Verified Providers <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CASE STUDIES (PROVEN OUTCOMES)
      ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Real outcomes
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Real projects, real lessons, real numbers
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Take a closer look at the actual architecture, code decisions, and business results from completed client builds
              </p>
            </div>
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {realCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full">
                    <Image src={cs.heroImage} alt={cs.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {cs.industry}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-semibold text-brand-600 mb-1">
                      Client: {cs.client}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 mb-2.5 line-clamp-2">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {cs.summary}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {cs.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-xl transition-colors"
                  >
                    Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLIENT REVIEWS (AUTHENTIC TESTIMONIALS)
      ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Client stories
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                What founders say about working with these teams
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            >
              Browse all reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/90 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200 inline-flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="font-bold text-xs sm:text-sm text-slate-900">{rev.clientName}</div>
                  <div className="text-[11px] text-slate-500">
                    {rev.clientRole}, {rev.companyName}
                  </div>
                  <div className="text-[11px] font-medium text-brand-600 mt-1">
                    Engaged: {rev.providerName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FOR SERVICE PROVIDERS (PARTNER BANNER)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 uppercase tracking-wider mb-2">
                <Users className="w-4 h-4" /> For Agencies & Senior Freelancers
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Run an agency or work as an experienced senior specialist?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you take pride in shipping high-quality software and design, you shouldn&apos;t have to fight in low-bid freelance marketplaces. Join GraphicsIdea to connect with founders who value craft and have real budgets. 0% commission on your earnings, direct client contracts.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button href="/onboarding" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Apply to Join
              </Button>
              <Button
                href="/for-providers"
                variant="outline-dark"
                size="lg"
              >
                How Vetting Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS
      ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Got questions?
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Straight answers about how we vet teams, how contracts work, pricing models, and IP ownership.
            </p>
          </div>

          <div className="space-y-3">
            {GENERAL_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-card transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-brand-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-xs font-semibold text-brand-600 hover:underline inline-flex items-center gap-1"
            >
              Explore all FAQ topics in our Help Center →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FINAL CONVERSION CTA (FLOATING LUXURY HERO CARD)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 p-8 sm:p-14 lg:p-16 shadow-2xl text-center text-white">
            {/* Ambient Background Lighting */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs font-semibold mb-6 backdrop-blur-sm shadow-xs">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Let&apos;s build something great</span>
              </div>

              {/* Bold Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                Got a project ready to build? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-300">
                  Find the team that will actually deliver.
                </span>
              </h2>

              {/* Persuasive Body */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Take the guesswork out of hiring. Compare audited studios and senior developers with verified code, transparent rates, and real client reviews.
              </p>

              {/* High-Impact Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/providers"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Browse Vetted Teams</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/post-project"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5"
                >
                  <Briefcase className="w-4 h-4 text-brand-400" />
                  <span>Tell Us What You Need</span>
                </Link>
              </div>

              {/* Value Micro-Guarantees */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-400">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real Repos Checked</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Contracts (0% Cut)</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Spoken with Past Clients</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% IP Owned by You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
