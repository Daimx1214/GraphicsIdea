"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
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
  Lock,
  PhoneCall,
  Send,
  Rocket,
  Terminal,
  Smartphone,
  Check,
  HelpCircle,
  ArrowUpRight,
  Clock,
  DollarSign,
  Workflow,
  Laptop,
  Award,
  Globe,
  Zap,
  CheckSquare,
  Layers3,
  Server,
  Database,
  Cloud,
  Layout,
  Calendar,
} from "lucide-react";
import { CATEGORIES, SERVICES, PROVIDERS, GENERAL_FAQS } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function HomePage() {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTechTab, setActiveTechTab] = useState<string>("frontend");

  // Multi-step Interactive Project Planner State ("then un sa poucha ga")
  const [plannerStep, setPlannerStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    serviceType: "Web Development",
    projectStage: "Brand New Idea",
    timeline: "1-3 months",
    budgetRange: "$15,000 - $30,000",
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Case Studies with high-resolution images
  const featuredCaseStudies = [
    {
      id: "cs-1",
      slug: "paystream-fintech-scale",
      title: "PayStream Fintech — B2B Payment Gateway & Reconciliation Engine",
      client: "PayStream Inc.",
      industry: "FinTech & Banking",
      summary: "Engineered a high-throughput multi-currency payment settlement platform processing $12M+ monthly transactions with zero downtime.",
      metric: "+340% Transaction Growth",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe API"],
    },
    {
      id: "cs-2",
      slug: "datamesh-ux-transformation",
      title: "DataMesh AI — Enterprise Analytics Platform & Figma Design System",
      client: "DataMesh AI",
      industry: "SaaS & Cloud AI",
      summary: "Designed a tokenized Figma UI/UX design system and built an interactive AI data dashboard reducing client onboarding time by 65%.",
      metric: "$4.2M Series A Raised",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      tech: ["Figma", "React", "Python", "FastAPI", "Tailwind CSS"],
    },
    {
      id: "cs-3",
      slug: "cloudsec-organic-pipeline",
      title: "HealthHub Telehealth — Native Mobile iOS & Android Ecosystem",
      client: "HealthHub Care",
      industry: "Healthcare & MedTech",
      summary: "Built an HIPAA-compliant React Native mobile application for instant virtual consultations, lab report sync, and doctor scheduling.",
      metric: "50,000+ Active Patients",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      tech: ["React Native", "TypeScript", "Firebase", "WebRTC", "AWS"],
    },
  ];

  // Verified Client Testimonials
  const agencyReviews = [
    {
      id: "rev-1",
      clientName: "Marcus Vance",
      clientRole: "CTO & Co-Founder",
      companyName: "PayStream Global",
      comment: "GraphicsIdea delivered our Next.js web application and payment backend 2 weeks ahead of schedule. Their senior developers write immaculate code and their daily async Slack updates kept us completely in sync.",
      rating: 5,
    },
    {
      id: "rev-2",
      clientName: "Elena Rostova",
      clientRole: "Head of Product",
      companyName: "DataMesh AI",
      comment: "The Figma design system and React frontend crafted by GraphicsIdea transformed our product. Our user retention jumped by 42% right after the relaunch. They are by far the most reliable agency we've worked with.",
      rating: 5,
    },
    {
      id: "rev-3",
      clientName: "David Sterling",
      clientRole: "VP of Engineering",
      companyName: "HealthHub Care",
      comment: "Finding engineers who understand HIPAA compliance and smooth mobile UX is rare. GraphicsIdea built our cross-platform React Native app with total precision and 100% IP ownership.",
      rating: 5,
    },
  ];

  // Tech Stack Matrix Data
  const techStackData: Record<string, Array<{ name: string; tag: string }>> = {
    frontend: [
      { name: "Next.js 14", tag: "App Router & SSR" },
      { name: "React 18", tag: "UI Components" },
      { name: "TypeScript", tag: "Strict Type Safety" },
      { name: "Tailwind CSS", tag: "Design Systems" },
      { name: "GraphQL / REST", tag: "Data Fetching" },
      { name: "Redux / Zustand", tag: "State Management" },
    ],
    backend: [
      { name: "Node.js", tag: "Event-Driven Async" },
      { name: "Python / FastAPI", tag: "High-Performance APIs" },
      { name: "PostgreSQL", tag: "Relational Schemas" },
      { name: "Redis", tag: "In-Memory Caching" },
      { name: "Go (Golang)", tag: "Microservices" },
      { name: "Prisma ORM", tag: "Database Migrations" },
    ],
    mobile: [
      { name: "React Native", tag: "iOS & Android" },
      { name: "Flutter / Dart", tag: "Native Performance" },
      { name: "Swift (iOS)", tag: "Apple Native" },
      { name: "Kotlin (Android)", tag: "Android Native" },
      { name: "SQLite / Watermelon", tag: "Offline Sync" },
      { name: "Firebase / Push", tag: "Notifications" },
    ],
    ai: [
      { name: "OpenAI GPT-4o", tag: "LLM Engineering" },
      { name: "LangChain & LlamaIndex", tag: "RAG Pipelines" },
      { name: "Pinecone / Weaviate", tag: "Vector DB Search" },
      { name: "PyTorch", tag: "Model Fine-Tuning" },
      { name: "FastAPI AI Servers", tag: "Model Inference" },
      { name: "Whisper & Vision", tag: "Multimodal AI" },
    ],
    cloud: [
      { name: "Amazon Web Services", tag: "Cloud Infrastructure" },
      { name: "Vercel", tag: "Edge & Serverless" },
      { name: "Docker & K8s", tag: "Containerization" },
      { name: "GitHub Actions", tag: "CI/CD Pipelines" },
      { name: "Cloudflare", tag: "CDN & Edge Security" },
      { name: "Datadog / Sentry", tag: "Monitoring & Logs" },
    ],
    design: [
      { name: "Figma", tag: "Design Systems & UI" },
      { name: "Framer", tag: "Interactive Prototypes" },
      { name: "Tokens Studio", tag: "Design Tokens" },
      { name: "Maze / UserTesting", tag: "Usability Audits" },
      { name: "Adobe Creative Cloud", tag: "Visual Assets" },
      { name: "Lottie", tag: "Vector Animations" },
    ],
  };

  // Core Agency Services Definition
  const agencyServices = [
    {
      id: "web-dev",
      title: "Web Application Engineering",
      slug: "web-development",
      category: "development",
      icon: <Code className="w-6 h-6 text-brand-600" />,
      description: "Production-ready, highly responsive web apps built with Next.js, React, Node.js, and TypeScript.",
      deliverables: ["Next.js App Router Architecture", "Custom GraphQL & REST APIs", "Database Schema & PostgreSQL", "Auth & RBAC Security"],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      slug: "mobile-app-development",
      category: "development",
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      description: "Native-quality iOS & Android mobile applications engineered with React Native & Flutter for seamless UX.",
      deliverables: ["Cross-Platform iOS & Android", "Offline Data Sync & SQLite", "Push Notifications & Deep Linking", "App Store & Play Store Publishing"],
      tech: ["React Native", "Flutter", "iOS Swift", "Android Kotlin", "Firebase"],
    },
    {
      id: "ui-ux",
      title: "Product UI/UX & Design Systems",
      slug: "ui-ux-design",
      category: "design",
      icon: <Palette className="w-6 h-6 text-amber-600" />,
      description: "High-converting user interfaces and tokenized Figma design systems tailored for user engagement.",
      deliverables: ["Figma Design Systems & Tokens", "Interactive UX Prototypes", "Wireframes & User Journey Maps", "Conversion Rate Optimization"],
      tech: ["Figma", "Framer", "Design Tokens", "Prototyping", "User Research"],
    },
    {
      id: "software-ai",
      title: "Custom Software & AI Solutions",
      slug: "software-development",
      category: "ai-automation",
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      description: "Scalable backend microservices, intelligent AI agents, RAG pipelines, and automated business workflows.",
      deliverables: ["LLM & OpenAI API Integration", "RAG & Vector Database Search", "Custom API & Microservices", "High-Throughput Data Engines"],
      tech: ["Python", "FastAPI", "OpenAI API", "Pinecone", "Docker"],
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Storefront Engineering",
      slug: "shopify-development",
      category: "development",
      icon: <Laptop className="w-6 h-6 text-rose-600" />,
      description: "Custom Shopify Plus storefronts and headless e-commerce builds optimized for sub-second mobile checkout speed.",
      deliverables: ["Custom Shopify Liquid Themes", "Headless Next.js Storefronts", "Payment Gateway & ERP Sync", "Checkout Customizations"],
      tech: ["Shopify Plus", "Liquid", "Next.js Storefront", "Stripe API"],
    },
    {
      id: "seo-growth",
      title: "Technical SEO & Growth Strategy",
      slug: "seo",
      category: "marketing",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      description: "Data-driven organic search architecture, programmatic SEO engines, and conversion funnel optimization.",
      deliverables: ["Programmatic Content Architecture", "Core Web Vitals Speed Optimization", "Schema Markup & Indexing", "Lead Conversion Tracking"],
      tech: ["Ahrefs", "GA4", "Search Console", "Programmatic SEO"],
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? agencyServices 
    : agencyServices.filter(s => s.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
      {/* =========================================================================
          SECTION 1: HERO (DRIBBBLE-LEVEL MODERN GLASSMORPHISM)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/90 to-slate-50 border-b border-slate-200/60 pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Subtle Ambient Radial Glowing Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              We engineer digital products that <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">dominate markets.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              From Next.js web applications and React Native mobile apps to custom AI platforms, GraphicsIdea turns complex business requirements into elegant, high-converting software.
            </p>

            {/* Dual Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all group"
              >
                <Sparkles className="w-5 h-5 text-brand-200 group-hover:rotate-12 transition-transform" />
                <span>Estimate Your Project Scope</span>
              </a>
              <Button
                href="/case-studies"
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight className="w-4.5 h-4.5" />}
              >
                View Case Studies & Work
              </Button>
            </div>

            {/* Key Trust Signals Bar */}
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-slate-600 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-xs max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Full IP & Source Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Senior Full-Stack Architects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bi-Weekly Staging Builds</span>
              </div>
            </div>
          </div>

          {/* Agency Impact Metrics Bar */}
          <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">150+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Digital Products Shipped</div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">$50M+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Client Revenue Generated</div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">4.95 / 5</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Client Satisfaction Score</div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">99.4%</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">On-Time Sprint Delivery</div>
            </div>
          </div>

          {/* Tech Partners / Stack Strip */}
          <div className="mt-12 text-center">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Technologies We Master & Build With
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-slate-600">
              <span className="hover:text-slate-900 transition-colors">Next.js 14</span>
              <span className="hover:text-slate-900 transition-colors">React & React Native</span>
              <span className="hover:text-slate-900 transition-colors">TypeScript</span>
              <span className="hover:text-slate-900 transition-colors">Python & FastAPI</span>
              <span className="hover:text-slate-900 transition-colors">OpenAI & LangChain</span>
              <span className="hover:text-slate-900 transition-colors">AWS Cloud</span>
              <span className="hover:text-slate-900 transition-colors">Figma Design Tokens</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SERVICES SHOWCASE ("phalaa hum apni services show krway ga")
      ========================================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Our Core Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Everything you need to launch & scale
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                We handle the complete product development lifecycle — from UX wireframing and architecture to full-stack engineering and cloud DevOps.
              </p>
            </div>

            {/* Service Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Services" },
                { id: "development", label: "Engineering" },
                { id: "design", label: "UI/UX Design" },
                { id: "ai-automation", label: "AI & Cloud" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    activeCategory === tab.id
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80 hover:border-brand-400 hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-2xs mb-6 group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-200/60 pt-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Included Deliverables
                    </div>
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-semibold bg-white text-slate-700 rounded-lg border border-slate-200/80 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 group/link"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTERACTIVE TECH STACK SHOWCASE
      ========================================================================= */}
      <section className="py-20 md:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2">
              Engineering Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Modern Tech Matrix
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              We leverage production-proven frameworks and tools to build fast, secure, and maintainable software systems.
            </p>
          </div>

          {/* Tech Matrix Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "frontend", label: "Frontend", icon: <Layout className="w-3.5 h-3.5" /> },
              { id: "backend", label: "Backend & DB", icon: <Database className="w-3.5 h-3.5" /> },
              { id: "mobile", label: "Mobile Apps", icon: <Smartphone className="w-3.5 h-3.5" /> },
              { id: "ai", label: "AI & Data", icon: <Cpu className="w-3.5 h-3.5" /> },
              { id: "cloud", label: "Cloud & DevOps", icon: <Cloud className="w-3.5 h-3.5" /> },
              { id: "design", label: "Design Systems", icon: <Palette className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTechTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTechTab === tab.id
                    ? "bg-brand-600 text-white shadow-md ring-1 ring-brand-400"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tech Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {techStackData[activeTechTab]?.map((tech) => (
              <div
                key={tech.name}
                className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/80 hover:border-brand-500/80 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-400 shrink-0"></span>
                  <div>
                    <div className="text-sm font-bold text-white">{tech.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{tech.tag}</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                  Expert
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURED PORTFOLIO & CASE STUDIES
      ========================================================================= */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                Our Work in Production
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Case Studies & Client ROI
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-lg backdrop-blur-sm">
                      {cs.industry}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-brand-600 font-semibold mb-2">
                      Client: {cs.client}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3">
                      {cs.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {cs.summary}
                    </p>

                    {/* Metric Highlight */}
                    <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-brand-600 shrink-0" />
                      <div>
                        <span className="text-[11px] text-brand-700 block font-medium">Primary Outcome:</span>
                        <strong className="text-xs font-bold text-brand-900">{cs.metric}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-auto">
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {cs.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    <span>Read Technical Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR 4-STEP ENGINEERING METHODOLOGY
      ========================================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Predictable 4-step delivery lifecycle
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We eliminate guesswork with transparent milestone sprints, bi-weekly code builds, and continuous communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-brand-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-extrabold text-sm flex items-center justify-center mb-5 shadow-xs">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery & Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We analyze technical requirements, model relational database schemas, format API contracts, and map out sprint milestones.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold text-sm flex items-center justify-center mb-5 shadow-xs">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">UI/UX & Prototyping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We build tokenized Figma design systems, interactive UX prototypes, and conversion-focused wireframes for team review.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-amber-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-extrabold text-sm flex items-center justify-center mb-5 shadow-xs">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agile Sprints & QA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senior engineers write clean, typed code backed by automated test suites, bi-weekly staging deploys, and Loom walkthroughs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center mb-5 shadow-xs">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Launch & Scaling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-downtime deployment, post-launch monitoring, 100% IP transfer, and optional ongoing retainer maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INTERACTIVE PROJECT PLANNER & INQUIRY ("then un sa poucha ga")
      ========================================================================= */}
      <section id="estimator" className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.18),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold mb-4">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Interactive Scope & Budget Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Tell us about your project
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Select your parameters to calculate an estimated scope breakdown and request a custom proposal from our software architects.
            </p>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Inquiry Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name || "there"}</strong>! Our lead software architect will review your <span className="text-brand-400 font-bold">{formData.serviceType}</span> requirements and reach out within 4 business hours with a custom proposal.
                </p>
                <div className="bg-slate-800/80 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-2 border border-slate-700">
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Budget:</span>
                    <strong className="text-white">{formData.budgetRange}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Target Timeline:</span>
                    <strong className="text-white">{formData.timeline}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Project Stage:</span>
                    <strong className="text-white">{formData.projectStage}</strong>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setPlannerStep(1);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Book Discovery Call Now</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                {/* Progress Indicators */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 text-xs">
                  <div className={`font-semibold flex items-center gap-2 ${plannerStep >= 1 ? "text-brand-400" : "text-slate-500"}`}>
                    <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-[11px]">1</span>
                    <span className="hidden sm:inline">Service</span>
                  </div>
                  <div className="w-8 h-px bg-slate-800 sm:w-16" />
                  <div className={`font-semibold flex items-center gap-2 ${plannerStep >= 2 ? "text-brand-400" : "text-slate-500"}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${plannerStep >= 2 ? "bg-brand-600 text-white" : "bg-slate-800 text-slate-400"}`}>2</span>
                    <span className="hidden sm:inline">Stage & Timeline</span>
                  </div>
                  <div className="w-8 h-px bg-slate-800 sm:w-16" />
                  <div className={`font-semibold flex items-center gap-2 ${plannerStep >= 3 ? "text-brand-400" : "text-slate-500"}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${plannerStep >= 3 ? "bg-brand-600 text-white" : "bg-slate-800 text-slate-400"}`}>3</span>
                    <span className="hidden sm:inline">Budget & Contact</span>
                  </div>
                </div>

                {/* STEP 1: SERVICE TYPE */}
                {plannerStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h3 className="text-lg font-bold text-white mb-4">
                      1. What service or project do you need built?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        { title: "Web Development", desc: "Next.js, React & full-stack web apps" },
                        { title: "Mobile App", desc: "iOS & Android React Native / Flutter apps" },
                        { title: "UI/UX & Product Design", desc: "Figma design systems & wireframes" },
                        { title: "Custom Software & AI", desc: "Python, FastAPI, OpenAI & cloud backends" },
                        { title: "E-Commerce Storefront", desc: "Shopify Plus custom liquid or headless" },
                        { title: "Full Product MVP", desc: "End-to-end design & engineering sprint" },
                      ].map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: item.title })}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            formData.serviceType === item.title
                              ? "bg-brand-600/20 border-brand-500 text-white shadow-md ring-1 ring-brand-500"
                              : "bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                          }`}
                        >
                          <div className="text-sm font-bold">{item.title}</div>
                          <div className="text-[11px] text-slate-400 mt-1">{item.desc}</div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setPlannerStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors"
                      >
                        <span>Next: Stage & Timeline</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: STAGE & TIMELINE */}
                {plannerStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h3 className="text-lg font-bold text-white mb-4">
                      2. What is your project stage & target timeline?
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Project Stage:</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Brand New Idea (Starting from scratch)",
                          "Figma Designs Ready (Need engineering)",
                          "Rebuilding Existing App (Codebase update)",
                          "Adding New Features & AI Modules",
                        ].map((stage) => (
                          <button
                            key={stage}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectStage: stage })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.projectStage === stage
                                ? "bg-brand-600/20 border-brand-500 text-white ring-1 ring-brand-500"
                                : "bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800"
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Target Launch Timeline:</label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Urgent (< 4 weeks)", "1-3 months", "3+ months"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                              formData.timeline === t
                                ? "bg-brand-600/20 border-brand-500 text-white ring-1 ring-brand-500"
                                : "bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setPlannerStep(1)}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlannerStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors"
                      >
                        <span>Next: Budget & Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: BUDGET & CONTACT DETAILS */}
                {plannerStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <h3 className="text-lg font-bold text-white mb-4">
                      3. Budget range & contact info
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Estimated Budget Range:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["$5k - $15k", "$15k - $30k", "$30k - $60k", "$60k+"].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetRange: b })}
                            className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                              formData.budgetRange === b
                                ? "bg-brand-600/20 border-brand-500 text-white ring-1 ring-brand-500"
                                : "bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Project Brief / Key Requirements</label>
                      <textarea
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us a few details about what you want to build or your main goals..."
                        className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                      />
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setPlannerStep(2)}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Request Custom Proposal</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: AGENCY TRUST & REVIEWS
      ========================================================================= */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Verified Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by founders & product leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {agencyReviews.map((rev, idx) => (
              <div
                key={rev.id || idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(Math.floor(rev.rating || 5))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{rev.clientName}</div>
                    <div className="text-slate-500">{rev.clientRole}, {rev.companyName}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                    Verified Work
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Agency Badges Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-200/80 text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Clutch Top Rated Agency 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>AWS Certified Solutions Architects</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>ISO 27001 Security Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: AGENCY FAQS
      ========================================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Got questions? We have clear answers.
            </h2>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-brand-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FINAL CALL TO ACTION (Floating Luxury Glass Studio Card)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
        {/* Ambient Glowing Background Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-600/15 via-purple-600/15 to-cyan-500/15 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl border border-slate-800/90 shadow-2xl p-8 sm:p-14 text-center relative overflow-hidden group">
            {/* Top Animated Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-brand-500 to-purple-500"></div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Ready to turn your vision into an{" "}
              <span className="bg-gradient-to-r from-brand-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                enterprise product?
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a 30-minute technical discovery session with our Principal Architect or use our interactive estimator for an exact fixed-fee quotation within 4 hours.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link
                href="/post-project"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start Scope & Cost Estimator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-white font-bold text-sm sm:text-base backdrop-blur-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-brand-400" />
                <span>Book Discovery Call</span>
              </Link>
            </div>

            {/* Feature Guarantee Micro-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left pt-8 border-t border-slate-800/80">
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Clean Architecture</div>
                  <div className="text-[11px] text-slate-400">Next.js & Cloud Code</div>
                </div>
              </div>
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">100% IP Ownership</div>
                  <div className="text-[11px] text-slate-400">All Repos & Assets</div>
                </div>
              </div>
              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <Zap className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Transparent Sprints</div>
                  <div className="text-[11px] text-slate-400">Daily Slack Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
