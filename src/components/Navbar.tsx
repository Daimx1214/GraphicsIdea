"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShieldCheck,
  Search,
  ChevronDown,
  Menu,
  X,
  Code,
  Palette,
  TrendingUp,
  Cpu,
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  ExternalLink,
  Building2,
  HelpCircle,
} from "lucide-react";
import { SERVICES, CATEGORIES, PROVIDERS } from "@/lib/data";

interface MegaMenuColumn {
  title: string;
  categorySlug: string;
  icon: React.ReactNode;
  items: {
    name: string;
    slug: string;
    tagline: string;
  }[];
}

const MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    title: "Development",
    categorySlug: "development",
    icon: <Code className="w-4 h-4 text-brand-600" />,
    items: [
      { name: "Web Development", slug: "web-development", tagline: "Next.js & React full-stack apps" },
      { name: "Custom Software", slug: "software-development", tagline: "Enterprise backends & APIs" },
      { name: "Mobile App Development", slug: "mobile-app-development", tagline: "iOS, Android & Flutter" },
      { name: "Custom WordPress", slug: "wordpress-development", tagline: "Headless & custom themes" },
      { name: "Shopify Development", slug: "shopify-development", tagline: "eCommerce storefronts & checkouts" },
    ],
  },
  {
    title: "Design & UX",
    categorySlug: "design",
    icon: <Palette className="w-4 h-4 text-purple-600" />,
    items: [
      { name: "UI/UX Design", slug: "ui-ux-design", tagline: "Figma design systems & wireframes" },
      { name: "Product Design", slug: "product-design", tagline: "Conversion-focused user flows" },
      { name: "Branding & Identity", slug: "branding-identity", tagline: "Visual assets & style guides" },
    ],
  },
  {
    title: "Growth & SEO",
    categorySlug: "marketing",
    icon: <TrendingUp className="w-4 h-4 text-amber-600" />,
    items: [
      { name: "SEO & Search Growth", slug: "seo", tagline: "Technical SEO & organic pipeline" },
      { name: "Digital Strategy", slug: "digital-strategy", tagline: "Conversion rate optimization & CRO" },
      { name: "Content Architecture", slug: "content-architecture", tagline: "Topical maps & authority content" },
    ],
  },
  {
    title: "AI & Cloud",
    categorySlug: "cloud-it",
    icon: <Cpu className="w-4 h-4 text-emerald-600" />,
    items: [
      { name: "AI Engineering", slug: "ai-development", tagline: "LLMs, RAG & agent workflows" },
      { name: "Cloud & DevOps", slug: "cloud-devops", tagline: "AWS, Kubernetes & CI/CD" },
      { name: "Security Auditing", slug: "security-auditing", tagline: "SOC 2 & HIPAA compliance" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }, [pathname]);

  // Outside click to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut '/' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !searchModalOpen && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        setSearchModalOpen(true);
      } else if (e.key === "Escape" && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchModalOpen]);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchModalOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchModalOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/providers?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchModalOpen(false);
    }
  };

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/case-studies" },
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80"
            : "bg-white border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3 xl:gap-6">
            {/* Left: Brand Logo & Desktop Nav */}
            <div className="flex items-center gap-3 xl:gap-6 min-w-0">
              <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                <div className="w-8.5 h-8.5 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-xs group-hover:bg-brand-700 transition-colors shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col shrink-0">
                  <span className="text-base font-bold tracking-tight text-slate-900 flex items-center gap-1.5 leading-none">
                    GraphicsIdea
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider text-brand-600 uppercase mt-0.5">
                    Digital Agency & Studio
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0" ref={megaMenuRef}>
                {/* Services Mega Menu Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 xl:px-3 xl:py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      megaMenuOpen || pathname?.startsWith("/services")
                        ? "text-brand-600 bg-brand-50 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                    }`}
                    aria-expanded={megaMenuOpen}
                  >
                    Services
                    <ChevronDown
                      className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${
                        megaMenuOpen ? "rotate-180 text-brand-600" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* Centered Spacious Mega-Menu Dropdown */}
                  {megaMenuOpen && (
                    <div className="fixed left-1/2 -translate-x-1/2 top-[64px] w-[920px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-dropdown border border-slate-200/90 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="grid grid-cols-4 gap-6">
                        {MEGA_MENU_COLUMNS.map((col) => (
                          <div key={col.title}>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 pb-2 border-b border-slate-100">
                              {col.icon}
                              <span>{col.title}</span>
                            </div>
                            <ul className="space-y-1">
                              {col.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={`/services/${item.slug}`}
                                    className="block p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                                  >
                                    <div className="text-xs font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                                      {item.name}
                                    </div>
                                    <div className="text-[11px] text-slate-500 truncate mt-0.5">
                                      {item.tagline}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Mega Menu Footer Banner */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                        <Link
                          href="/services"
                          className="font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                        >
                          Explore all agency services & engineering capabilities <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/contact"
                          className="font-semibold text-slate-900 hover:text-brand-600 inline-flex items-center gap-1"
                        >
                          Have a custom project in mind? Book a consultation <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Primary Nav Links */}
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-2.5 py-1.5 xl:px-3 xl:py-1.5 text-xs xl:text-sm rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                        isActive
                          ? "text-brand-600 bg-brand-50 font-semibold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search + Book Call + Primary CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              {/* Search Modal Trigger */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100/80 hover:bg-slate-100 hover:text-slate-700 border border-slate-200/60 rounded-xl transition-all shrink-0"
                title="Quick search (Press /)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="hidden xl:inline">Search services...</span>
                <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-200 rounded text-slate-500">
                  /
                </kbd>
              </button>

              <Link
                href="/contact"
                className="px-2.5 py-1.5 xl:px-3 xl:py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
              >
                Book Call
              </Link>

              <Link
                href="/post-project"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
                <span>Start a Project</span>
              </Link>
            </div>

            {/* Mobile Actions: Search + Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, skills..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </form>

            <div className="space-y-1">
              <Link
                href="/services"
                className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <Layers className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Services Directory</span>
              </Link>
              <Link
                href="/providers"
                className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Find Providers</span>
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <Briefcase className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Categories</span>
              </Link>
              <Link
                href="/industries"
                className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Industries</span>
              </Link>
              <Link
                href="/how-it-works"
                className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                <span>How It Works</span>
              </Link>
              <Link
                href="/for-providers"
                className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>For Providers</span>
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <Link
                href="/for-providers"
                className="block w-full text-center px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/post-project"
                className="block w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-xs transition-all"
              >
                Get Started & Post Project
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearchSubmit} className="flex items-center p-4 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1 mr-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, technologies (e.g. Next.js, SEO, Python)..."
                className="flex-1 text-sm sm:text-base text-slate-900 placeholder-slate-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </form>

            <div className="p-4 max-h-80 overflow-y-auto">
              {searchQuery.trim() ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Matching Services
                    </div>
                    <div className="space-y-1">
                      {SERVICES.filter(
                        (s) =>
                          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
                      )
                        .slice(0, 3)
                        .map((s) => (
                          <Link
                            key={s.id}
                            href={`/services/${s.slug}`}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-900 font-medium"
                          >
                            <span>{s.name}</span>
                            <span className="text-[11px] text-slate-400">{s.categorySlug}</span>
                          </Link>
                        ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Matching Providers
                    </div>
                    <div className="space-y-1">
                      {PROVIDERS.filter(
                        (p) =>
                          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.primaryServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
                      )
                        .slice(0, 3)
                        .map((p) => (
                          <Link
                            key={p.id}
                            href={`/providers/${p.slug}`}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-900 font-medium"
                          >
                            <span>{p.name}</span>
                            <span className="text-[11px] text-slate-400">{p.providerType}</span>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Popular Searches
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Web Development", "UI/UX Design", "SEO", "Custom Software", "Shopify Plus", "AI RAG"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setSearchQuery(tag);
                            router.push(`/providers?search=${encodeURIComponent(tag)}`);
                            setSearchModalOpen(false);
                          }}
                          className="text-xs bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-700 px-2.5 py-1 rounded-lg transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Press <kbd className="font-mono bg-white px-1 py-0.5 border border-slate-200 rounded">Esc</kbd> to close</span>
              <span>Press <kbd className="font-mono bg-white px-1 py-0.5 border border-slate-200 rounded">↵ Enter</kbd> to search</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
