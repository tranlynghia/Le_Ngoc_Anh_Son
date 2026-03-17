"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430123-I8liSkJUxhKeRfC83VAxNQ3BaSgKXA.jpeg"
              alt="About me"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Về tôi
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-8 text-balance">
              Kể chuyện qua từng khoảnh khắc
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mình là một người trẻ đam mê thời trang và lối sống hiện đại. Mỗi bức ảnh là một mảnh ghép trong visual diary của mình.
              </p>
              <p>
                Phong cách của mình xoay quanh sự tối giản, thanh lịch nhưng vẫn giữ được cá tính riêng. Từ những buổi sáng tại gym, những buổi chiều cùng bạn bè, đến những khoảnh khắc một mình trong thang máy - tất cả đều là câu chuyện.
              </p>
              <p>
                Tin rằng phong cách không chỉ là quần áo, mà là cách bạn sống, cách bạn nhìn nhận thế giới xung quanh.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl lg:text-4xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Visual Stories</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold">4+</div>
                <div className="text-sm text-muted-foreground mt-1">Năm hành trình</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold">∞</div>
                <div className="text-sm text-muted-foreground mt-1">Sáng tạo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
