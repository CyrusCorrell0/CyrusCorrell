import Navigation from "@/components/Navigation";
import { Github, Linkedin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Cyrus Correll's professional experience in AI research, entrepreneurship, and software development.",
};

// Experience data
const experiences = [
    {
        role: "Co-Founder",
        company: "Marin",
        location: "San Francisco Bay Area",
        period: "Jun 2025 - Present",
        description: "Email Based Virtual Interns for SMBs. Knowledge and Implementation costs are the top reasons businsses aren't adopting AI, Marin solves this by brining Agentic AI Straight to your inbox. Backed by MCHN Ventures.",
    },
    {
        role: "Hacker In Residence",
        company: "MCHN Ventures",
        location: "Sebastopol, CA",
        period: "Summer 2025",
        description: "Web app, Tooling Systems, and Database Infrastructure for email based-agents, which ultimately became HeyMarin. Worked with exceptional mentors such as Shane Small, co-creator of Exploding Kittens, and Sri Rao.",
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

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <section className="min-h-screen px-8 py-32 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl sm:text-5xl">Experience</h1>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/CyrusCorrell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/cyruscorrell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <p className="text-xl leading-relaxed max-w-2xl mb-16 opacity-80">
                    I bridge multidisciplinary AI research and Small Businesses, creating bespoke tools and projects that save owners time and money. I attend 3-5 hackathons a month, exposing myself to the cutting edge, giving my clients a taste of the latest tech delivered in a palatable way.
                </p>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-t border-foreground/20 pt-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                <div>
                                    <h3 className="text-3xl font-normal">{exp.role}</h3>
                                    <p className="text-xl italic opacity-80">{exp.company}</p>
                                    <p className="text-base opacity-60">{exp.location}</p>
                                </div>
                                <p className="text-base opacity-60 mt-2 sm:mt-0">{exp.period}</p>
                            </div>
                            <p className="text-lg opacity-80 leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
