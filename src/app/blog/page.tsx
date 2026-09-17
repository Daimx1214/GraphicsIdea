import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Clock, BookOpen, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Engineering Insights & Product Strategy | GraphicsIdea Blog",
  description:
    "Authoritative guides on modern web development, AI architecture, digital transformation, and scaling custom software products.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Blog & Guides" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Editorial & Buyer Frameworks
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            B2B Hiring Guides & Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Written for CTOs, product managers, and business founders. Real actionable advice on
            evaluating engineering agencies, scoping software budgets, and mitigating delivery risks.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-card hover:shadow-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-100">
                  <span className="font-semibold text-brand-600 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mb-3 hover:text-brand-600 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200/90">
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                    <div className="text-[10px] text-slate-400">{post.publishedDate}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
