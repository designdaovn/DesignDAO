import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { FeatureCards } from "@/components/feature-cards"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-200">
      <Header />
      <HeroBanner />
      <FeatureCards />
    </main>
  )
}
