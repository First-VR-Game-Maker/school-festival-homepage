"use client"

import { MessageSquare, Code, Heart } from "lucide-react"
import { motion } from "framer-motion"

const comments = [
  {
    name: "開発者A",
    role: "プロジェクトリーダー",
    comment: "このプロジェクトは、チーム全員で約半年かけて作り上げました。たくさんの試行錯誤がありましたが、皆さんに楽しんでいただけると嬉しいです。",
  },
  {
    name: "開発者B",
    role: "プログラマー",
    comment: "技術的に挑戦的な部分も多く、何度もつまずきました。でも、その分やりがいのある開発でした。ぜひ細部まで楽しんでください！",
  },
  {
    name: "開発者C",
    role: "デザイナー",
    comment: "見た目だけでなく、使いやすさにもこだわりました。直感的に操作できるよう工夫したので、初めての方でも楽しめると思います。",
  },
]

export function DeveloperComments() {
  return (
    <section id="developers" className="py-24 px-4 relative overflow-hidden gradient-purple">
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
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Developers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            開発者コメント
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            この展示を作った開発チームからのメッセージです。
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {comments.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm group hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Racing stripe */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-orange-600 rounded-l-xl" />
              
              <MessageSquare className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="mb-4 pl-2">
                <p className="font-black text-foreground text-lg">{item.name}</p>
                <p className="text-sm text-primary font-medium">{item.role}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-2">
                {item.comment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Thank you message */}
        <motion.div 
          className="mt-12 text-center p-8 rounded-xl border border-primary/30 bg-card/60 backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
          </motion.div>
          <p className="text-xl text-foreground font-black mb-2 relative z-10">
            ご来場ありがとうございます
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto relative z-10">
            皆さんに楽しんでいただけることが、私たちの一番の喜びです。
            何かご不明な点があれば、お気軽にスタッフまでお声がけください。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
