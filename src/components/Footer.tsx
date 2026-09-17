import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Lock, ArrowUpRight, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Value Assurance Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong className="text-white">Real Code Checked:</strong> We inspect Git repos and call past clients</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
              <span><strong className="text-white">Upfront Pricing:</strong> Real rates published before discovery calls</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Lock className="w-4 h-4 text-purple-400 shrink-0" />
              <span><strong className="text-white">0% Platform Cut:</strong> Direct contracts and you own 100% of your code</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory (Clean 4-Column Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Platform Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight leading-none">
                  GraphicsIdea
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
                  Verified Directory
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              A hand-checked directory of independent developers, design studios, and software engineering agencies. No bot bids, no hidden markups, and direct access to real builders.
            </p>

            <div className="flex items-center gap-2.5 pt-1 text-slate-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: In-Demand Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800/80">
              Core Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors block py-0.5">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="hover:text-white transition-colors block py-0.5">
                  Custom Software & APIs
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors block py-0.5">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-white transition-colors block py-0.5">
                  UI/UX & Product Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white transition-colors block py-0.5">
                  Technical SEO & Growth
                </Link>
              </li>
              <li>
                <Link href="/services/ai-development" className="hover:text-white transition-colors block py-0.5">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="hover:text-white transition-colors block py-0.5">
                  Cloud Architecture & DevOps
                </Link>
              </li>
              <li className="pt-1.5">
                <Link href="/services" className="text-brand-400 hover:text-brand-300 font-semibold inline-flex items-center gap-1">
                  View All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Discovery & Taxonomy */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800/80">
              Discover & Compare
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/providers" className="hover:text-white transition-colors block py-0.5">
                  Find Verified Providers
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors block py-0.5">
                  Browse by Category
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors block py-0.5">
                  Industry Focus Directories
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-white transition-colors block py-0.5">
                  Technology Stacks
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors block py-0.5">
                  Audited Case Studies
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors block py-0.5">
                  Verified Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors block py-0.5">
                  Vetting & Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Providers, Company & Legal */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800/80">
              Platform & Company
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/onboarding" className="text-emerald-400 hover:text-emerald-300 font-semibold block py-0.5">
                  Become a Provider →
                </Link>
              </li>
              <li>
                <Link href="/for-providers" className="hover:text-white transition-colors block py-0.5">
                  Provider Portal & Log In
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                  About GraphicsIdea
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors block py-0.5">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors block py-0.5">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors block py-0.5">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} GraphicsIdea Inc. All rights reserved. The trusted B2B discovery marketplace.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-slate-400 transition-colors">
              Cookies
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
