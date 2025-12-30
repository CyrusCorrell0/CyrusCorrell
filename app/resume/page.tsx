"use client";

import Navigation from "@/components/Navigation";

// Experience data
const experiences = [
    {
        role: "Co-Founder",
        company: "Marin",
        location: "San Francisco Bay Area",
        period: "Jun 2025 - Present",
        description: "Backed by MCHN Ventures. Email Based Virtual Interns for SMEs. Launching 9/25.",
    },
    {
        role: "Project Manager",
        company: "GetVirtual",
        location: "Santa Cruz, California",
        period: "Jun 2025 - Present",
        description: "Project Manager for Paid projects. Organized full process, acquiring leads, cold calling, scheduling diagnostic meetings, writing project proposals, implementing feedback, creating contracts and invoices, and managing client relationships.",
    },
    {
        role: "Machine Learning Researcher",
        company: "Biomedical AI Lab",
        location: "Baskin Engineering at UCSC",
        period: "May 2024 - Present",
        description: "Undergraduate research under professor Razvan Marinescu's MD/ML lab. Implementing coarse-grained graph neural networks to minimize force field calculation in molecular dynamics simulation.",
    },
    {
        role: "Data Science & ML Intern",
        company: "Overture Maps Foundation",
        location: "Santa Cruz, California",
        period: "Mar 2025 - Jun 2025",
        description: "Had the honor to work alongside Overture and its member companies—including TomTom, Meta, Microsoft, & GeoSpark—through the CRWN 102: Corporate Innovation Laboratory.",
    },
    {
        role: "Digital Marketing Intern",
        company: "Wisdom Properties",
        location: "Solana Beach, California",
        period: "May 2023 - Sep 2023",
        description: "Summer internship working under Alexander Wells III of Wisdom Properties. Designed web pages, scripted and directed video advertisements, collaborated with digital marketing team.",
    },
];

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <section className="min-h-screen px-8 py-32 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl mb-16">Experience</h1>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-t border-foreground/20 pt-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-normal">{exp.role}</h3>
                                    <p className="text-lg italic opacity-80">{exp.company}</p>
                                    <p className="text-sm opacity-60">{exp.location}</p>
                                </div>
                                <p className="text-sm opacity-60 mt-2 sm:mt-0">{exp.period}</p>
                            </div>
                            <p className="opacity-80 leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
