import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, ArrowRight, ArrowLeft, ShieldCheck, Briefcase } from "lucide-react";
import { BLOG_POSTS, SERVICES } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | GraphicsIdea`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) => post.relatedServices.includes(s.name));

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Article Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-card mb-12">
          {/* Category & Read Time */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-bold text-brand-600 uppercase tracking-wide">{post.category}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <span>Published {post.publishedDate}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-slate-100">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200/90">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">{post.author.name}</div>
              <div className="text-xs text-slate-500">{post.author.role}</div>
            </div>
          </div>

          {/* Article Summary Box */}
          <div className="p-5 rounded-2xl bg-brand-50/50 border border-brand-100 text-slate-700 text-sm leading-relaxed mb-8 font-medium">
            {post.summary}
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Related Services CTA */}
          {relatedServices.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Explore Related Service Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-brand-500 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-xs text-slate-900 group-hover:text-brand-600">
                        {service.name}
                      </div>
                      <div className="text-[11px] text-slate-500">View vetted providers</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
