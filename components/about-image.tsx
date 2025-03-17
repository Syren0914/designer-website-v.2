"use client"

import { motion } from "framer-motion"

export default function AboutImage() {
  return (
    <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
      {/* Base container */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      />

      {/* Puzzle piece 1 - Top left */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-neutral-200"
        initial={{ x: -100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      />

      {/* Puzzle piece 2 - Top right */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-neutral-100"
        initial={{ x: 100, y: -100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      />

      {/* Puzzle piece 3 - Bottom left */}
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neutral-100"
        initial={{ x: -100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      />

      {/* Puzzle piece 4 - Bottom right */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-neutral-200"
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      />

      {/* Center border */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Red square */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-red-600"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Black square */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-black"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      />
    </div>
  )
}

