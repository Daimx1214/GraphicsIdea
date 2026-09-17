"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Sparkles,
  Layers,
  Code,
  Check,
  Globe,
  Upload,
  User,
  DollarSign,
  MapPin,
  Clock,
  Eye,
} from "lucide-react";
import { CATEGORIES, SERVICES } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProviderOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [accountEmail, setAccountEmail] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [providerType, setProviderType] = useState<string>("Agency");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [tagline, setTagline] = useState("");
  const [bio, setBio] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development Services"]);
  const [selectedTech, setSelectedTech] = useState<string[]>(["React", "Next.js", "TypeScript"]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(["SaaS", "FinTech"]);
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [portfolioOutcome, setPortfolioOutcome] = useState("");
  const [hourlyRate, setHourlyRate] = useState("$95 - $140 / hr");
  const [minBudget, setMinBudget] = useState("$10,000");
  const [pricingModel, setPricingModel] = useState("Dedicated Sprint or Fixed Scope");
  const [location, setLocation] = useState("San Francisco, CA & Remote");
  const [responseTime, setResponseTime] = useState("< 2 hours");

  // Calculate dynamic Profile Completeness score based on fields filled
  const calculateCompleteness = () => {
    let score = 20; // base for starting
    if (accountEmail) score += 10;
    if (companyName && website) score += 15;
    if (tagline && bio) score += 15;
    if (selectedServices.length >= 2) score += 10;
    if (selectedTech.length >= 3) score += 10;
    if (selectedIndustries.length >= 1) score += 5;
    if (portfolioTitle && portfolioOutcome) score += 10;
    if (hourlyRate && minBudget) score += 5;
    return Math.min(score, 100);
  };

  const completenessScore = calculateCompleteness();

  const handleNext = () => {
    if (currentStep < 11) {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "For Providers", href: "/for-providers" },
            { label: "Apply as Provider" },
          ]}
        />

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Provider Application
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Create Your Provider Profile
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Follow our 11-step structured onboarding process to get vetted and listed.
          </p>
        </div>

        {/* Live Profile Completeness Score Card */}
        {!submitted && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-card mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-extrabold text-base shrink-0">
                {completenessScore}%
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Profile Completeness Score
                </div>
                <div className="text-xs text-slate-500">
                  {completenessScore < 70
                    ? "Keep filling in your portfolio and pricing to unlock Verified Status"
                    : "Excellent! Your profile meets our criteria for verified marketplace listing."}
                </div>
              </div>
            </div>

            <div className="w-full sm:w-48 bg-slate-100 h-2.5 rounded-full overflow-hidden shrink-0">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${completenessScore}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Step Indicator */}
        {!submitted && (
          <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-medium">
            <span>Step {currentStep} of 11</span>
            <span className="font-semibold text-slate-900">
              {currentStep === 1 && "1. Account Credentials"}
              {currentStep === 2 && "2. Provider Type"}
              {currentStep === 3 && "3. Basic Information"}
              {currentStep === 4 && "4. Services Offered"}
              {currentStep === 5 && "5. Skills & Technologies"}
              {currentStep === 6 && "6. Target Industries"}
              {currentStep === 7 && "7. Portfolio Showcase"}
              {currentStep === 8 && "8. Pricing & Models"}
              {currentStep === 9 && "9. Location & Availability"}
              {currentStep === 10 && "10. Profile Preview"}
              {currentStep === 11 && "11. Submit for Verification"}
            </span>
          </div>
        )}

        {/* Form Wizard Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
          {!submitted ? (
            <div>
              {/* STEP 1: Account */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Create Provider Account</h2>
                  <p className="text-xs text-slate-500">
                    Your account email will be used for official communications and client proposal notifications.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Official Work / Domain Email
                      </label>
                      <input
                        type="email"
                        required
                        value={accountEmail}
                        onChange={(e) => setAccountEmail(e.target.value)}
                        placeholder="e.g. alex@apexstudio.io"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Create Password
                      </label>
                      <input
                        type="password"
                        required
                        value={accountPassword}
                        onChange={(e) => setAccountPassword(e.target.value)}
                        placeholder="Minimum 8 characters"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Provider Type */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Select Provider Structure</h2>
                  <p className="text-xs text-slate-500">
                    How is your professional entity structured? This determines your directory classification.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      { type: "Agency", desc: "Full-service cross-functional squad (engineers, designers, managers)." },
                      { type: "Studio", desc: "Boutique creative, UI/UX, or specialized technology practice." },
                      { type: "Software Company", desc: "Established software engineering and custom software vendor." },
                      { type: "Freelancer", desc: "Senior independent contractor or solo technical architect." },
                      { type: "Consultant", desc: "High-level strategic advisor or fractional executive." },
                    ].map((item) => (
                      <button
                        key={item.type}
                        type="button"
                        onClick={() => setProviderType(item.type)}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          providerType === item.type
                            ? "border-brand-600 bg-brand-50/50 ring-2 ring-brand-600/20"
                            : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900 mb-1">{item.type}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Basic Information */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Basic Provider Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Company / Professional Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Apex Arc Studio"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://youragency.com"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Positioning Tagline
                      </label>
                      <input
                        type="text"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        placeholder="e.g. High-velocity Next.js & Python engineering for venture-backed SaaS."
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        About & Mission Overview
                      </label>
                      <textarea
                        rows={4}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Describe your engineering philosophy, sprint cadence, and team background..."
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Services */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Services Offered</h2>
                  <p className="text-xs text-slate-500">
                    Select 1 to 4 primary services your team excels at delivering.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((s) => {
                      const isSelected = selectedServices.includes(s.name);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedServices(selectedServices.filter((name) => name !== s.name));
                            } else {
                              setSelectedServices([...selectedServices, s.name]);
                            }
                          }}
                          className={`p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                            isSelected
                              ? "border-brand-600 bg-brand-50 text-brand-900 font-semibold"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <span>{s.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-brand-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Skills / Technologies */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Skills & Technologies</h2>
                  <p className="text-xs text-slate-500">
                    Select the key frameworks, languages, and tools your team uses in production.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
                      "Go", "PostgreSQL", "Supabase", "AWS", "Google Cloud", "Docker",
                      "Kubernetes", "Figma", "Design Systems", "Flutter", "Swift", "Shopify Plus",
                      "WordPress", "Ahrefs", "LangChain", "PyTorch"
                    ].map((tech) => {
                      const isSelected = selectedTech.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedTech(selectedTech.filter((t) => t !== tech));
                            } else {
                              setSelectedTech([...selectedTech, tech]);
                            }
                          }}
                          className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${
                            isSelected
                              ? "bg-brand-600 text-white border-brand-600"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: Industries */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Industries & Domains</h2>
                  <p className="text-xs text-slate-500">
                    Select industries where you have past demonstrable delivery experience.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      "SaaS", "FinTech", "HealthTech", "eCommerce",
                      "Real Estate", "Education", "LegalTech", "Logistics"
                    ].map((ind) => {
                      const isSelected = selectedIndustries.includes(ind);
                      return (
                        <button
                          key={ind}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedIndustries(selectedIndustries.filter((i) => i !== ind));
                            } else {
                              setSelectedIndustries([...selectedIndustries, ind]);
                            }
                          }}
                          className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                            isSelected
                              ? "border-brand-600 bg-brand-50 text-brand-700"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {ind}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 7: Portfolio */}
              {currentStep === 7 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Featured Portfolio Project</h2>
                  <p className="text-xs text-slate-500">
                    Submit at least 1 production project to prove delivery outcomes.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Project Name / Title
                      </label>
                      <input
                        type="text"
                        value={portfolioTitle}
                        onChange={(e) => setPortfolioTitle(e.target.value)}
                        placeholder="e.g. PayStream: B2B Cross-Border Settlement Engine"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Verified Business Outcome / Result
                      </label>
                      <input
                        type="text"
                        value={portfolioOutcome}
                        onChange={(e) => setPortfolioOutcome(e.target.value)}
                        placeholder="e.g. Scaled from 5k to 50k DAU with 99.99% uptime and sub-200ms latency"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 8: Pricing */}
              {currentStep === 8 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Pricing & Engagement Structure</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Hourly Rate Range
                      </label>
                      <input
                        type="text"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                        placeholder="e.g. $95 - $140 / hr"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Minimum Project Budget
                      </label>
                      <input
                        type="text"
                        value={minBudget}
                        onChange={(e) => setMinBudget(e.target.value)}
                        placeholder="e.g. $10,000"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 9: Location / Availability */}
              {currentStep === 9 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Location & Availability</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Location & Timezone
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Austin, TX & Remote (US/EU)"
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Average Response Time
                      </label>
                      <select
                        value={responseTime}
                        onChange={(e) => setResponseTime(e.target.value)}
                        className="w-full text-sm p-3.5 rounded-xl border border-slate-200 bg-slate-50 outline-none"
                      >
                        <option value="< 1 hour">&lt; 1 hour</option>
                        <option value="< 2 hours">&lt; 2 hours</option>
                        <option value="< 4 hours">&lt; 4 hours</option>
                        <option value="Within 24 hours">Within 24 hours</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 10: Profile Preview */}
              {currentStep === 10 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-brand-600" />
                    Marketplace Profile Preview
                  </h2>
                  <p className="text-xs text-slate-500">
                    This is how your provider card will display in search results and directory pages.
                  </p>

                  <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 shadow-sm max-w-md mx-auto">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded bg-slate-200 text-slate-800">
                        {providerType}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5" /> Pending Verification
                      </span>
                    </div>

                    <div className="font-bold text-base text-slate-900 mb-1">
                      {companyName || "Your Company Name"}
                    </div>
                    <p className="text-xs text-slate-600 mb-3">
                      {tagline || "Your positioning tagline will appear here."}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-200 mb-3">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Hourly Rate</span>
                        <span className="font-semibold text-slate-800">{hourlyRate}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Min. Budget</span>
                        <span className="font-semibold text-slate-800">{minBudget}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {selectedTech.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 11: Submit for Review */}
              {currentStep === 11 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h2 className="text-xl font-bold text-slate-900">Submit Application for Review</h2>
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
                    <div className="font-bold text-sm">Your profile is ready for submission!</div>
                    <p>
                      Completeness score: <span className="font-bold">{completenessScore}%</span>.
                      Our editorial team will audit your domain and portfolio within 48 business hours.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Zero subscription fees during beta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Direct client communication via your own email/Slack</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Verified status awarded upon client reference check</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
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

                {currentStep < 11 ? (
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
                    <CheckCircle2 className="w-4 h-4" /> Submit Application
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Application Successfully Submitted!</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying to GraphicsIdea. Your profile for{" "}
                <span className="font-semibold text-slate-900">{companyName || "your entity"}</span> is
                currently in queue with our vetting team.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs max-w-md mx-auto text-left space-y-2">
                <div className="font-bold text-slate-900 mb-1">What Happens Next:</div>
                <div>• Technical audit of your website and portfolio (24-48 hrs)</div>
                <div>• Client reference verification email sent</div>
                <div>• Verified Provider badge issued upon audit approval</div>
              </div>

              <div className="flex justify-center gap-3 pt-4">
                <Link
                  href="/providers"
                  className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs transition-all shadow-sm"
                >
                  Explore Current Directory
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
