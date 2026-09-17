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
    default: "GraphicsIdea | Full-Service Digital Product Agency & Engineering Studio",
    template: "%s | GraphicsIdea Agency",
  },
  description:
    "GraphicsIdea is a full-service software development and UI/UX design studio. We build production-ready Next.js web applications, React Native mobile apps, and custom AI platforms.",
  keywords: [
    "digital agency",
    "web development studio",
    "custom software development",
    "Next.js web apps",
    "React Native mobile development",
    "UI UX design studio",
    "AI software engineering",
  ],
  authors: [{ name: "GraphicsIdea Agency" }],
  creator: "GraphicsIdea",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://graphicsidea.com",
    siteName: "GraphicsIdea Agency",
    title: "GraphicsIdea | Full-Service Digital Product Agency & Engineering Studio",
    description:
      "We design and build high-converting web applications, native mobile apps, and enterprise AI software with 100% IP ownership.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "GraphicsIdea Digital Agency Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GraphicsIdea | Full-Service Digital Product Agency",
    description: "We design and engineer high-converting web apps, mobile apps, and AI software.",
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
    name: "GraphicsIdea Digital Agency & Studio",
    url: "https://graphicsidea.com",
    description:
      "GraphicsIdea is an elite digital product agency delivering full-stack web, mobile, UI/UX, and AI engineering.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://graphicsidea.com/services?search={search_term_string}",
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
