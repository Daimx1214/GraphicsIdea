import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Users,
  Calendar,
  ExternalLink,
  Globe,
  Briefcase,
  CheckCircle2,
  Award,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { PROVIDERS } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROVIDERS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  if (!provider) {
    return {
      title: "Provider Not Found",
    };
  }

  return {
    title: `${provider.name} | Verified ${provider.providerType} Reviews & Portfolio`,
    description: `${provider.tagline} Hourly rates: ${provider.hourlyRate}. Rating: ${provider.rating}/5 from ${provider.reviewCount} client reviews.`,
    openGraph: {
      title: `${provider.name} | Verified Provider on GraphicsIdea`,
      description: provider.bio,
      images: [{ url: provider.logo }],
    },
  };
}

export default function ProviderProfilePage({ params }: Props) {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  if (!provider) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: provider.name,
    image: provider.logo,
    description: provider.bio,
    address: {
      "@type": "PostalAddress",
      addressLocality: provider.location,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: provider.rating.toString(),
      reviewCount: provider.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: provider.hourlyRate,
    url: `https://graphicsidea.com/providers/${provider.slug}`,
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Providers", href: "/providers" },
            { label: provider.name },
          ]}
        />

        {/* Top Header Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card mb-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 shrink-0 shadow-sm">
                <Image src={provider.logo} alt={provider.name} fill className="object-cover" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {provider.name}
                  </h1>
                  {provider.verified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Verified Provider
                    </span>
                  )}
                  {provider.topRated && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Top Rated
                    </span>
                  )}
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/60">
                    {provider.providerType}
                  </span>
                </div>

                <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-4">
                  {provider.tagline}
                </p>

                {/* Key Quick Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{provider.rating.toFixed(2)}</span>
                    <span className="text-slate-500 font-normal">
                      ({provider.reviewCount} verified reviews)
                    </span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{provider.location}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>{provider.teamSize}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Responds in {provider.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Box */}
            <div className="w-full lg:w-72 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/90 flex flex-col gap-3 shrink-0">
              <div>
                <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-semibold">
                  Hourly Rate Range
                </span>
                <span className="text-xl font-extrabold text-slate-900">{provider.hourlyRate}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-semibold">
                  Min. Project Budget
                </span>
                <span className="text-sm font-semibold text-slate-800">{provider.minProjectBudget}</span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href={`/post-project?provider=${provider.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-sm transition-all"
                >
                  <Briefcase className="w-4 h-4" />
                  Request Proposal
                </Link>
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 rounded-xl border border-slate-200/90 transition-colors shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Visit Official Website <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout: Main Details + Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About {provider.name}</h2>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-6">
                {provider.longDescription}
              </p>

              {/* Certifications & Badges */}
              {provider.certifications.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Verified Certifications & Accreditations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {provider.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-50 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200/90"
                      >
                        <Award className="w-3.5 h-3.5 text-brand-600" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Primary Capabilities & Services */}
            <section className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Core Services & Pricing Models</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {provider.primaryServices.map((serviceName) => (
                  <div
                    key={serviceName}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-semibold text-sm text-slate-900 mb-1">{serviceName}</div>
                    <div className="text-xs text-slate-500 mb-2">Model: {provider.pricingModel}</div>
                    <Link
                      href={`/services/${serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-xs font-semibold text-brand-600 hover:underline inline-flex items-center gap-1"
                    >
                      Service Details <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Real Portfolio Showcase */}
            {provider.portfolio.length > 0 && (
              <section className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Featured Portfolio Projects</h2>
                <div className="space-y-6">
                  {provider.portfolio.map((item) => (
                    <div
                      key={item.id}
                      className="border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-card-hover transition-all"
                    >
                      <div className="relative h-60 w-full">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                          {item.industry}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 font-medium mb-4 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Verified Outcome: {item.outcome}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technology.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Verified Case Studies */}
            {provider.caseStudies.length > 0 && (
              <section className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
                <h2 className="text-xl font-bold text-slate-900 mb-6">In-Depth Case Studies</h2>
                <div className="space-y-6">
                  {provider.caseStudies.map((cs) => (
                    <div
                      key={cs.id}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                        {cs.industry} Case Study
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">{cs.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{cs.summary}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                          <span className="font-bold text-slate-900 block mb-1">Challenge</span>
                          <p className="text-slate-600">{cs.challenge}</p>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                          <span className="font-bold text-slate-900 block mb-1">Architecture Solution</span>
                          <p className="text-slate-600">{cs.solution}</p>
                        </div>
                      </div>
                      <Link
                        href={`/case-studies/${cs.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:underline"
                      >
                        Read Full Technical Architecture Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Client Reviews */}
            <section className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Verified Client Reviews</h2>
                  <p className="text-xs text-slate-500">
                    {provider.reviewCount} audited reviews from confirmed client engagements
                  </p>
                </div>
                <div className="flex items-center gap-1 text-base font-bold text-slate-900">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>{provider.rating.toFixed(2)} / 5</span>
                </div>
              </div>

              <div className="space-y-6">
                {provider.reviews.map((rev) => (
                  <div key={rev.id} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-sm text-slate-900">{rev.clientName}</span>
                        <span className="text-xs text-slate-500 ml-2">
                          {rev.clientRole}, {rev.companyName}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-semibold text-slate-800 ml-1">
                        Service: {rev.serviceProvided}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                      &quot;{rev.comment}&quot;
                    </p>

                    {/* Detailed Scores breakdown */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-4 bg-white rounded-xl border border-slate-200/90 text-[11px] shadow-sm">
                      <div>
                        <span className="text-slate-400 block font-medium">Communication</span>
                        <span className="font-bold text-slate-900">
                          {rev.scores.communication} / 5
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Quality</span>
                        <span className="font-bold text-slate-900">{rev.scores.quality} / 5</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Timeliness</span>
                        <span className="font-bold text-slate-900">
                          {rev.scores.timeliness} / 5
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Value</span>
                        <span className="font-bold text-slate-900">{rev.scores.value} / 5</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Tech Stack, Industries & Quick RFQ */}
          <aside className="space-y-6">
            {/* Tech Stack Matrix */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-4">
                Verified Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {provider.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-4">
                Domain & Industry Experience
              </h3>
              <div className="space-y-2">
                {provider.industries.map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Audit Quality Score */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Profile Completeness
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  {provider.profileCompleteness}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: `${provider.profileCompleteness}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                This provider has submitted verified client references, active GitHub/live URL
                audits, and legal business registration.
              </p>
            </div>

            {/* Final Contact CTA Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Ready to work with {provider.name}?</h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Submit your project specifications and receive a customized technical proposal and
                kickoff timeline.
              </p>
              <Link
                href={`/post-project?provider=${provider.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-sm transition-all"
              >
                <Briefcase className="w-4 h-4" />
                Submit Project Request
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
