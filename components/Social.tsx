"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram, Youtube, Github, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color: "hover:text-pink-500",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    href: "https://tiktok.com",
    color: "hover:text-foreground",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
    color: "hover:text-red-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:text-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@example.com",
    color: "hover:text-blue-500",
  },
]

export default function Social() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Connect
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 text-balance">
            Kết nối với tôi
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto text-pretty">
            Theo dõi hành trình và những khoảnh khắc hàng ngày của mình
          </p>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:border-foreground/20 transition-all duration-300 group ${social.color}`}
            >
              <social.icon className="w-6 h-6 mb-3 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
