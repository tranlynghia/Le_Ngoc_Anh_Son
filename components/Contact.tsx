"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, CheckCircle, Loader2 } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState("success")
    
    // Reset after 3 seconds
    setTimeout(() => {
      setFormState("idle")
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Contact
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 text-balance">
            Liên hệ với tôi
          </h2>
          <p className="text-muted-foreground text-lg mt-4 text-pretty">
            Có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho mình.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Tên của bạn
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/50 focus:outline-none transition-colors"
              placeholder="Nhập tên của bạn"
              disabled={formState !== "idle"}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/50 focus:outline-none transition-colors"
              placeholder="email@example.com"
              disabled={formState !== "idle"}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Tin nhắn
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/50 focus:outline-none transition-colors resize-none"
              placeholder="Nội dung tin nhắn..."
              disabled={formState !== "idle"}
            />
          </div>

          <button
            type="submit"
            disabled={formState !== "idle"}
            className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              formState === "success"
                ? "bg-green-500 text-white"
                : "bg-foreground text-background hover:bg-foreground/90"
            }`}
          >
            {formState === "idle" && (
              <>
                <Send size={18} />
                Gửi tin nhắn
              </>
            )}
            {formState === "loading" && (
              <>
                <Loader2 size={18} className="animate-spin" />
                Đang gửi...
              </>
            )}
            {formState === "success" && (
              <>
                <CheckCircle size={18} />
                Đã gửi thành công!
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
