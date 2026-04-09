"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Star, CheckCircle2, Droplets, Battery, Zap } from "lucide-react"
import Image from "next/image"

export function FeatureCards() {
  return (
    <section className="relative z-10 px-6 lg:px-12 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {/* IP68 Waterproof Card */}
        <Card className="bg-background p-6 rounded-2xl border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <Droplets className="h-4 w-4" />
            <span>Resistance to precipitation</span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold text-foreground">IP68</span>
            <Badge className="bg-solar text-solar-foreground text-xs">Mt</Badge>
          </div>
          <p className="text-xl font-semibold text-foreground">Waterproof</p>
          <div className="mt-6 flex justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-transparent rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-32 bg-gradient-to-t from-slate-800 to-slate-600 rounded-t-sm" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-8">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-4 bg-sky-400 rounded-full opacity-60"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 20}%`,
                      transform: "rotate(15deg)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Rated #1 Card */}
        <Card className="bg-slate-700 p-6 rounded-2xl text-white overflow-hidden relative">
          <div className="absolute top-4 right-4 flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-700" />
            <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-700" />
            <div className="w-8 h-8 rounded-full bg-solar border-2 border-slate-700 flex items-center justify-center text-xs font-bold text-slate-900">
              +8k
            </div>
          </div>
          <Badge className="bg-background text-foreground mb-4 gap-1">
            <ArrowUpRight className="h-3 w-3" />
            Rated #1
          </Badge>
          <h3 className="text-2xl font-semibold mt-8 mb-2">
            Great selection of <br />
            <span className="text-solar">solar panels</span> in <br />
            SunSolar company
          </h3>
          <div className="flex items-center gap-2 mt-6 text-slate-300 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Trusted by 50,000+ people
          </div>
        </Card>

        {/* Inverter Card */}
        <Card className="bg-stone-100 p-6 rounded-2xl border-border/50 relative overflow-hidden">
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors">
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <h3 className="text-xl font-semibold text-foreground mb-1">
            Inverter for solar<br />panels
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Portable unit with large<br />storage capacity
          </p>
          <Badge variant="outline" className="rounded-full text-xs">
            24solar.com
          </Badge>
          <div className="mt-4 flex justify-end">
            <div className="relative w-32 h-32">
              <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg transform rotate-6 shadow-xl">
                <div className="absolute inset-2 border border-slate-600 rounded">
                  <div className="absolute top-2 left-2 right-2 h-3 bg-amber-500 rounded-sm" />
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <Battery className="h-3 w-3 text-emerald-400" />
                    <Zap className="h-3 w-3 text-solar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
