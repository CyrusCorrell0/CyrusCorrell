"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

// Project data with categories
const projects = [
    {
        title: "Marin",
        link: "https://github.com/cyruscorrell",
        thumbnail: "/marin-logo.png",
        category: "AI",
    },
    {
        title: "LLM Pipeline for QA",
        link: "https://poi-quality-assurance.streamlit.app/",
        thumbnail: "/Overture-KV-colour-logo.webp",
        category: "AI",
    },
    {
        title: "Locational Confidence Metric",
        link: "https://places-locational-confidence-metric.streamlit.app/",
        thumbnail: "/Overture-KV-colour-logo.webp",
        category: "Research",
    },
    {
        title: "Capital Access Institute",
        link: "https://www.cap8ccess.org/",
        thumbnail: "/Screenshot 2025-09-02 153342.png",
        category: "Web",
    },
    {
        title: "GetVirtual Dashboard",
        link: "https://www.getvirtual.org/",
        thumbnail: "/gv-logo.png",
        category: "Web",
    },
    {
        title: "Lead List Generator",
        link: "https://gvleadgenerator.streamlit.app/",
        thumbnail: "/streamlit-logo-png_seeklogo-441815.webp",
        category: "Tools",
    },
    {
        title: "Cold Call Agent",
        link: "https://github.com/CyrusCorrell0/ColdCallAgent",
        thumbnail: "/marin-logo.png",
        category: "AI",
    },
    {
        title: "Instant Tutor",
        link: "https://instant-tutor.streamlit.app/",
        thumbnail: "/streamlit-logo-png_seeklogo-441815.webp",
        category: "AI",
    },
    {
        title: "PDF2Speech",
        link: "https://github.com/CyrusCorrell0/PDFtoSpeech",
        thumbnail: "/streamlit-logo-png_seeklogo-441815.webp",
        category: "Tools",
    },
];

const categories = ["All", "AI", "Web", "Research", "Tools"];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <section className="min-h-screen px-8 py-32 max-w-7xl mx-auto">
                {/* Filter Pills */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 text-sm rounded-full border transition-all ${selectedCategory === category
                                    ? "bg-foreground text-background"
                                    : "border-foreground/30 hover:border-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="aspect-[4/3] bg-foreground/10 mb-4 overflow-hidden">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-lg group-hover:underline underline-offset-4">
                                {project.title}
                            </h3>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}
