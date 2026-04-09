"use client"

import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Star, Battery } from "lucide-react"

const HeroScene = dynamic(
  () => import("./hero-scene").then((mod) => mod.HeroScene),
  { ssr: false }
)

export function HeroBanner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-stone-200">
      {/* 3D Scene */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Text */}
            <div className="text-left">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none tracking-tighter">
                SOLAR
                <br />
                PANEL
              </h1>
              <Button
                size="lg"
                className="mt-8 rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 pl-6 pr-4"
              >
                See more
                <span className="w-8 h-8 rounded-full bg-background text-foreground flex items-center justify-center">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            {/* Center - Battery Indicator */}
            <div className="flex flex-col items-center justify-center">
              <Badge className="bg-background/80 backdrop-blur-sm text-foreground gap-2 px-4 py-2 rounded-full shadow-lg mb-4">
                <Battery className="h-4 w-4 text-emerald-500" />
                <span className="text-lg font-semibold">92%</span>
              </Badge>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Drag to rotate • Auto-rotating
              </p>
            </div>

            {/* Right Text */}
            <div className="text-right">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none tracking-tighter">
                PURE
                <br />
                SUN
              </h2>
              <div className="mt-8 flex items-center justify-end gap-2">
                <span className="text-sm text-muted-foreground">Reviews</span>
                <Badge variant="outline" className="gap-1 rounded-full bg-background/80 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-solar text-solar" />
                  <span className="font-semibold">4.9</span>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-200 to-transparent z-5" />
    </section>
  )
}
