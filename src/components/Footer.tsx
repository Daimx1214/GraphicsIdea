import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Lock, ArrowUpRight, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      {/* Main Footer Directory (Clean 4-Column Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Platform Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8.5 h-8.5 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight leading-none">
                  GraphicsIdea
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-brand-400 uppercase mt-0.5">
                  Digital Agency & Tech Studio
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Full-service web development, custom software engineering, and mobile app studio. We turn ambitious ideas into scalable, high-converting digital products.
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
              Agency Services
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
                <Link href="/services/ai-development" className="hover:text-white transition-colors block py-0.5">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white transition-colors block py-0.5">
                  Technical SEO & Growth
                </Link>
              </li>
              <li className="pt-1.5">
                <Link href="/services" className="text-brand-400 hover:text-brand-300 font-semibold inline-flex items-center gap-1">
                  View All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Work & Process */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800/80">
              Portfolio & Process
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors block py-0.5">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors block py-0.5">
                  Our Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors block py-0.5">
                  Specialized Craft Areas
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors block py-0.5">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-white transition-colors block py-0.5">
                  Tech Stack Capabilities
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors block py-0.5">
                  Client FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Agency Company & Project CTA */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800/80">
              Start Your Project
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/contact" className="text-brand-400 hover:text-brand-300 font-semibold block py-0.5">
                  Book a Discovery Call →
                </Link>
              </li>
              <li>
                <Link href="/post-project" className="text-emerald-400 hover:text-emerald-300 font-semibold block py-0.5">
                  Get Instant Scope Estimate →
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                  About GraphicsIdea Agency
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
            © {new Date().getFullYear()} GraphicsIdea Digital Agency. All rights reserved. Premium Product Design & Engineering.
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
          </div>
        </div>
      </div>
    </footer>
  );
}
