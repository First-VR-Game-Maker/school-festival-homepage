"use client"

import { MapPin, ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const accessSteps = [
  {
    step: 1,
    title: "正門から入校",
    description: "正門から入り、受付で来場者証を受け取ってください。",
  },
  {
    step: 2,
    title: "中央通路を直進",
    description: "正門から中央通路をまっすぐ進みます（約2分）。",
  },
  {
    step: 3,
    title: "〇号館へ",
    description: "右手に見える〇号館に入り、階段またはエレベーターで〇階へ。",
  },
  {
    step: 4,
    title: "〇〇教室に到着",
    description: "廊下を左に進むと〇〇教室があります。看板が目印です。",
  },
]

export function CampusAccess() {
  return (
    <section id="access" className="py-24 px-4 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Access</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            校内アクセス
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            正門から展示教室までのルートをご案内します。
          </p>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-6 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-orange-600" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pl-4">
            <div>
              <p className="text-sm text-primary font-semibold mb-1 uppercase tracking-wider">Location</p>
              <p className="text-2xl sm:text-3xl font-black text-foreground">〇号館 〇階 〇〇教室</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-primary font-semibold mb-1 uppercase tracking-wider">Time</p>
              <p className="text-2xl sm:text-3xl font-black text-primary">約5分</p>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4">
          {accessSteps.map((item, index) => (
            <motion.div
              key={item.step}
              className="group relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all">
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-orange-600 text-primary-foreground flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(255,165,0,0.3)]"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  {item.step}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < accessSteps.length - 1 && (
                  <ChevronDown className="hidden sm:block h-5 w-5 text-primary flex-shrink-0 mt-2 rotate-[-90deg]" />
                )}
              </div>
              {index < accessSteps.length - 1 && (
                <div className="absolute left-9 top-full w-0.5 h-4 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div 
          className="mt-8 p-4 rounded-xl bg-secondary/50 border border-primary/20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-primary">TIP：</span>
            迷った場合は、校内の案内スタッフにお声がけください。〇号館の場所をご案内します。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
