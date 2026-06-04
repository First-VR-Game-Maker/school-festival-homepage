"use client"

import { useState } from "react"
import { BookOpen, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const instructions = [
  {
    id: 1,
    title: "受付・整理券の確認",
    content: "入口で整理券を提示してください。スタッフが番号を確認し、席へご案内します。整理券をお持ちでない場合は、当日券の配布状況をお尋ねください。",
  },
  {
    id: 2,
    title: "事前設定の確認",
    content: "体験を始める前に、設定サイトで登録した内容が正しく反映されているか確認してください。設定が反映されていない場合は、スタッフにお申し付けください。",
  },
  {
    id: 3,
    title: "操作の開始",
    content: "スタッフの合図で操作を開始してください。画面の指示に従って進めます。不明な点があれば、いつでもスタッフにお声がけください。",
  },
  {
    id: 4,
    title: "体験中の注意",
    content: "体験中は周りのお客様のご迷惑にならないようお願いします。大きな声や急な動きは控え、落ち着いて操作をお楽しみください。",
  },
  {
    id: 5,
    title: "終了後",
    content: "体験が終了したら、スタッフの指示に従って退出してください。忘れ物がないかご確認をお願いします。",
  },
]

export function Instructions() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section id="instructions" className="py-24 px-4 relative overflow-hidden gradient-purple">
      {/* Background decoration */}
      <div className="absolute inset-0 stripe-bg" />
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
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">How to Play</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            操作説明
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            スムーズに体験いただくために、以下の手順をご確認ください。
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {instructions.map((item, index) => (
            <motion.div
              key={item.id}
              className="border border-border rounded-xl bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black transition-all ${
                    openId === item.id 
                      ? 'bg-gradient-to-br from-primary to-orange-600 text-primary-foreground shadow-[0_0_15px_rgba(255,165,0,0.4)]' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {item.id}
                  </span>
                  <span className={`font-bold transition-colors ${openId === item.id ? 'text-primary' : 'text-foreground'}`}>
                    {item.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className={`h-5 w-5 transition-colors ${openId === item.id ? 'text-primary' : 'text-muted-foreground'}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-20">
                      <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-orange-600 mb-3" />
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
