"use client";

import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-normal text-center">
          Cyrus Correll
        </h1>
      </section>
    </div>
  );
}
