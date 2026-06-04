"use client"

import { Button } from "@/components/ui/button"
import { Ticket, Settings, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden stripe-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal racing stripes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(255,165,0,0.1) 100px, rgba(255,165,0,0.1) 102px)'
          }} />
        </div>
        
        {/* Glow effects */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Speed lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
        <motion.div
          className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">文化祭 2026 出展</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span 
            className="block text-foreground drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]"
            style={{ textShadow: '0 0 40px rgba(255,165,0,0.2)' }}
          >
            頭文字D
          </motion.span>
          <motion.span 
            className="block text-primary text-4xl sm:text-5xl md:text-6xl mt-2 italic font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ textShadow: '0 0 30px rgba(255,165,0,0.4)' }}
          >
            -2nd season-
          </motion.span>
          <motion.span 
            className="block text-muted-foreground text-xl sm:text-2xl md:text-3xl mt-4 font-normal tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            presented by <span className="text-primary font-semibold">Nanosoft</span>
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          展示の概要をここに記載します。どんな体験ができるのか、見どころは何かなど、来場者が興味を持つ内容を簡潔にまとめましょう。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 glow-accent transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)]">
            <a href="https://example.com/ticket" target="_blank" rel="noopener noreferrer">
              <Ticket className="mr-2 h-5 w-5" />
              整理券を取得
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary/50 text-primary hover:bg-primary/10 font-bold px-8 transition-all hover:scale-105">
            <a href="https://example.com/settings" target="_blank" rel="noopener noreferrer">
              <Settings className="mr-2 h-5 w-5" />
              設定サイトへ
            </a>
          </Button>
        </motion.div>

        {/* Quick Info */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            { title: "〇号館", subtitle: "〇階 〇〇教室" },
            { title: "10:00-16:30", subtitle: "両日開催" },
            { title: "整理券制", subtitle: "当日配布" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center p-4 rounded-lg border border-border bg-card/80 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card racing-stripe"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl font-bold text-primary">{item.title}</span>
              <span className="text-sm text-muted-foreground mt-1">{item.subtitle}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
