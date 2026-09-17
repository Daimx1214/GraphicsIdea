import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Briefcase,
  Users,
  Search,
  Scale,
  MessageSquare,
  Sparkles,
  FileCheck2,
  Code2,
  UserCheck2,
  Activity,
  Check,
  Building,
  HelpCircle,
} from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "How GraphicsIdea Works | Honest Vetting for Clients & Agencies",
  description:
    "How founders and teams discover and hire verified developers and designers on GraphicsIdea. Direct communication, zero commission markups, and checked code.",
};

const VETTING_STAGES = [
  {
    step: "01",
    title: "Real Business Check",
    subtitle: "Registration, identity, and background",
    icon: FileCheck2,
    description:
      "We verify that every agency and software firm is a legitimate, legally registered commercial entity with confirmed leadership and a clean operational track record. No anonymous accounts or shell companies.",
    deliverables: [
      "Corporate registration and tax ID confirmation",
      "Founder and executive identity verification",
      "Operating history and commercial standing check",
      "Verification of active business presence",
    ],
  },
  {
    step: "02",
    title: "Code & Architecture Audit",
    subtitle: "Real repositories, not Dribbble mockups",
    icon: Code2,
    description:
      "Anyone can put together a flashy slide deck or download an open-source template. We inspect actual production repositories, Git commit hygiene, automated test coverage, and architecture decisions across finished projects.",
    deliverables: [
      "Git commit history and code quality review",
      "Automated test coverage and CI/CD inspection",
      "Security checks for common framework vulnerabilities",
      "Review of database schemas and architectural patterns",
    ],
  },
  {
    step: "03",
    title: "Direct Client Reference Calls",
    subtitle: "Real phone and video conversations",
    icon: UserCheck2,
    description:
      "We speak directly with past clients — founders, CTOs, and product managers — to learn how the team really performs. Did they hit deadlines? How did they react under pressure? Was communication clear and proactive?",
    deliverables: [
      "1-on-1 interviews with past project sponsors",
      "Confirmation of delivery timelines and budget accuracy",
      "Honest assessment of communication and responsiveness",
      "Verification of who actually did the work (no bait-and-switch)",
    ],
  },
  {
    step: "04",
    title: "Ongoing Quality Monitoring",
    subtitle: "Standards that don't expire after launch",
    icon: Activity,
    description:
      "Getting verified isn't a permanent stamp. We track client feedback and response times on active projects. If a team begins delivering sloppy code or ignoring client messages, their badge is revoked immediately.",
    deliverables: [
      "Continuous feedback and review tracking",
      "Prompt response expectations on new inquiries",
      "Direct mediation support if a project hits a snag",
      "Zero tolerance for unapproved subcontractor handoffs",
    ],
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Vetting Rigor & Quality Standards",
    graphicsIdea: "Hands-on audit by real engineers. Code reviews & direct client calls.",
    biddingPlatforms: "No technical vetting. Anyone with an email can bid with fake credentials.",
    big4Consulting: "High-end brand reputation, but projects are frequently handed to fresh graduates.",
    unvettedDirectories: "Pay-to-play. Higher placement goes to whichever agency buys the biggest ad.",
  },
  {
    feature: "Direct Contact with Builders",
    graphicsIdea: "Talk directly to the engineers and designers building your project from day one.",
    biddingPlatforms: "Forced into closed platform chats with heavy pressure to avoid direct contact.",
    big4Consulting: "Shielded behind layers of account directors, partners, and sales reps.",
    unvettedDirectories: "Your contact details get sold as a lead to dozens of cold-calling agencies.",
  },
  {
    feature: "Pricing Transparency & Markups",
    graphicsIdea: "Transparent rates published upfront. $0 platform cut; pay your team directly.",
    biddingPlatforms: "10% to 20% platform cut taken from freelancers, pushing rates higher.",
    big4Consulting: "300% to 500% overhead markups ($250–$600/hr) to cover massive corporate overhead.",
    unvettedDirectories: "Opaque pricing; agencies inflate quotes to recoup what they spent on ads.",
  },
  {
    feature: "Code & IP Ownership",
    graphicsIdea: "100% client IP ownership upon milestone settlement. Direct Git handoffs.",
    biddingPlatforms: "Vague contract templates; disputes can freeze code in platform arbitration.",
    big4Consulting: "Often bundled with proprietary frameworks that lock you into long-term vendor fees.",
    unvettedDirectories: "No standard contract protections or IP assignment guidance provided.",
  },
  {
    feature: "Time to Kickoff",
    graphicsIdea: "24 to 48 hours. Direct proposal review and straightforward scope calls.",
    biddingPlatforms: "3 to 7 days sifting through dozens of low-effort, copy-pasted bot bids.",
    big4Consulting: "6 to 12 weeks of bureaucratic RFP processes, slide decks, and legal approvals.",
    unvettedDirectories: "Endless inbound sales pitches from agencies who purchased your contact lead.",
  },
];

