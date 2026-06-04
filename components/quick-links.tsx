"use client"

import { Button } from "@/components/ui/button"
import { Ticket, Settings, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function QuickLinks() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 stripe-bg opacity-50" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            各種リンク
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            整理券の取得と事前設定はこちらから。
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Ticket Link */}
          <motion.div 
            className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-8 group hover:border-primary/50 transition-all"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Racing stripe */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-orange-600" />
            
            <motion.div 
              className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors"
            />
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Ticket className="h-14 w-14 text-primary mb-4" />
              </motion.div>
              <h3 className="text-2xl font-black text-foreground mb-2">整理券サイト</h3>
              <p className="text-muted-foreground mb-6">
                体験には整理券が必要です。当日券は数に限りがございますので、お早めにお取りください。
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-primary-foreground font-bold px-6 shadow-[0_0_20px_rgba(255,165,0,0.3)] hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] transition-all">
                <a href="https://example.com/ticket" target="_blank" rel="noopener noreferrer">
                  整理券を取得
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Settings Link */}
          <motion.div 
            className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-8 group hover:border-primary/50 transition-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Racing stripe */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-orange-600" />
            
            <motion.div 
              className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors"
            />
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Settings className="h-14 w-14 text-primary mb-4" />
              </motion.div>
              <h3 className="text-2xl font-black text-foreground mb-2">設定サイト</h3>
              <p className="text-muted-foreground mb-6">
                体験をより楽しむための事前設定ができます。来場前に登録しておくとスムーズです。
              </p>
              <Button variant="outline" asChild className="border-primary/50 text-primary hover:bg-primary/10 font-bold px-6 transition-all">
                <a href="https://example.com/settings" target="_blank" rel="noopener noreferrer">
                  設定サイトへ
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div 
          className="mt-8 p-4 rounded-xl bg-secondary/50 border border-primary/20 backdrop-blur-sm text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">
            リンク先は外部サイトです。接続に問題がある場合は、会場のスタッフにお声がけください。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
