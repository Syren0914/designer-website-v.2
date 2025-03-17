"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div className="fixed top-[56px] left-0 right-0 h-[2px] bg-red-600 origin-left z-50" style={{ scaleX }} />
  )
}

