"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, Github, Mail } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Email", icon: Mail, href: "mailto:hello@example.com" },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              ANH SON.
            </motion.a>
            <p className="text-sm text-muted-foreground mt-2">
              Visual Diary · Modern Lifestyle
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ANH SON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
