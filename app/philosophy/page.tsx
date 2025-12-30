"use client";

import Navigation from "@/components/Navigation";

// Philosophy rules
const philosophyRules = [
    {
        number: 1,
        title: "See Sunsets Often",
        description: "The single easiest way to have a good day.",
    },
    {
        number: 2,
        title: "Be Loving",
        description: "Everyone deserves respect and furtherance.",
    },
    {
        number: 3,
        title: "Test Your Limits",
        description: "Stagnation Kills. You are the universe observing itself, impress yourself.",
    },
    {
        number: 4,
        title: "Drown in the Deep End",
        description: "Life takes effort. Spend yours chasing exceptionalism.",
    },
    {
        number: 5,
        title: "Value Sleep & Sobriety",
        description: "The second and third easiest ways to have a good day.",
    },
    {
        number: 6,
        title: "Explore with childlike curiosity",
        description: "The world is a beautiful and peculiar place.",
    },
];

export default function PhilosophyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <section className="min-h-screen px-8 py-32 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl mb-16">Rules to live by:</h1>

                <div className="space-y-12">
                    {philosophyRules.map((rule) => (
                        <div key={rule.number} className="flex gap-6">
                            <span className="text-3xl font-normal opacity-40">{rule.number}.</span>
                            <div>
                                <h3 className="text-2xl font-normal mb-2">{rule.title}</h3>
                                <p className="italic opacity-80">{rule.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
