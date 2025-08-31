
import Image from "next/image";
import PillNav from "@/components/ui/pill-nav";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ContainerTextFlip } from "@/components/ui/text-flip-container";

const projects = [
  {
    title: "Marin",
    link: "https://github.com/cyruscorrell",
    thumbnail: "/marin-logo.png",
  },
  {
    title: "LLM Pipeline for QA - Overture Maps",
    link: "https://poi-quality-assurance.streamlit.app/",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop", // AI/ML themed
  },
  {
    title: "Locational Confidence Metric - Overture Maps",
    link: "https://places-locational-confidence-metric.streamlit.app/",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop", // Data analysis/charts
  },
  {
    title: "Capital Access Institute",
    link: "https://www.cap8ccess.org/",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=600&fit=crop", // Finance/business
  },
   {
    title: "GetVirtual Employee Dashboard",
    link: "https://www.getvirtual.org/",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop", // Dashboard/workplace
  },
  {
    title: "Personal Website",
    link: "https://github.com/cyruscorrell/personalwebsite",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop", // Web development/coding
  },
  {
    title: "Mario GA algorithm",
    link: "https://github.com/CyrusCorrell/CMPMP5",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop", // Gaming/algorithms
  },
  {
    title: "Lead List Generator",
    link: "https://gvleadgenerator.streamlit.app/",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop", // Business automation/CRM
  },
  {
    title: "Cold Call Agent",
    link: "https://github.com/CyrusCorrell0/ColdCallAgent",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop", // Communication/phone
  },
  {
    title: "Instant Tutor",
    link: "https://instant-tutor.streamlit.app/",
    thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop", // Education/learning
  },
  {
    title: "PDF2Speech",
    link: "https://github.com/CyrusCorrell0/PDFtoSpeech",
    thumbnail: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=600&fit=crop", // Audio/documents
  },
  {
    title: "CitationBuddy",
    link: "https://github.com/cyruscorrell",
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop", // Academic/research
  },
   {
    title: "Sierpinski Drawer - HISC 144 Final",
    link: "https://hisc144-final.streamlit.app/",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=600&fit=crop", // Mathematics/fractals
  },
   {
    title: "SubwaySurferIt",
    link: "https://github.com/CyrusCorrell0/SubwaySurferIt",
    thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop", // Gaming/mobile
  },
  // {
  //   title: "API Gateway",
  //   link: "https://github.com/cyruscorrell",
  //   thumbnail: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=600&h=600&fit=crop",
  // },
  // {
  //   title: "Mobile App",
  //   link: "https://github.com/cyruscorrell",
  //   thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop",
  // },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      {/* Pill Navigation */}
      <PillNav />

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-start justify-center min-h-[80vh] pt-20 pb-8 text-left max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Cyrus Correll
            </span>
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
              A developer with experience in{" "}
            </p>
            <ContainerTextFlip
              words={["LLMs", "Machine Learning", "Data Science", "Frontend", "Email"]}
              className="text-xl sm:text-2xl"
            />
            
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a href="#projects" className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
            View My Work
          </a>
          <div className="flex gap-4">
            <a 
              href="mailto:cyruscorrell07@gmail.com" 
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow"
              aria-label="Email"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/cyruscorrell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-4xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Building people-first solutions across startups, research labs, and industry
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Marin */}
          <div className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Co-Founder</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">Marin</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">San Francisco Bay Area</p>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Jun 2025 - Present
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Backed by MCHN Ventures. Email Based Virtual Interns for SMEs. Launching 9/25.
            </p> 
          </div>

          {/* GetVirtual */}
          <div className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Project Manager</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">GetVirtual</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Santa Cruz, California</p>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Jun 2025 - Present
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Project Manager for Paid projects. Organized full process, acquiring leads, cold calling, scheduling diagnostic meetings, writing project proposals, implementing feedback, creating contracts and invoices, and managing client relationships.
            </p>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Student Lead • Part-time (Apr 2025 - Present)</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                Student Lead for GetVirtual. Hand-selected after successful completion of Innovation & Entrepreneurship Program. Focused in scaling GV through lead generation, backend automation, customer and student feedback.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Google Analytics</span> */}
              {/* <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Automation</span> */}
            </div>
          </div>

          {/* Biomedical AI Lab */}
          <div className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Machine Learning Researcher</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">Biomedical AI Lab</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Baskin Engineering at UCSC • Santa Cruz, California</p>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                May 2024 - Present
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Undergraduate research under professor Razvan Marinescu's MD/ML lab. Implementing coarse-grained graph neural networks to minimize force field calculation in molecular dynamics simulation.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">Molecular Dynamics</span> */}
              {/* <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">PyTorch</span> */}
            </div>
          </div>

          {/* Overture Maps */}
          <div className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Data Science & Machine Learning Intern</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">Overture Maps Foundation</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Santa Cruz, California</p>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Mar 2025 - Jun 2025
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Had the honor to work alongside Overture and its member companies—including TomTom, Meta, Microsoft, & GeoSpark—through the CRWN 102: Corporate Innovation Laboratory under the amazing Professor Sri Rao.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Deep Learning</span> */}
              {/* <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Entrepreneurship</span> */}
            </div>
          </div>

          {/* Digital Marketing Internship */}
          <div className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Digital Marketing Intern</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">Wisdom Properties</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Solana Beach, California, United States • On-site</p>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                May 2023 - Sep 2023
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Summer internship working under Alexander Wells III of Wisdom Properties. Designed web pages, scripted and directed video advertisements, collaborated with digital marketing team. Filmed drone footage and guided real estate agent through the selling process.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section with Hero Parallax */}
      <section id="projects">
        <HeroParallax products={projects} />
      </section>

      {/* Static Projects List */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and experience. 
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-4 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop" 
                alt="LLM Pipeline for QA - Overture Maps" 
                width={400}
                height={240}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">LLM Pipeline for QA - Overture Maps</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              AI-powered quality assurance pipeline for geographic data validation using Large Language Models and Streamlit interface.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Python</span>
              <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Streamlit</span>
              <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">LLMs</span>
            </div>
            <a href="https://poi-quality-assurance.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
              View Project →
            </a>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-green-500 to-blue-600 mb-4 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop" 
                alt="Locational Confidence Metric - Overture Maps" 
                width={400}
                height={240}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Locational Confidence Metric</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              Advanced geospatial analysis tool that calculates confidence metrics for location data accuracy in Overture Maps.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Python</span>
              <span className="px-2 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">Geospatial</span>
              <span className="px-2 py-1 text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">Analytics</span>
            </div>
            <a href="https://places-locational-confidence-metric.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
              View Project →
            </a>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 mb-4 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=240&fit=crop" 
                alt="Capital Access Institute" 
                width={400}
                height={240}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Capital Access Institute</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              Professional website for a financial services institute providing capital access education and resources.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Web Design</span>
              <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded">Finance</span>
              <span className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded">Business</span>
            </div>
            <a href="https://www.cap8ccess.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
              View Project →
            </a>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-orange-500 to-red-600 mb-4 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=240&fit=crop" 
                alt="GetVirtual Employee Dashboard" 
                width={400}
                height={240}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">GetVirtual Employee Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              Comprehensive employee management dashboard for remote workforce coordination and productivity tracking.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Dashboard</span>
              <span className="px-2 py-1 text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded">HR Tech</span>
              <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">Remote Work</span>
            </div>
            <a href="https://www.getvirtual.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
              View Project →
            </a>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-teal-500 to-green-600 mb-4 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=240&fit=crop" 
                alt="Lead List Generator" 
                width={400}
                height={240}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Lead List Generator</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              Automated lead generation tool that creates targeted prospect lists for sales teams with advanced filtering and analytics.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Python</span>
              <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Sales Tech</span>
              <span className="px-2 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">Automation</span>
            </div>
            <a href="https://gvleadgenerator.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
              View Project →
            </a>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 mb-4 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop" 
                alt="Instant Tutor" 
                width={400}
                height={240}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Instant Tutor</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              AI-powered tutoring platform providing personalized learning experiences and instant help across various subjects.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">AI</span>
              <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">Education</span>
              <span className="px-2 py-1 text-xs bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded">Learning</span>
            </div>
            <a href="https://instant-tutor.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
              View Project →
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/cyruscorrell" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto py-20 px-6 text-center relative">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Contact Me</h2>
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="mailto:cyruscorrell07@gmail.com" 
              className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/cyruscorrell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <form className="flex flex-col gap-6 items-center">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full max-w-md px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full max-w-md px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full max-w-md px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
            rows={5} 
            required 
          />
          <button 
            type="submit" 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800">
        <p>&copy; {new Date().getFullYear()} Cyrus Correll. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS, and Motion</p>
      </footer>
    </div>
  );
}
