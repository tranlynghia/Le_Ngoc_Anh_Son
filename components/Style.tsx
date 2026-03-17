"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { styleTags } from "@/data/style"

export default function Style() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="style" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Signature
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 text-balance">
            Phong cách riêng
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto text-pretty">
            Những từ khóa định hình identity và cách tiếp cận thời trang của mình
          </p>
        </motion.div>

        {/* Style Tags Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {styleTags.map((tag, index) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 lg:p-10 rounded-2xl bg-secondary/50 border border-border/50 hover:border-foreground/20 transition-all duration-300 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">{tag.label}</h3>
                <p className="text-muted-foreground">{tag.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl lg:text-4xl font-medium italic text-balance">
            &ldquo;Phong cách là cách bạn kể câu chuyện của mình mà không cần nói một lời.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
