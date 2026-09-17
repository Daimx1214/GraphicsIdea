import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Code,
  DollarSign,
  ChevronRight,
  Briefcase,
  Users,
  Clock,
  TrendingUp,
  Building2,
  ExternalLink,
} from "lucide-react";
import {
  SERVICES,
  PROVIDERS,
  TECHNOLOGIES_DATA,
  DETAILED_INDUSTRIES_DATA,
} from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://graphicsidea.com/services/${service.slug}`,
    },
  };
}

export default function ServiceLandingPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  // Find providers matching this service
  const matchingProviders = PROVIDERS.filter(
    (p) =>
      p.primaryServices.some(
        (s) =>
          s.toLowerCase().includes(service.name.toLowerCase()) ||
          service.name.toLowerCase().includes(s.toLowerCase())
      ) || p.technologies.some((t) => service.technologies.includes(t))
  );

  // Find relevant case studies from matching providers or related to this service
  const matchingCaseStudies = PROVIDERS.flatMap((p) =>
    p.caseStudies.map((cs) => ({ ...cs, provider: p }))
  ).filter(
    (cs) =>
      matchingProviders.some((p) => p.id === cs.provider.id) ||
      cs.challenge.toLowerCase().includes(service.slug.replace(/-/g, " ")) ||
      cs.solution.toLowerCase().includes(service.slug.replace(/-/g, " "))
  );

  const displayCaseStudies =
    matchingCaseStudies.length > 0
      ? matchingCaseStudies.slice(0, 3)
      : PROVIDERS.flatMap((p) => p.caseStudies.map((cs) => ({ ...cs, provider: p }))).slice(0, 3);

  // Find relevant industries from DETAILED_INDUSTRIES_DATA
  const relevantIndustries = DETAILED_INDUSTRIES_DATA.filter(
    (ind) =>
      ind.relevantServiceSlugs.includes(service.slug) ||
      ind.relevantServiceSlugs.includes(service.slug.split("-")[0])
  );

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "GraphicsIdea",
      url: "https://graphicsidea.com",
    },
    serviceType: service.primaryKeyword,
    url: `https://graphicsidea.com/services/${service.slug}`,
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.name },
          ]}
        />

        {/* Hero Section */}
        <header className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-4 border border-brand-200">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              Verified Capability Guide & Marketplace
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {service.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              {service.heroSubheadline}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
              {service.shortDescription} Whether you need to validate an initial prototype,
              overhaul an existing codebase, or assemble a dedicated engineering squad, GraphicsIdea
              connects you with verified partners vetted for technical competence and delivery
              reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#providers"
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                Browse {matchingProviders.length} Vetted Providers
              </Link>
              <Link
                href="/post-project"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200/90 font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-brand-600" />
                Post a Project for {service.name}
              </Link>
            </div>
          </div>
        </header>

        {/* Section: Provider Types Available */}
        <section className="mb-14">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Engagement Models
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Find the Right Provider Type for Your Needs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select the optimal structure based on your team’s internal bandwidth, technical leadership, and project scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="font-bold text-base text-slate-900 mb-2">Agencies & Software Studios</div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Full-service cross-functional squads (Product Manager, Lead Architect, Designers, QA). Ideal when you need turn-key product delivery with cohesive accountability.
              </p>
              <div className="text-[11px] font-semibold text-brand-600">Best for: End-to-end platforms & MVPs</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="font-bold text-base text-slate-900 mb-2">Independent Senior Specialists</div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Elite freelance architects and senior developers who embed directly into your sprint cycle to solve hard problems without agency overhead.
              </p>
              <div className="text-[11px] font-semibold text-brand-600">Best for: Team augmentation & specialized builds</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
              <div className="font-bold text-base text-slate-900 mb-2">Technical Consultancies</div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                High-level system architects specializing in security compliance, infrastructure scaling, database migration, and technology audits.
              </p>
              <div className="text-[11px] font-semibold text-brand-600">Best for: Audits, compliance & architecture reviews</div>
            </div>
          </div>
        </section>

        {/* Section: Sub-Services Breakdown */}
        <section className="mb-14">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Capabilities Breakdown
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {service.name} Available on GraphicsIdea
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.subServices.map((sub, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all">
                <h3 className="font-bold text-base text-slate-900 mb-2">{sub.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{sub.description}</p>
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {sub.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Educational Buyer's Guide */}
        <section className="mb-14 bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Buyer Guidance & Diligence
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              What to Look For When Hiring for {service.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Frameworks used by experienced technology directors to separate marketing hype from authentic engineering capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: What to Look For */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Must-Have Criteria
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                {service.buyerGuide.whatToLookFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Red Flags */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Red Flags to Avoid
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                {service.buyerGuide.redFlagsToAvoid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Questions to Ask */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                <HelpCircle className="w-4 h-4 text-brand-600" />
                Critical Questions to Ask
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                {service.buyerGuide.questionsToAsk.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-500 font-bold">?</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Recommended Squad Structure & Timeline Expectations */}
        <section className="mb-14 bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Delivery Engineering & Team Architecture
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Recommended Squad Structure & Timeline Expectations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              How elite verified providers staff and execute {service.name} engagements to eliminate scope creep and delivery risk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Squad Composition */}
            <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-brand-600" />
                Ideal Squad Composition
              </h3>
              <div className="space-y-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="font-semibold text-slate-900">Lead Architect / Technical Principal</div>
                  <div className="text-slate-500 mt-0.5">Defines system topology, database schemas, code review standards, and CI/CD security.</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="font-semibold text-slate-900">Senior Engineers & Specialists (1–3 devs)</div>
                  <div className="text-slate-500 mt-0.5">Executes core feature sprints, automated unit/integration test suites, and clean API endpoints.</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="font-semibold text-slate-900">UI/UX & Product Designer (Shared)</div>
                  <div className="text-slate-500 mt-0.5">Ensures design token compliance, responsive edge cases, and design QA before production shipping.</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="font-semibold text-slate-900">QA Automation & Project Manager</div>
                  <div className="text-slate-500 mt-0.5">Maintains 2-week sprint cadence, async Slack standups, and automated regression test coverage.</div>
                </div>
              </div>
            </div>

            {/* Timeline Expectations */}
            <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-brand-600" />
                  Realistic Project Timeline Benchmarks
                </h3>
                <div className="space-y-4 text-xs">
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-brand-100 text-brand-700 font-bold flex items-center justify-center shrink-0">
                      W1
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">Discovery & Architecture Sprint (Weeks 1–2)</span>
                      <span className="text-slate-500">Technical specification, repository scaffolding, Figma design tokens, and milestones.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0">
                      W3
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">MVP Execution & Staging Deployments (Weeks 3–6)</span>
                      <span className="text-slate-500">Core workflows, external API integrations, daily staging PRs, and continuous integration.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0">
                      W7
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">Hardening, Auditing & Production Launch (Weeks 7–10+)</span>
                      <span className="text-slate-500">Security scans, load testing, SEO verification, and complete IP & repo handoff.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Standard Delivery Model:</span>
                <span className="font-semibold text-slate-900">2-Week Iterative Sprints</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Popular Technologies */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Popular Technologies & Toolchains
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Explore specialized engineering ecosystems and vetted specialists for {service.name}.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => {
              const techMatch = TECHNOLOGIES_DATA.find(
                (t) =>
                  t.name.toLowerCase() === tech.toLowerCase() ||
                  t.slug.toLowerCase() ===
                    tech.toLowerCase().replace(/\s+/g, "").replace(/\./g, "")
              );
              const targetHref = techMatch
                ? `/technologies/${techMatch.slug}`
                : `/providers?search=${encodeURIComponent(tech)}`;
              return (
                <Link
                  key={tech}
                  href={targetHref}
                  className="bg-white px-3.5 py-2 rounded-xl border border-slate-200/90 text-xs font-mono text-slate-700 hover:border-brand-500 hover:text-brand-600 transition-colors shadow-sm flex items-center gap-1.5 group"
                >
                  <span>{tech}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-brand-600 transition-colors">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Section: Industry Applications */}
        {relevantIndustries.length > 0 && (
          <section className="mb-14 bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Vertical Expertise
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {service.name} by Industry Vertical
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore regulatory compliance frameworks, industry-specific architectures, and pre-vetted specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group p-5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-brand-500 hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-brand-600" />
                      <h3 className="font-bold text-sm text-slate-900 group-hover:text-brand-600 transition-colors">
                        {ind.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {ind.description}
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-brand-600 flex items-center gap-1">
                    View {ind.name} Blueprint{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section: Related Case Studies */}
        {displayCaseStudies.length > 0 && (
          <section className="mb-14 bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                  Proven Track Record
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Case Studies & Measurable Outcomes
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Real production systems engineered and shipped by verified GraphicsIdea partners.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="text-xs font-semibold text-brand-600 hover:underline"
              >
                Browse All Case Studies →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayCaseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  href={`/case-studies/${cs.slug}`}
                  className="group bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-brand-500 hover:shadow-card-hover transition-all p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-3">
                      <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200/90 text-slate-700 shadow-sm">
                        {cs.industry}
                      </span>
                      <span className="text-brand-600 font-bold">{cs.client}</span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">
                      {cs.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {cs.summary}
                    </p>

                    {cs.metrics && cs.metrics.length > 0 && (
                      <div className="space-y-1.5 mb-4">
                        {cs.metrics.slice(0, 2).map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="text-[11px] font-medium text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-emerald-100"
                          >
                            <TrendingUp className="w-3 h-3 shrink-0" />
                            <span className="truncate">{m}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200/90 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                        {cs.provider.name.charAt(0)}
                      </div>
                      <span className="text-xs font-semibold text-slate-700">
                        {cs.provider.name}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-brand-600 group-hover:translate-x-0.5 transition-transform">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section: Pricing Cost Breakdown */}
        <section className="mb-14 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Transparent Budgeting
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              How Much Does {service.name} Cost?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pricing varies based on architectural scope, compliance, and team composition rather than arbitrary flat rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {service.pricingBreakdown.tiers.map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90">
                <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
                  {tier.tierName}
                </div>
                <div className="text-2xl font-extrabold text-slate-900 mb-3">{tier.range}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{tier.description}</p>
                <div className="pt-3 border-t border-slate-200/90 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Typical Scope:</span> {tier.typicalScope}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/90 text-xs text-slate-600">
            <span className="font-bold text-slate-800">Key Cost Factors: </span>
            {service.pricingBreakdown.pricingFactors.join(" • ")}
          </div>
        </section>

        {/* Section: Browse Matching Providers */}
        <section id="providers" className="mb-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Curated Providers
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Verified Providers for {service.name}
              </h2>
            </div>
            <Link
              href={`/providers?service=${service.slug}`}
              className="text-xs font-semibold text-brand-600 hover:underline"
            >
              Filter in Directory ({matchingProviders.length} total) →
            </Link>
          </div>

          {matchingProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200/90 text-xs text-slate-500 shadow-card">
              No direct providers currently listed for this filter. Check all available providers in the{" "}
              <Link href="/providers" className="text-brand-600 underline">
                Provider Directory
              </Link>
              .
            </div>
          )}
        </section>

        {/* Section: Service FAQs */}
        <section className="mb-14 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Questions About Hiring {service.name}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90">
                <h3 className="font-bold text-sm text-slate-900 mb-2">{item.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Service Page CTA */}
        <section className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-slate-800 shadow-feature">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Find the Right {service.name} Partner Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
            Compare verified provider portfolios, inspect code quality audits, or submit your project
            requirements for custom matching.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/post-project"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
            >
              Post a Project Requirement
            </Link>
            <Link
              href="/providers"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all shadow-sm"
            >
              Explore All Providers
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
