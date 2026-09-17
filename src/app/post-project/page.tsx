"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building2,
  DollarSign,
  Calendar,
  Sparkles,
  Layers,
  Code,
  Check,
} from "lucide-react";
import { CATEGORIES, SERVICES, PROVIDERS } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PostProjectPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [projectGoal, setProjectGoal] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("development");
  const [selectedService, setSelectedService] = useState("web-development");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [preferredTech, setPreferredTech] = useState<string[]>([]);
  const [budgetTier, setBudgetTier] = useState("$15k - $30k");
  const [timeline, setTimeline] = useState("Within 2-4 weeks");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [companyRole, setCompanyRole] = useState("");

  const techOptions = ["React / Next.js", "Python / FastAPI", "Node.js", "Flutter", "Figma UI/UX", "SEO Growth", "AWS Cloud", "Shopify Plus", "AI RAG / LLM"];

  const handleTechToggle = (tech: string) => {
    if (preferredTech.includes(tech)) {
      setPreferredTech(preferredTech.filter((t) => t !== tech));
    } else {
      setPreferredTech([...preferredTech, tech]);
    }
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "Scope & Estimator Intake" }]} />

        {/* Top Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Start Your Engineering Project
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Complete this 7-step intake to get a technical roadmap, timeline, and exact fixed-fee quotation from GraphicsIdea.
          </p>
        </div>

        {/* Multi-Step Progress Indicator */}
        {!submitted && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Step {currentStep} of 7</span>
              <span>
                {currentStep === 1 && "1. Project Objective"}
                {currentStep === 2 && "2. Service Selection"}
                {currentStep === 3 && "3. Scope & Details"}
                {currentStep === 4 && "4. Target Budget"}
                {currentStep === 5 && "5. Desired Timeline"}
                {currentStep === 6 && "6. Contact Information"}
                {currentStep === 7 && "7. Review & Submit"}
              </span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-brand-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 7) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Wizard Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
          {!submitted ? (
            <div>
              {/* STEP 1: What do you need? */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">What is the primary goal of your project?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      {
                        id: "mvp",
                        label: "Build an MVP from Scratch",
                        desc: "Turn an idea or wireframe into a functional production product.",
                      },
                      {
                        id: "redesign",
                        label: "Modernize or Redesign Existing Software",
                        desc: "Upgrade an existing codebase, UI/UX architecture, or speed.",
                      },
                      {
                        id: "augmentation",
                        label: "Dedicated Team Augmentation",
                        desc: "Embed senior engineers, designers, or architects into your team.",
                      },
                      {
                        id: "consulting",
                        label: "Technical Audit & Compliance",
                        desc: "Architecture review, SOC 2/HIPAA prep, or cloud cost optimization.",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setProjectGoal(opt.label)}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          projectGoal === opt.label
                            ? "border-brand-600 bg-brand-50/50 ring-2 ring-brand-600/20"
                            : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900 mb-1">{opt.label}</div>
                        <div className="text-xs text-slate-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Choose service/category */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Choose Service Category & Capability</h2>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.slug}
                          type="button"
                          onClick={() => setSelectedCategory(cat.slug)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                            selectedCategory === cat.slug
                              ? "border-brand-600 bg-brand-50 text-brand-700"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Specific Service
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES.filter((s) => s.categorySlug === selectedCategory).map((service) => (
                        <button
                          key={service.slug}
                          type="button"
                          onClick={() => setSelectedService(service.slug)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all ${
                            selectedService === service.slug
                              ? "border-brand-600 bg-brand-50 text-brand-900 font-semibold"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Describe project */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Describe Your Project Scope</h2>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Title
                    </label>
                    <input
                      type="text"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      placeholder="e.g. B2B SaaS Customer Portal in Next.js & Python"
                      className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Detailed Project Overview
                    </label>
                    <textarea
                      rows={5}
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Describe the problem, target audience, core features needed, or attach link to Figma/specs..."
                      className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Technologies (Optional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {techOptions.map((tech) => (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => handleTechToggle(tech)}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-colors ${
                            preferredTech.includes(tech)
                              ? "bg-brand-600 text-white border-brand-600"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Budget */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">What is your expected project budget?</h2>
                  <p className="text-xs text-slate-500">
                    Transparent budgets help GraphicsIdea solutions architects design appropriate tech stacks and delivery milestones.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      { range: "< $10,000", desc: "Targeted MVP, key feature build, or UX redesign" },
                      { range: "$10,000 - $25,000", desc: "Standard custom application or Shopify Plus build" },
                      { range: "$25,000 - $50,000", desc: "Full-scale platform, complex SaaS architecture" },
                      { range: "$50,000 - $100,000+", desc: "Enterprise scale, strict compliance, multi-squad build" },
                    ].map((tier) => (
                      <button
                        key={tier.range}
                        type="button"
                        onClick={() => setBudgetTier(tier.range)}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          budgetTier === tier.range
                            ? "border-brand-600 bg-brand-50/50 ring-2 ring-brand-600/20"
                            : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                        }`}
                      >
                        <div className="font-bold text-base text-slate-900 mb-1">{tier.range}</div>
                        <div className="text-xs text-slate-500">{tier.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Timeline */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">When do you need the project to start?</h2>
                  <div className="space-y-3">
                    {[
                      { time: "Immediately (Within 1-2 weeks)", desc: "Ready to review GraphicsIdea proposal and begin sprint 1." },
                      { time: "Within 1 month", desc: "Finalizing internal budget or wireframes." },
                      { time: "1 to 3 months", desc: "Planning phase for next quarter." },
                      { time: "Flexible / Exploring", desc: "Gathering estimates and technical architecture guidance." },
                    ].map((opt) => (
                      <button
                        key={opt.time}
                        type="button"
                        onClick={() => setTimeline(opt.time)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                          timeline === opt.time
                            ? "border-brand-600 bg-brand-50 text-brand-900 font-semibold"
                            : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold">{opt.time}</div>
                          <div className="text-xs text-slate-500">{opt.desc}</div>
                        </div>
                        {timeline === opt.time && <Check className="w-4 h-4 text-brand-600" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 6: Contact details */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Your Contact & Company Details</h2>
                  <p className="text-xs text-slate-500">
                    Your details are strictly confidential under GraphicsIdea standard NDA policy. Zero spam.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Sarah Mitchell"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyname(e.target.value)}
                        placeholder="e.g. Helix Analytics"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Role
                      </label>
                      <input
                        type="text"
                        value={companyRole}
                        onChange={(e) => setCompanyRole(e.target.value)}
                        placeholder="e.g. VP of Product / Founder"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: Review & Submit */}
              {currentStep === 7 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Review Project Summary Before Submitting</h2>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 text-xs">
                    <div className="flex justify-between pb-3 border-b border-slate-200">
                      <span className="text-slate-500">Primary Goal:</span>
                      <span className="font-semibold text-slate-900">{projectGoal || "Custom Application Build"}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-slate-200">
                      <span className="text-slate-500">Service Category:</span>
                      <span className="font-semibold text-slate-900">{selectedCategory} / {selectedService}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-slate-200">
                      <span className="text-slate-500">Budget Range:</span>
                      <span className="font-semibold text-slate-900">{budgetTier}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-slate-200">
                      <span className="text-slate-500">Timeline:</span>
                      <span className="font-semibold text-slate-900">{timeline}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-slate-200">
                      <span className="text-slate-500">Contact:</span>
                      <span className="font-semibold text-slate-900">
                        {contactName || "Client"} ({contactEmail || "email provided"})
                      </span>
                    </div>
                    {projectTitle && (
                      <div>
                        <span className="text-slate-500 block mb-1">Project Brief:</span>
                        <p className="font-medium text-slate-800 bg-white p-3 rounded-lg border border-slate-200">
                          {projectTitle}
                          {projectDescription && ` - ${projectDescription}`}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-xs text-emerald-800">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">What happens next?</span>
                      <p className="mt-0.5">
                        Your intake will be directly reviewed by a GraphicsIdea Principal Architect. You will receive a full technical estimate and interactive project breakdown within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Wizard Nav Controls */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 7 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 px-6 py-2.5 rounded-xl shadow-sm transition-all"
                  >
                    Continue <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 px-7 py-3 rounded-xl shadow-md transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Submit Intake & Get Estimate
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Submission Confirmation Screen */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Scope Intake Submitted!</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{contactName || "partner"}</span>.
                GraphicsIdea senior engineering team is reviewing your project requirements for <span className="font-semibold text-brand-600">{selectedService}</span>.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs max-w-md mx-auto text-left space-y-2">
                <div className="font-bold text-slate-900 mb-1">Confirmation Details:</div>
                <div>• Assigned Team: GraphicsIdea Senior Solutions Architect</div>
                <div>• Turnaround: Formal scope proposal within 24 hours</div>
                <div>• Delivery Email: Sent directly to {contactEmail || "your email"}</div>
              </div>

              <div className="flex justify-center gap-3 pt-4">
                <Link
                  href="/case-studies"
                  className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs transition-all shadow-sm"
                >
                  Explore Our Work
                </Link>
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold text-xs transition-all shadow-sm"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
