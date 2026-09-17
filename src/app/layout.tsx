import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTray from "@/components/ComparisonTray";
import { CompareProvider } from "@/context/CompareContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://graphicsidea.com"),
  title: {
    default: "GraphicsIdea | Verified B2B Multi-Service-Provider Discovery Marketplace",
    template: "%s | GraphicsIdea",
  },
  description:
    "Discover, compare, and hire verified technology agencies, software studios, designers, and digital specialists. Zero bidding wars, audited portfolios, and direct client engagement.",
  keywords: [
    "service marketplace",
    "agency directory",
    "hire software agency",
    "hire web developers",
    "vetted UI UX designers",
    "B2B tech services marketplace",
    "find certified providers",
  ],
  authors: [{ name: "GraphicsIdea Technologies" }],
  creator: "GraphicsIdea",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://graphicsidea.com",
    siteName: "GraphicsIdea",
    title: "GraphicsIdea | Discover & Hire Verified Technology Agencies",
    description:
      "The independent B2B directory to compare vetted agencies, software studios, and specialists by real portfolios, verified reviews, and transparent pricing.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "GraphicsIdea Marketplace Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GraphicsIdea | Verified B2B Multi-Service Provider Marketplace",
    description: "Compare vetted agencies, software studios, and specialists by real work and transparent rates.",
    creator: "@graphicsidea",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GraphicsIdea",
    url: "https://graphicsidea.com",
    description:
      "A premium B2B multi-service-provider discovery marketplace connecting companies with verified agencies, software developers, and product studios.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://graphicsidea.com/providers?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GraphicsIdea",
    url: "https://graphicsidea.com",
    logo: "https://graphicsidea.com/logo.png",
    sameAs: [
      "https://twitter.com/graphicsidea",
      "https://linkedin.com/company/graphicsidea",
      "https://github.com/graphicsidea",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <CompareProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <ComparisonTray />
          <Footer />
        </CompareProvider>
      </body>
    </html>
  );
}
