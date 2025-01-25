import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-14 items-center justify-between max-w-screen-2xl mx-auto">
        <Link href="/" className="font-bold text-lg sm:text-xl">
          FormFlow
        </Link>
        <Button asChild size="sm" className="h-8 sm:h-9">
          <Link href="/create">Create form</Link>
        </Button>
      </div>
    </header>
  )
}

