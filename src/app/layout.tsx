import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { JsonLd } from "@/components/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

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
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "AI podcast",
    "artificial intelligence",
    "enterprise AI",
    "AI implementation",
    "AI leadership",
    "technology podcast",
  ],
  authors: [{ name: SITE_AUTHOR }],
  creator: SITE_AUTHOR,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  // No canonical here on purpose: every page sets its own via buildPageMetadata,
  // so nothing can silently inherit the homepage canonical.
  alternates: {
    types: {
      "application/rss+xml": absoluteUrl("/feed.xml"),
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
  "@id": `${SITE_URL}/#podcast`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  webFeed: absoluteUrl("/feed.xml"),
  image: DEFAULT_OG_IMAGE.url,
  author: {
    "@type": "Person",
    name: SITE_AUTHOR,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
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
        <JsonLd data={structuredData} />
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
