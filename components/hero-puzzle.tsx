"use client"

import { motion } from "framer-motion"

export default function HeroPuzzle() {
  return (
    <div className="relative w-full aspect-square">
      {/* Base red background - slides in from right */}
      <motion.div
        className="absolute inset-0 bg-red-600"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 50 }}
      />

      {/* Top left piece */}
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-red-600 border-r-2 border-b-2 border-red-700"
        initial={{ x: -50, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      {/* Top right piece */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-600 border-l-2 border-b-2 border-red-700"
        initial={{ x: 50, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Bottom left piece */}
      <motion.div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-600 border-r-2 border-t-2 border-red-700"
        initial={{ x: -50, y: 50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      {/* Black square - slides in from bottom right */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"
        initial={{ x: 50, y: 50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8, type: "spring", stiffness: 50 }}
      />
    </div>
  )
}

