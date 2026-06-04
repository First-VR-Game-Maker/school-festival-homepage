"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-primary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-purple" />
      <div className="absolute inset-0 stripe-bg" />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-2xl font-black text-foreground">頭文字D</span>
          <span className="text-lg font-bold text-primary italic">-2nd season-</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          presented by <span className="text-primary font-semibold">Nanosoft</span>
        </p>
        <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
        <p className="text-xs text-muted-foreground">
          文化祭 2026 | 〇号館 〇階 〇〇教室
        </p>
        <div className="mt-6 pt-6 border-t border-primary/20">
          <p className="text-xs text-muted-foreground">
            お問い合わせは会場スタッフまで
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
