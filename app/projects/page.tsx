"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "AI", "Web App", "Research", "Tools"];

    const data = [
        {
            title: "Marin",
            category: "AI",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        An advanced AI project focusing on intelligent data processing and interaction.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["AI", "Python", "Machine Learning"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/marin-logo.png"
                                alt="Marin"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://github.com/cyruscorrell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "LLM Pipeline for QA",
            category: "AI",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        A comprehensive pipeline for Quality Assurance using Large Language Models, ensuring accurate and reliable data validation.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Streamlit", "LangChain", "OpenAI", "Python"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/Overture-KV-colour-logo.webp"
                                alt="LLM Pipeline"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://poi-quality-assurance.streamlit.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "Locational Confidence Metric",
            category: "Research",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        A research tool designed to measure and visualize confidence in locational data points using advanced statistical metrics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Research", "Data Science", "Streamlit", "Python"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/Overture-KV-colour-logo.webp"
                                alt="Locational Confidence Metric"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://places-locational-confidence-metric.streamlit.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "Capital Access Institute",
            category: "Web App",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        Official website for the Capital Access Institute, facilitating better access to capital resources and information.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Web Development", "React", "Next.js"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/Screenshot 2025-09-02 153342.png"
                                alt="Capital Access Institute"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                        <a
                            href="https://www.cap8ccess.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "GetVirtual Dashboard",
            category: "Web App",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        A comprehensive dashboard for GetVirtual, streamlining operations and project management.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Web App", "React", "Dashboard"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/gv-logo.png"
                                alt="GetVirtual Dashboard"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://www.getvirtual.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "Lead List Generator",
            category: "Tools",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        A utility tool to automate the generation of lead lists, saving time on manual data entry and research.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Tools", "Python", "Automation"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/streamlit-logo-png_seeklogo-441815.webp"
                                alt="Lead List Generator"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://gvleadgenerator.streamlit.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "Cold Call Agent",
            category: "AI",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        An AI-powered agent designed to handle and assist with cold calling workflows.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["AI", "Voice Processing", "Python"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/marin-logo.png"
                                alt="Cold Call Agent"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://github.com/CyrusCorrell0/ColdCallAgent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "Instant Tutor",
            category: "AI",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        An interactive AI tutoring system that provides real-time assistance and learning materials.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["AI", "Education", "Streamlit"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/streamlit-logo-png_seeklogo-441815.webp"
                                alt="Instant Tutor"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://instant-tutor.streamlit.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
        {
            title: "PDF2Speech",
            category: "Tools",
            content: (
                <div>
                    <p className="text-foreground/80 text-lg md:text-xl font-normal mb-4">
                        A tool converting PDF documents into spoken audio, making content more accessible.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Tools", "Accessibility", "Audio Processing"].map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10">
                            <Image
                                src="/streamlit-logo-png_seeklogo-441815.webp"
                                alt="PDF2Speech"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <a
                            href="https://github.com/CyrusCorrell0/PDFtoSpeech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium italic underline underline-offset-4 hover:text-foreground/80 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    const filteredData = selectedCategory === "All"
        ? data
        : data.filter((project) => project.category === selectedCategory);

    return (
        <div className="bg-background text-foreground min-h-screen">
            <Navigation />
            <div className="bg-background">
                <Timeline
                    data={filteredData}
                    title="Projects"
                    description="A timeline of my projects and research work."
                >
                    <div className="flex flex-wrap gap-3 mt-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 text-sm md:text-base rounded-full border transition-all ${selectedCategory === category
                                    ? "bg-foreground text-background border-foreground"
                                    : "border-foreground/30 hover:border-foreground text-foreground/70 hover:text-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Timeline>
            </div>
        </div>
    );
}
