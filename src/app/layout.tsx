import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Applied Intelligence | AI Podcast",
  description:
    "Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about what actually works when implementing AI in organizations.",
  keywords: [
    "AI podcast",
    "artificial intelligence",
    "enterprise AI",
    "AI implementation",
    "AI leadership",
    "technology podcast",
  ],
  authors: [{ name: "Keith Richman" }],
  creator: "Keith Richman",
  publisher: "Applied Intelligence",
  metadataBase: new URL("https://appliedintelligence.fm"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appliedintelligence.fm",
    siteName: "Applied Intelligence",
    title: "Applied Intelligence | AI Podcast",
    description:
      "Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about what actually works when implementing AI in organizations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Applied Intelligence Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applied Intelligence | AI Podcast",
    description:
      "Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about what actually works when implementing AI in organizations.",
    images: ["/og-image.png"],
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
  verification: {
    google: "9YpiXQK8U2u03-cO2Slm9JEm23retlqvvCSXyeiHm1g",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Applied Intelligence",
  description:
    "Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about what actually works when implementing AI in organizations.",
  url: "https://appliedintelligence.fm",
  author: {
    "@type": "Person",
    name: "Keith Richman",
  },
  publisher: {
    "@type": "Organization",
    name: "Applied Intelligence",
    url: "https://appliedintelligence.fm",
  },
  inLanguage: "en-US",
  genre: ["Technology", "Business", "Artificial Intelligence"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6294YVZJQG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6294YVZJQG');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-cream min-h-screen">
        <div className="max-w-[800px] mx-auto px-6">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
