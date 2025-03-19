"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import ScrollIndicator from "@/components/scroll-indicator"
import SocialIcons from "@/components/social-icons"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"

// Project data
const projects = [
  {
    id: 1,
    title: "Typography Project",
    category: "Print",
    year: "2024",
    description:
      "A systematic exploration of typographic hierarchy and grid systems, inspired by the principles of Swiss Design. This project demonstrates the power of typography as a primary design element.",
    client: "Cultural Institute",
    tags: ["Typography", "Grid", "Print"],
    featured: true,
    art: "/IMG_E6064.JPG"
  },
  {
    id: 2,
    title: "Poster Design",
    category: "Print",
    year: "2023",
    description:
      "Minimalist approach to visual communication through poster design. This series explores the use of negative space, bold typography, and geometric shapes to convey complex messages with clarity.",
    client: "Design Festival",
    tags: ["Poster", "Minimalism", "Exhibition"],
    featured: true,
    art: "/IMG_E6075.JPG"

  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Identity",
    year: "2023",
    description:
      "Clean, systematic visual language for a modern tech company. The identity system includes logo variations, typography guidelines, color palette, and application examples.",
    client: "TechCorp Inc.",
    tags: ["Branding", "Identity", "Guidelines"],
    featured: true,
    art: "/IMG_E6077.JPG"

  
  },
  {
    id: 4,
    title: "Editorial Design",
    category: "Print",
    year: "2022",
    description:
      "A magazine layout that emphasizes readability and information hierarchy. The design uses a strict grid system with dynamic typography to create rhythm and visual interest.",
    client: "Design Quarterly",
    tags: ["Editorial", "Magazine", "Layout"],
    featured: false,
    art: "/IMG_E6067.JPG"

  },
  {
    id: 5,
    title: "Wayfinding System",
    category: "Environmental",
    year: "2022",
    description:
      "A comprehensive signage and wayfinding system for a modern art museum. The system uses typography, color coding, and pictograms to guide visitors through complex spaces.",
    client: "Contemporary Art Museum",
    tags: ["Wayfinding", "Signage", "Environmental"],
    featured: false,
    art: "/IMG_E6069.JPG"

  },
  {
    id: 6,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6073.JPG"

  },
  {
    id: 7,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6072.JPG"

  },
  {
    id: 8,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6078.JPG"

  },
  {
    id: 9,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6074.JPG"

  },
  {
    id: 10,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6080.JPG"

  },
  {
    id: 11,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6081.JPG"

  },
  {
    id: 12,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6066.JPG"

  },
  {
    id: 13,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6071.JPG"

  },
  {
    id: 14,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6079.JPG"

  },
  {
    id: 15,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6070.JPG"

  },
  {
    id: 16,
    title: "Digital Interface",
    category: "Digital",
    year: "2021",
    description:
      "A web application interface designed with Swiss principles. The interface prioritizes content hierarchy, readability, and user experience through a systematic grid layout.",
    client: "Financial Services",
    tags: ["UI/UX", "Web", "Application"],
    featured: false,
    art: "/IMG_E6076.JPG"

  },

]

// Filter categories
const categories = ["All", "Print", "Identity", "Digital", "Environmental"]

export default function WorkPage() {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <main className="min-h-screen bg-white">
      <ScrollIndicator />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-xl font-bold tracking-tighter">
              SEDIQ
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-1"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </motion.div>
          </div>
          <MobileMenu
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ]}
            currentPath="/work"
          />
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8 container mx-auto">
        <motion.h1
          className="text-6xl md:text-7xl font-bold tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WORK
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Each piece in this gallery is a reflection of Sediq’s artistic journey, blending Afghan heritage with modern techniques. From hand-painted masterpieces to digital compositions, his work tells stories that resonate beyond borders.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="pb-12 px-4 md:px-8 container mx-auto">
        <motion.div
          className="flex flex-wrap gap-4 md:gap-8 border-t border-b border-black py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`text-sm uppercase tracking-widest ${filter === category ? "text-red-600" : "text-black hover:text-red-600"} transition-colors`}
              onClick={() => setFilter(category)}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3 + index * 0.05,
                y: { type: "spring", stiffness: 300 },
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[4/3] bg-neutral-100 mb-4 overflow-hidden relative">
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">
                    <Image src={project.art} alt={""} height={600} width={400} className="absolute inset-0 w-full h-full object-cover opacity-50 -z-0"></Image>
                    {String(project.id).padStart(2, "0")}
                  </span>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-black text-white text-xs uppercase tracking-widest px-3 py-1">
                      Featured
                    </div>
                  )}
                </motion.div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-neutral-600 text-sm">
                    {project.category} • {project.year}
                  </p>
                </div>
                <motion.div
                  className="bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)
              if (!project) return null

              return (
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">{project.title}</h2>
                      <p className="text-neutral-600">
                        {project.category} • {project.year}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-2xl font-bold hover:text-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  <div className="aspect-video bg-neutral-100 mb-8 flex items-center justify-center">
                  <Image src={project.art} alt={""} height={600} width={400} className="    object-cover  "></Image>
                    {/* <span className="text-black text-8xl font-bold">{String(project.id).padStart(2, "0")}</span> */}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-2">
                      <h3 className="text-sm uppercase tracking-widest mb-3">About the Project</h3>
                      <p className="mb-4">{project.description}</p>
                      <p>
                        This project exemplifies our approach to Swiss Design principles, focusing on clarity,
                        precision, and objectivity. The systematic grid structure and typographic hierarchy ensure that
                        information is communicated effectively.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest mb-3">Project Details</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold">Client</p>
                          <p>{project.client}</p>
                        </div>
                        <div>
                          <p className="font-bold">Year</p>
                          <p>{project.year}</p>
                        </div>
                        <div>
                          <p className="font-bold">Category</p>
                          <p>{project.category}</p>
                        </div>
                        <div>
                          <p className="font-bold">Tags</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="bg-neutral-100 px-3 py-1 text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="aspect-square bg-neutral-100"></div>
                    <div className="aspect-square bg-neutral-100"></div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-black">
                    <button
                      onClick={() => {
                        const prevIndex = projects.findIndex((p) => p.id === selectedProject) - 1
                        const prevProject = prevIndex >= 0 ? projects[prevIndex] : projects[projects.length - 1]
                        setSelectedProject(prevProject.id)
                      }}
                      className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                    >
                      <ArrowLeft size={14} />
                      Previous Project
                    </button>
                    <button
                      onClick={() => {
                        const nextIndex = projects.findIndex((p) => p.id === selectedProject) + 1
                        const nextProject = nextIndex < projects.length ? projects[nextIndex] : projects[0]
                        setSelectedProject(nextProject.id)
                      }}
                      className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                    >
                      Next Project
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © 2025 <Link href={"https://erdene.dev"}>Erdene Batbayar</Link>. All rights reserved.
          </motion.p>
          <SocialIcons />
        </div>
      </footer>
    </main>
  )
}

