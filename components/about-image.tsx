"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutImage() {
  return (
    <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-red-600"
        initial={{ x: -50, y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      />


      <motion.div
        className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-black"
        initial={{ x: 50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-black"
        initial={{ x: 50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}>
        <Image src={"/IMG_E6077.JPG"} alt={""} width={500} height={600} className="absolute items-center h-full w-full"></Image>

      </motion.div>
      
      
    </div>
  )
}

