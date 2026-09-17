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
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";
import { PROVIDERS, CATEGORIES, SERVICES, INDUSTRIES, Provider } from "@/lib/data";
import ProviderCard from "@/components/ProviderCard";
import Breadcrumbs from "@/components/Breadcrumbs";

function ProvidersDirectoryContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "";
  const initialService = searchParams?.get("service") || "all";
  const initialCategory = searchParams?.get("category") || "all";
  const initialIndustry = searchParams?.get("industry") || "all";

  // State
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustry);
  const [selectedProviderType, setSelectedProviderType] = useState<string>("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "name">("rating");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available unique tech tags
  const allTechs = useMemo(() => {
    const set = new Set<string>();
    PROVIDERS.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const handleTechToggle = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedService("all");
    setSelectedIndustry("all");
    setSelectedProviderType("all");
    setVerifiedOnly(false);
    setMinRating(0);
    setSelectedTech([]);
    setSortBy("rating");
  };

  // Filtered & Sorted Providers
  const filteredProviders = useMemo(() => {
    return PROVIDERS.filter((provider) => {
      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = provider.name.toLowerCase().includes(query);
        const matchesBio = provider.bio.toLowerCase().includes(query);
        const matchesService = provider.primaryServices.some((s) => s.toLowerCase().includes(query));
        const matchesTech = provider.technologies.some((t) => t.toLowerCase().includes(query));
        const matchesLocation = provider.location.toLowerCase().includes(query);
        if (!matchesName && !matchesBio && !matchesService && !matchesTech && !matchesLocation) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== "all") {
        const catObj = CATEGORIES.find((c) => c.slug === selectedCategory);
        if (catObj) {
          const catServices = SERVICES.filter((s) => s.categorySlug === selectedCategory).map((s) => s.name);
          const hasService = provider.primaryServices.some((s) => catServices.includes(s));
          if (!hasService) return false;
        }
      }

      // Service
      if (selectedService !== "all") {
        const serviceObj = SERVICES.find((s) => s.slug === selectedService);
        if (serviceObj && !provider.primaryServices.includes(serviceObj.name)) {
          return false;
        }
      }

      // Industry
      if (selectedIndustry !== "all") {
        if (!provider.industries.some((i) => i.toLowerCase().includes(selectedIndustry.toLowerCase()))) {
          return false;
        }
      }

      // Provider Type
      if (selectedProviderType !== "all" && provider.providerType !== selectedProviderType) {
        return false;
      }

      // Verified Only
      if (verifiedOnly && !provider.verified) {
        return false;
      }

      // Rating
      if (minRating > 0 && provider.rating < minRating) {
        return false;
      }

      // Selected Tech Stack
      if (selectedTech.length > 0) {
        const hasAllTech = selectedTech.every((t) => provider.technologies.includes(t));
        if (!hasAllTech) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [
    searchTerm,
    selectedCategory,
    selectedService,
    selectedIndustry,
    selectedProviderType,
    verifiedOnly,
    minRating,
    selectedTech,
    sortBy,
  ]);

  const activeFiltersCount =
    (searchTerm ? 1 : 0) +
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedService !== "all" ? 1 : 0) +
    (selectedIndustry !== "all" ? 1 : 0) +
    (selectedProviderType !== "all" ? 1 : 0) +
    (verifiedOnly ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    selectedTech.length;

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Providers" }]} />

        {/* Header Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Find Verified Service Providers
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              Discover and compare audited software engineering agencies, product design studios,
              SEO specialists, and certified technology consultancies.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium bg-white px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-sm self-start md:self-auto">
            Showing <span className="font-bold text-slate-900">{filteredProviders.length}</span> of{" "}
            {PROVIDERS.length} vetted providers
          </div>
        </div>

        {/* Global Search & Quick Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-card mb-8 flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by provider name, specialty, stack (e.g. Next.js, Flutter), or location..."
              className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/80 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200"
            >
              <Filter className="w-4 h-4" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 shrink-0">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none cursor-pointer"
                aria-label="Sort providers"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none text-xs">
          <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider shrink-0 mr-1">
            Quick Filters:
          </span>

          <button
            type="button"
            onClick={() => setVerifiedOnly(!verifiedOnly)}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 flex items-center gap-1.5 border ${
              verifiedOnly
                ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Only
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedProviderType(selectedProviderType === "Agency" ? "all" : "Agency")
            }
            className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 border ${
              selectedProviderType === "Agency"
                ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
            }`}
          >
            Agencies
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedProviderType(
                selectedProviderType === "Software Company" ? "all" : "Software Company"
              )
            }
            className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 border ${
              selectedProviderType === "Software Company"
                ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
            }`}
          >
            Software Firms
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedProviderType(selectedProviderType === "Studio" ? "all" : "Studio")
            }
            className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 border ${
              selectedProviderType === "Studio"
                ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
            }`}
          >
            Design Studios
          </button>

          {["Next.js", "React", "Node.js", "Python", "Figma", "AWS", "Shopify"].map((tech) => {
            const isSelected = selectedTech.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => handleTechToggle(tech)}
                className={`px-3 py-1.5 rounded-xl font-mono text-[11px] transition-all shrink-0 border ${
                  isSelected
                    ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                {tech}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setMinRating(minRating === 4.9 ? 0 : 4.9)}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 flex items-center gap-1 border ${
              minRating === 4.9
                ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            4.9+ Stars
          </button>
        </div>

        {/* Active Filters Pill Bar */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
            <span className="text-slate-500 font-medium">Active filters:</span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full border border-brand-200 font-medium">
                Category: {selectedCategory}
                <button type="button" onClick={() => setSelectedCategory("all")}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedService !== "all" && (
              <span className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full border border-brand-200 font-medium">
                Service: {selectedService}
                <button type="button" onClick={() => setSelectedService("all")}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedProviderType !== "all" && (
              <span className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full border border-brand-200 font-medium">
                Type: {selectedProviderType}
                <button type="button" onClick={() => setSelectedProviderType("all")}><X className="w-3 h-3" /></button>
              </span>
            )}
            {verifiedOnly && (
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
                Verified Only
                <button type="button" onClick={() => setVerifiedOnly(false)}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedTech.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-1 bg-slate-200 text-slate-800 px-2.5 py-1 rounded-full font-mono text-[11px]">
                {tech}
                <button type="button" onClick={() => handleTechToggle(tech)}><X className="w-3 h-3" /></button>
              </span>
            ))}
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-brand-600 hover:underline font-semibold ml-2 inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset all
            </button>
          </div>
        )}

        {/* Main Content: Sidebar Filters + Provider Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-brand-600" />
                  Filter Directory
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-xs text-brand-600 hover:underline font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Vetted Only Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Badges Only
                </span>
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 cursor-pointer"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 outline-none"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Service Capability
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 outline-none"
                >
                  <option value="all">All Services</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Provider Type Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Provider Type
                </label>
                <div className="space-y-1.5 text-xs">
                  {["all", "Agency", "Studio", "Software Company", "Freelancer", "Consultant"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-slate-900">
                      <input
                        type="radio"
                        name="providerType"
                        value={type}
                        checked={selectedProviderType === type}
                        onChange={(e) => setSelectedProviderType(e.target.value)}
                        className="text-brand-600 focus:ring-brand-500"
                      />
                      <span>{type === "all" ? "All Provider Types" : type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Industry Focus
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 outline-none"
                >
                  <option value="all">All Industries</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind.slug} value={ind.name}>
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Minimum Rating */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Minimum Rating
                </label>
                <div className="space-y-1.5 text-xs">
                  {[
                    { label: "Any Rating", val: 0 },
                    { label: "4.5 & Above", val: 4.5 },
                    { label: "4.9 & Above", val: 4.9 },
                  ].map((r) => (
                    <label key={r.val} className="flex items-center gap-2 cursor-pointer text-slate-700">
                      <input
                        type="radio"
                        name="minRating"
                        checked={minRating === r.val}
                        onChange={() => setMinRating(r.val)}
                        className="text-brand-600 focus:ring-brand-500"
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tech Stack Multi-Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Technologies
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {allTechs.map((tech) => {
                    const isSelected = selectedTech.includes(tech);
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechToggle(tech)}
                        className={`text-[11px] font-mono px-2 py-1 rounded-md border transition-colors ${
                          isSelected
                            ? "bg-brand-600 text-white border-brand-600"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Providers Grid */}
          <main className="lg:col-span-3">
            {filteredProviders.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProviders.map((provider) => (
                  <ProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 text-center shadow-card">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 mx-auto flex items-center justify-center mb-5 border border-amber-100">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No Verified Providers Match Your Specific Filters
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
                  We couldn&apos;t find providers currently matching all selected criteria. Try loosening your tech stack or category filters, or explore our dedicated provider hubs.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-sm transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset All Filters ({activeFiltersCount} active)
                  </button>
                  <Link
                    href="/post-project"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all shadow-sm"
                  >
                    Post Custom Requirement
                  </Link>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Explore Dedicated Provider Hubs
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link
                      href="/providers/agencies"
                      className="text-xs text-slate-600 hover:text-brand-600 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      Agencies Hub →
                    </Link>
                    <Link
                      href="/providers/software-companies"
                      className="text-xs text-slate-600 hover:text-brand-600 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      Software Companies →
                    </Link>
                    <Link
                      href="/providers/designers"
                      className="text-xs text-slate-600 hover:text-brand-600 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      Design Studios →
                    </Link>
                    <Link
                      href="/providers/developers"
                      className="text-xs text-slate-600 hover:text-brand-600 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      Senior Developers →
                    </Link>
                    <Link
                      href="/providers/marketing-experts"
                      className="text-xs text-slate-600 hover:text-brand-600 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      Marketing Experts →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Slide-Over Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            {/* Mobile Drawer Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-brand-600" />
                <h3 className="font-bold text-sm text-slate-900">Filters</h3>
                {activeFiltersCount > 0 && (
                  <span className="text-[11px] font-semibold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full border border-brand-200">
                    {activeFiltersCount}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Drawer Content */}
            <div className="p-5 overflow-y-auto flex-1 space-y-6">
              {/* Verified Badges Only */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Badges Only
                </span>
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 cursor-pointer"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 outline-none"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Service Capability
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 outline-none"
                >
                  <option value="all">All Services</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Provider Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Provider Type
                </label>
                <div className="space-y-1.5 text-xs">
                  {["all", "Agency", "Studio", "Software Company", "Freelancer", "Consultant"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer text-slate-700">
                      <input
                        type="radio"
                        name="mobileProviderType"
                        value={type}
                        checked={selectedProviderType === type}
                        onChange={(e) => setSelectedProviderType(e.target.value)}
                        className="text-brand-600 focus:ring-brand-500"
                      />
                      <span>{type === "all" ? "All Provider Types" : type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industry Focus */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Industry Focus
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 outline-none"
                >
                  <option value="all">All Industries</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind.slug} value={ind.name}>
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Minimum Rating */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Minimum Rating
                </label>
                <div className="space-y-1.5 text-xs">
                  {[
                    { label: "Any Rating", val: 0 },
                    { label: "4.5 & Above", val: 4.5 },
                    { label: "4.9 & Above", val: 4.9 },
                  ].map((r) => (
                    <label key={r.val} className="flex items-center gap-2 cursor-pointer text-slate-700">
                      <input
                        type="radio"
                        name="mobileMinRating"
                        checked={minRating === r.val}
                        onChange={() => setMinRating(r.val)}
                        className="text-brand-600 focus:ring-brand-500"
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Technologies
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {allTechs.map((tech) => {
                    const isSelected = selectedTech.includes(tech);
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechToggle(tech)}
                        className={`text-[11px] font-mono px-2 py-1 rounded-md border transition-colors ${
                          isSelected
                            ? "bg-brand-600 text-white border-brand-600"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex-1 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 text-xs font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 active:bg-brand-800 transition-colors shadow-sm"
              >
                Show ({filteredProviders.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProvidersDirectoryPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading Directory...</div>}>
      <ProvidersDirectoryContent />
    </Suspense>
  );
}
