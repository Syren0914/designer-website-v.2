"use client"

import { motion } from "framer-motion"
import { Instagram, Dribbble, Linkedin, Github, Twitter } from "lucide-react"

interface SocialIconProps {
  platform: string
  url: string
  size?: number
  showLabel?: boolean
}

const SocialIcon = ({ platform, url, size = 18, showLabel = false }: SocialIconProps) => {
  const getIcon = () => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram size={size} />
      case "behance":
      case "dribbble":
        return <Dribbble size={size} />
      case "linkedin":
        return <Linkedin size={size} />
      case "github":
        return <Github size={size} />
      case "twitter":
      case "x":
        return <Twitter size={size} />
      default:
        return <Instagram size={size} />
    }
  }

  return (
    <motion.a
      href={url}
      className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      aria-label={`Visit our ${platform} page`}
    >
      {getIcon()}
      {showLabel && <span className="hidden md:inline">{platform}</span>}
    </motion.a>
  )
}

export default function SocialIcons({ showLabels = true, iconSize = 18 }) {
  const socialPlatforms = [
    { platform: "Instagram", url: "https://www.instagram.com/ssediqg/" },
    { platform: "Behance", url: "#" },
    { platform: "LinkedIn", url: "#" },
  ]

  return (
    <div className="flex space-x-8">
      {socialPlatforms.map((social) => (
        <SocialIcon
          key={social.platform}
          platform={social.platform}
          url={social.url}
          size={iconSize}
          showLabel={showLabels}
        />
      ))}
    </div>
  )
}

