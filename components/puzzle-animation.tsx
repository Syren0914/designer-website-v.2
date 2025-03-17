"use client"

import React from "react"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PuzzlePieceProps {
  children: ReactNode
  delay?: number
  direction?: "left" | "right" | "top" | "bottom"
  className?: string
  duration?: number
}

export const PuzzlePiece = ({
  children,
  delay = 0,
  direction = "left",
  className = "",
  duration = 0.6,
}: PuzzlePieceProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 }
      case "right":
        return { x: 100, opacity: 0 }
      case "top":
        return { y: -100, opacity: 0 }
      case "bottom":
        return { y: 100, opacity: 0 }
      default:
        return { x: -100, opacity: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: delay,
        duration: duration,
      }}
    >
      {children}
    </motion.div>
  )
}

interface PuzzleGridProps {
  children: ReactNode
  columns?: number
  staggerDelay?: number
  className?: string
}

export const PuzzleGrid = ({ children, columns = 3, staggerDelay = 0.1, className = "" }: PuzzleGridProps) => {
  // Convert children to array to work with them
  const childrenArray = React.Children.toArray(children)

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 ${className}`}>
      {childrenArray.map((child, index) => {
        // Determine direction based on position in grid
        const direction = index % 2 === 0 ? "left" : "right"

        return (
          <PuzzlePiece key={index} delay={index * staggerDelay} direction={direction}>
            {child}
          </PuzzlePiece>
        )
      })}
    </div>
  )
}

export const PuzzleReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-white z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  )
}

