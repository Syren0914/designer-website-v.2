"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ScrollIndicator from "@/components/scroll-indicator"
import { ArrowRight } from "lucide-react"
import SocialIcons from "@/components/social-icons"
import MobileMenu from "@/components/mobile-menu"
import AboutImage from "@/components/about-image"
import HeroPuzzle from "@/components/hero-puzzle"
import { PuzzlePiece } from "@/components/puzzle-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollIndicator />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-xl font-bold tracking-tighter">
              HELVETICA
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                Work
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                About
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                Contact
              </Link>
            </motion.div>
          </div>
          <MobileMenu
            items={[
              { label: "Work", href: "/work" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <PuzzlePiece direction="top" delay={0.1}>
              <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">SWISS</h1>
            </PuzzlePiece>
            <PuzzlePiece direction="bottom" delay={0.3}>
              <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">DESIGN</h1>
            </PuzzlePiece>
            <PuzzlePiece delay={0.5}>
              <p className="text-xl max-w-xl">
                Clarity. Precision. Objectivity. The principles of Swiss Design have shaped modern visual communication
                since the 1950s.
              </p>
            </PuzzlePiece>
          </div>
          <motion.div
            className="col-span-12 md:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroPuzzle />
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <PuzzlePiece direction="left">
            <h2 className="text-6xl font-bold tracking-tighter mb-12">WORK</h2>
          </PuzzlePiece>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <PuzzlePiece direction="bottom" delay={0.1} className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-black text-8xl font-bold">01</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-2">Typography Project</h3>
              <p className="text-neutral-400">Exploring grid systems and typographic hierarchy</p>
            </PuzzlePiece>

            {/* Project 2 */}
            <PuzzlePiece direction="bottom" delay={0.2} className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-black text-8xl font-bold">02</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-2">Poster Design</h3>
              <p className="text-neutral-400">Minimalist approach to visual communication</p>
            </PuzzlePiece>

            {/* Project 3 */}
            <PuzzlePiece direction="bottom" delay={0.3} className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-black text-8xl font-bold">03</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
              <p className="text-neutral-400">Clean, systematic visual language for modern brands</p>
            </PuzzlePiece>
          </div>
          <PuzzlePiece direction="bottom" delay={0.4} className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors"
            >
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </PuzzlePiece>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <PuzzlePiece direction="left">
            <h2 className="text-6xl font-bold tracking-tighter mb-12">ABOUT</h2>
          </PuzzlePiece>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 order-2 md:order-1">
              <AboutImage />
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <PuzzlePiece direction="right" delay={0.1}>
                <p className="text-xl mb-6">
                  Swiss Design, also known as International Typographic Style, emerged in Switzerland in the 1950s. It
                  emphasizes cleanliness, readability, and objectivity.
                </p>
              </PuzzlePiece>

              <PuzzlePiece direction="right" delay={0.2}>
                <p className="mb-6">
                  The style is characterized by the use of sans-serif typography (particularly Helvetica), grid systems,
                  asymmetrical layouts, and photography instead of illustrations. Swiss Design pioneers believed that
                  design should be clear, objective, and functional.
                </p>
              </PuzzlePiece>

              <PuzzlePiece direction="right" delay={0.3}>
                <p className="mb-6">
                  Key figures in the movement include Josef Müller-Brockmann, Armin Hofmann, Emil Ruder, and Max Bill.
                  Their work continues to influence graphic design, web design, and visual communication today.
                </p>
              </PuzzlePiece>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <PuzzlePiece direction="bottom" delay={0.4}>
                  <h3 className="text-sm uppercase tracking-widest mb-4">Principles</h3>
                  <ul className="space-y-3">
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Minimalism
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Grid-based layouts
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Sans-serif typography
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Objective photography
                    </motion.li>
                  </ul>
                </PuzzlePiece>

                <PuzzlePiece direction="bottom" delay={0.5}>
                  <h3 className="text-sm uppercase tracking-widest mb-4">Influences</h3>
                  <ul className="space-y-3">
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Bauhaus
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      De Stijl
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Constructivism
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      New Typography
                    </motion.li>
                  </ul>
                </PuzzlePiece>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <PuzzlePiece direction="left">
                <h2 className="text-6xl font-bold tracking-tighter mb-8">CONTACT</h2>
              </PuzzlePiece>
              <PuzzlePiece direction="left" delay={0.2}>
                <p className="text-xl mb-8">Interested in working together? Let's discuss your project.</p>
              </PuzzlePiece>

              <div className="space-y-4">
                <PuzzlePiece direction="left" delay={0.3}>
                  <p className="flex items-center">
                    <span className="w-24 text-sm uppercase tracking-widest">Email</span>
                    <a href="mailto:hello@swissdesign.com" className="hover:underline">
                      hello@swissdesign.com
                    </a>
                  </p>
                </PuzzlePiece>

                <PuzzlePiece direction="left" delay={0.4}>
                  <p className="flex items-center">
                    <span className="w-24 text-sm uppercase tracking-widest">Phone</span>
                    <a href="tel:+41123456789" className="hover:underline">
                      +41 123 456 789
                    </a>
                  </p>
                </PuzzlePiece>

                <PuzzlePiece direction="left" delay={0.5}>
                  <p className="flex items-center">
                    <span className="w-24 text-sm uppercase tracking-widest">Location</span>
                    <span>Zürich, Switzerland</span>
                  </p>
                </PuzzlePiece>
              </div>

              <PuzzlePiece direction="left" delay={0.6} className="mt-8">
                <h3 className="text-sm uppercase tracking-widest mb-4">Follow Us</h3>
                <SocialIcons showLabels={false} iconSize={20} />
              </PuzzlePiece>
            </div>

            <div>
              <form className="space-y-6">
                <PuzzlePiece direction="right" delay={0.2}>
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                      placeholder="Your name"
                    />
                  </div>
                </PuzzlePiece>

                <PuzzlePiece direction="right" delay={0.3}>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                      placeholder="Your email"
                    />
                  </div>
                </PuzzlePiece>

                <PuzzlePiece direction="right" delay={0.4}>
                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </PuzzlePiece>

                <PuzzlePiece direction="right" delay={0.5}>
                  <button
                    type="submit"
                    className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                    
                  >
                    Send Message
                  </button>
                </PuzzlePiece>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <PuzzlePiece direction="left" delay={0.1}>
            <p className="text-sm mb-4 md:mb-0">© 2025 Swiss Design Studio. All rights reserved.</p>
          </PuzzlePiece>
          <PuzzlePiece direction="right" delay={0.2}>
            <SocialIcons />
          </PuzzlePiece>
        </div>
      </footer>
    </main>
  )
}

