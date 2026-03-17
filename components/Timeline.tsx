"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { timelineData } from "@/data/timeline"

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Journey
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 text-balance">
            Hành trình của tôi
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-background" />

              {/* Content */}
              <div className={`ml-20 lg:ml-0 lg:w-1/2 ${
                index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
              }`}>
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