const FAQS = [
  {
    q: "How does GraphicsIdea differ from Upwork, Fiverr, or Guru?",
    a: "Open bidding platforms are built for high-volume, low-cost commodity tasks where clients have to sort through dozens of auto-generated bot bids. GraphicsIdea is built for serious product builds. Every agency, design studio, and senior specialist on our site has had their code, references, and credentials verified before they appear here.",
  },
  {
    q: "Does GraphicsIdea charge a commission on client project payments?",
    a: "No. Unlike legacy freelancing platforms that take 10% to 20% from every invoice, GraphicsIdea takes $0 cut from your project budget. You contract and pay providers directly under your own agreed commercial terms. 100% of your capital goes straight to the people building your software.",
  },
  {
    q: "How do you prevent the 'Bait-and-Switch' agency staffing problem?",
    a: "A common frustration with large agencies is being pitched by seasoned founders, only to have the actual code written by unproven junior interns. We audit squad compositions and require providers to disclose their core team structures. During our reference calls with past clients, we specifically confirm who did the day-to-day work.",
  },
  {
    q: "Can I use GraphicsIdea to hire both agencies and solo senior freelancers?",
    a: "Yes. We list full-service product agencies for turn-key builds, boutique studios for UI/UX, specialized engineering firms for backend and data, and independent senior specialists who can embed right into your sprint team.",
  },
  {
    q: "What happens if a project runs into timeline or quality issues?",
    a: "Because all GraphicsIdea providers are legally verified businesses, standard commercial agreements with clear milestones apply. In addition, our team is available to help mediate if a disagreement arises. Providers who fail to honor their agreed deliverables face immediate removal from the directory.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standardized Breadcrumb */}
        <Breadcrumbs items={[{ label: "How It Works" }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-3 border border-brand-200">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            Transparent Vetting & Direct Collaboration
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How GraphicsIdea works
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A straightforward directory built to eliminate spammy bidding wars, hidden broker markups, and unvetted profiles.
          </p>
        </div>

        {/* Dual Flow: For Clients & For Providers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Client Journey */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                <Briefcase className="w-4 h-4" /> For Founders & Teams
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">How clients hire here</h2>
              <p className="text-xs text-slate-500 mb-8">
                How growing startups and companies find vetted engineering and design partners.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center shrink-0 border border-brand-100">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Browse the directory or post what you need</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Filter by specific tech stacks, hourly rates, team sizes, and industry experience. Or submit a project brief to receive proposals directly from matching verified teams.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center shrink-0 border border-brand-100">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Compare teams side-by-side</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Add up to three teams to our Comparison Drawer to benchmark their client review scores, tech specializations, and audited case studies head-to-head.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center shrink-0 border border-brand-100">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Direct kickoff with 100% IP ownership</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Talk directly with the engineers and designers doing the work. Sign your own contract, set sprint milestones, and keep every single line of code with zero platform cuts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                href="/post-project"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-sm transition-all"
              >
                Tell Us What You Need <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/providers"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-all shadow-sm"
              >
                Browse Directory
              </Link>
            </div>
          </div>

          {/* Provider Journey */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                <Users className="w-4 h-4" /> For Agencies & Senior Pros
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">How providers join</h2>
              <p className="text-xs text-slate-500 mb-8">
                How studios and independent specialists get discovered by funded clients without bidding wars.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-100">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Submit your profile & proof</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fill out our onboarding application with your legal business details, primary tech specializations, live project URLs, and past client references.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-100">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Pass our technical review</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our team verifies your corporate identity, inspects your real GitHub repositories or design systems, and speaks with three of your past clients.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-100">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Connect directly with clients</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Appear in relevant technology and service categories. Qualified founders contact you directly, contract under your terms, and you keep 100% of your earnings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                href="/onboarding"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm transition-all"
              >
                Apply as a Provider <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/for-providers"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-all shadow-sm"
              >
                Provider Benefits
              </Link>
            </div>
          </div>
        </div>

        {/* Section: The 4-Stage Vetting Protocol */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Our vetting framework
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              How we screen every applicant
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Fewer than 10% of applicants pass our technical and reference review. Here is how we separate proven builders from slick marketing agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VETTING_STAGES.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="bg-white rounded-2xl sm:rounded-3xl p-8 border border-slate-200/90 shadow-card hover:border-brand-500 hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">
                          Stage {stage.step}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        Required Step
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">{stage.title}</h3>
                    <div className="text-xs font-semibold text-slate-500 mb-3">{stage.subtitle}</div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 bg-slate-50/50 -mx-8 -mb-8 p-6 rounded-b-3xl">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      What we inspect:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {stage.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Competitor Comparison Matrix */}
        <section className="mb-20 bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Comparison
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why teams choose GraphicsIdea
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              How we compare against open freelance bidding boards, traditional corporate consulting firms, and pay-to-play directories.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider">
                  <th className="py-4 px-4 font-bold text-slate-500 w-1/4">Evaluation Criteria</th>
                  <th className="py-4 px-4 font-extrabold text-brand-600 bg-brand-50/60 rounded-t-xl w-1/4">
                    GraphicsIdea
                  </th>
                  <th className="py-4 px-4 font-semibold text-slate-500 w-1/4">
                    Freelance Bidding Sites (Upwork / Guru)
                  </th>
                  <th className="py-4 px-4 font-semibold text-slate-500 w-1/4">
                    Big 4 & Enterprise Consultancies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-4 font-medium text-brand-900 bg-brand-50/30">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{row.graphicsIdea}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.biddingPlatforms}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.big4Consulting}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Common questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Clear answers about our vetting standards, contracting policies, and platform guarantees.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card"
              >
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-slate-800 shadow-feature">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ready to work with verified talent?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
            Take the risk out of hiring. Browse our directory of audited agencies or tell us what you need built.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/post-project"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
            >
              Tell Us What You Need
            </Link>
            <Link
              href="/providers"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all shadow-sm"
            >
              Browse Verified Teams
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

