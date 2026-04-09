"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun } from "lucide-react"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Sun className="h-6 w-6 text-solar" />
          <span className="text-xl font-bold tracking-tight">24SOLAR</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            For Home
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            For Business
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About Us
          </Link>
        </div>

        <Button variant="outline" className="rounded-full border-foreground/20 bg-background/80 backdrop-blur-sm hover:bg-background">
          Contact Us
        </Button>
      </nav>
    </header>
  )
}
