"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ScrollIndicator from "@/components/scroll-indicator"
import { ArrowRight } from "lucide-react"
import SocialIcons from "@/components/social-icons"
import MobileMenu from "@/components/mobile-menu"
import AboutImage from "@/components/about-image"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-white ">
      <ScrollIndicator />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex flex-wrap justify-between items-center">
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
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto ">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SAYED SEDIQ
              <br />
              GAWHARI
            </motion.h1>
            <motion.p
              className="text-xl max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore the artistic journey of Sediq—where tradition meets digital expression.
            </motion.p>
          </div>
          <motion.div
            className="col-span-12 md:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square ">
              <Image src="/side.jpg" alt="Sediq" width={600} height={600} className="w-full h-auto" />

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"
                initial={{ x: 20, y: 20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">WORK</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors"
            >
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.h2
            className="text-6xl font-bold tracking-tighter mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ABOUT
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              className="md:col-span-5 order-2 md:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <AboutImage />
            </motion.div>

            <motion.div
              className="md:col-span-7 order-1 md:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl mb-6">
              Sediq is a visionary artist from Afghanistan, blending traditional influences with modern digital artistry. 
              </p>
              <p className="mb-6">
              His work captures emotions, stories, and the cultural depth of his heritage while embracing contemporary techniques. Whether through intricate paintings or digital compositions, each piece reflects his passion for storytelling through art.
              </p>
              <p className="mb-6">
                {/* Key figures in the movement include Josef Müller-Brockmann, Armin Hofmann, Emil Ruder, and Max Bill.
                Their work continues to influence graphic design, web design, and visual communication today. */}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm uppercase tracking-widest mb-4">Principles</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Minimalism
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Grid-based layouts
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Sans-serif typography
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Objective photography
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm uppercase tracking-widest mb-4">Influences</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Bauhaus
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      De Stijl
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      Constructivism
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-3"></span>
                      New Typography
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-bold tracking-tighter mb-8">CONTACT</h2>
              <p className="text-xl mb-8">Interested in working together? Let's discuss your project.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Email</span>
                  <a href="mailto:hello@swissdesign.com" className="hover:underline">
                    sediq@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Phone</span>
                  <a href="tel:+41123456789" className="hover:underline">
                    +41 123 456 789
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Location</span>
                  <span>Virginia , USA</span>
                </p>
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm uppercase tracking-widest mb-4">Follow Us</h3>
                <SocialIcons showLabels={false} iconSize={20} />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Your email"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

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

