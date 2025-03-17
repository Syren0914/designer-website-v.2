"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation" // ✅ Correct in App Router
import HamburgerButton from "./hamburger-button"

interface MenuItem {
  label: string
  href: string
}

interface MobileMenuProps {
  items: MenuItem[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const currentPath = usePathname() // ✅


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false)
    }

    window.addEventListener("routeChange", handleRouteChange)

    return () => {
      window.removeEventListener("routeChange", handleRouteChange)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <motion.div
              className="flex flex-col items-center space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`text-3xl font-bold uppercase tracking-widest ${
                      currentPath === item.href ? "text-red-600" : "text-black hover:text-red-600"
                    } transition-colors`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-red-600"
                    animate={{ width: currentPath === item.href ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }} // ✅ Works because it's a motion element
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
    </AnimatePresence>
  )
}

export default MobileMenu

