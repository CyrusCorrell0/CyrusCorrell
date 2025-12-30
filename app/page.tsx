"use client";

import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-normal text-center">
          Cyrus Correll
        </h1>
        <a
          href="https://app.apollo.io/#/meet/cyrus_correll_6d8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full border border-foreground/30 hover:border-foreground transition-colors text-lg md:text-xl italic hover:bg-foreground/5"
        >
          Run a business? Let's Chat
        </a>
      </section>
    </div>
  );
}
