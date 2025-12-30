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
  title: "Cyrus Correll",
  description: "Cyrus Correll - Developer, Researcher, Entrepreneur",
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
