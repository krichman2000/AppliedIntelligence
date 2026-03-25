import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
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
  description: "Conversations with leaders building the future of AI.",
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
      <body className="bg-cream min-h-screen">
        <div className="max-w-[800px] mx-auto px-6">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
