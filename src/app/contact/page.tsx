"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, CheckCircle2, MessageSquare, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Client Inquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Contact" }]} />

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Get in touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            We&apos;re here to help
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Have a question about how we vet teams, need matching advice for your project, or want to apply as a provider? Drop us a note and a real human will reply promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details & SLA */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-600 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">General Questions</div>
                  <div className="text-slate-600">hello@graphicsidea.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Vetting & Reviews</div>
                  <div className="text-slate-600">vetting@graphicsidea.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Typical Reply Time</div>
                  <div className="text-slate-600">Usually within 2 to 4 business hours</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card text-xs">
              <div className="font-bold text-slate-900 mb-2">Frequently Asked Questions</div>
              <p className="text-slate-500 mb-3">
                Find answers to common questions about client discovery and provider onboarding.
              </p>
              <Link href="/faq" className="font-semibold text-brand-600 hover:underline">
                Visit Help Center & FAQ →
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Sterling"
                    className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@company.com"
                    className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Inquiry Nature
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                  >
                    <option value="Client Inquiry">Client Inquiry / Help Finding Providers</option>
                    <option value="Provider Support">Provider Verification & Profile Support</option>
                    <option value="Enterprise Advisory">Enterprise Custom Managed Matching</option>
                    <option value="Partnership">Media & Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can our advisory team assist you?"
                    className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none leading-relaxed transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-sm transition-all"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Message Received</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold">{name}</span>. A GraphicsIdea advisor
                  will reply to <span className="font-semibold">{email}</span> within 2-4 business hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
