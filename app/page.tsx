import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CampusAccess } from "@/components/campus-access"
import { Instructions } from "@/components/instructions"
import { CommonMistakes } from "@/components/common-mistakes"
import { DeveloperComments } from "@/components/developer-comments"
import { QuickLinks } from "@/components/quick-links"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CampusAccess />
      <Instructions />
      <CommonMistakes />
      <DeveloperComments />
      <QuickLinks />
      <Footer />
    </main>
  )
}
