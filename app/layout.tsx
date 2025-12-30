import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Cyrus Correll",
    template: "%s | Cyrus Correll",
  },
  description: "Cyrus Correll - Developer, Researcher, and Entrepreneur specializing in AI/LLMs and Small Business solutions.",
  keywords: ["Cyrus Correll", "AI specialist", "Machine Learning Researcher", "Software Engineer", "Entrepreneur", "Marin Co-founder", "UCSC researcher"],
  authors: [{ name: "Cyrus Correll" }],
  creator: "Cyrus Correll",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyruscorrell.com",
    title: "Cyrus Correll",
    description: "Personal portfolio of Cyrus Correll - AI Researcher & Entrepreneur.",
    siteName: "Cyrus Correll Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyrus Correll",
    description: "AI Researcher & Entrepreneur focusing on SMB tools.",
    creator: "@CyrusCorrell",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${instrumentSerif.variable} font-serif antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
