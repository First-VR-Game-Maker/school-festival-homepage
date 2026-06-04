"use client"

import { AlertTriangle, X, Check } from "lucide-react"
import { motion } from "framer-motion"

const mistakes = [
  {
    wrong: "設定サイトで登録せずに来場する",
    correct: "事前に設定サイトで必要情報を登録してから来場",
    tip: "当日の混雑を避けるため、必ず事前登録をお願いします。",
  },
  {
    wrong: "整理券の時間に遅れる",
    correct: "指定時間の5分前には展示場所に到着",
    tip: "遅れると次の回に回されることがあります。",
  },
  {
    wrong: "操作中にボタンを連打する",
    correct: "1回押したら画面が変わるまで待つ",
    tip: "連打すると誤動作の原因になります。",
  },
  {
    wrong: "スタッフの説明を聞かずに操作を始める",
    correct: "スタッフの説明が終わってから操作開始",
    tip: "重要な注意事項を見逃す可能性があります。",
  },
  {
    wrong: "途中で席を離れる",
    correct: "体験が終了するまで席に座ったまま",
    tip: "途中退席は他のお客様のご迷惑になります。",
  },
]

export function CommonMistakes() {
  return (
    <section id="mistakes" className="py-24 px-4 relative overflow-hidden">
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
            <AlertTriangle className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Caution</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            よくある間違い
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            スムーズな体験のために、以下の点にご注意ください。
          </p>
        </motion.div>

        <div className="space-y-4">
          {mistakes.map((item, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-xl bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Wrong */}
                <div className="p-5 bg-red-500/5 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                  <div className="flex items-start gap-3 pl-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs text-red-500 font-bold mb-1 uppercase tracking-wider">NG</p>
                      <p className="text-foreground font-medium">{item.wrong}</p>
                    </div>
                  </div>
                </div>
                {/* Correct */}
                <div className="p-5 bg-green-500/5 relative">
                  <div className="absolute top-0 left-0 md:hidden w-1 h-full bg-green-500" />
                  <div className="flex items-start gap-3 pl-3 md:pl-0">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-green-500 font-bold mb-1 uppercase tracking-wider">OK</p>
                      <p className="text-foreground font-medium">{item.correct}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tip */}
              <div className="px-5 py-3 bg-secondary/30 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-primary">POINT：</span> {item.tip}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
