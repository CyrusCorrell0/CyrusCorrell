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
        title: "Nothin' But Love",
        description: "Everyone deserves respect and attention.",
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
    // {
    //     number: 7,
    //     title: "Attention is the Currency of Love",
    //     description: "You very well could be the first person to pay attention to that blade of grass.",
    // },
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
                                <p className="text-xl italic opacity-80">{rule.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-8 pb-32 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl mb-8">My Story</h1>
                <div className="space-y-6">
                    <p className="text-xl leading-relaxed opacity-80">
                        Born in San Diego, grew up in Guanacaste, Costa Rica (Pura Vida!). After a few years of beaches, jungles, and eating way too much sand, I moved back to Encinitas, CA.         </p>
                    <p className="text-xl leading-relaxed opacity-80">
                        Attending UC Santa Cruz, I got my start in Prof. Razvan Marinescu's Biomedical AI Laboratory. I helped generate simulation data for thousands of PDB's (and even made some sweet shirts!). Being interested in entreprenuership, I joined GetVirtual in early 2025 as a Project Manager. Through this I've been able to meet some of my favorite business owners, and further spread my knowledge and skills in a way that helps small businesses and community efforts.
                    </p>
                    <p className="text-xl leading-relaxed opacity-80">
                        After a stellar time in UCSC's first Corporate Innovation Studio, and completing two projects for the Overture Maps Foundation, I was taken under the wing of Sri Rao. Alongside my roomate and other classmates, we began work on HeyMarin with a clear goal: creating AI tools that SMB's can actually use.
                    </p>
                    <p className="text-xl leading-relaxed opacity-80">
                        At the end of the day, I'm a builder at heart. My goal is to learn the cutting edge as quickly as possible, and then share the latest innovations with the world in a way that builds for all.
                    </p>
                </div>
            </section>
        </div>
    );
}
