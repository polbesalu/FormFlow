import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full max-w-none px-4 md:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold">Form not found</h1>
          <p className="text-muted-foreground">The form you're looking for doesn't exist or has been deleted.</p>
          <Button asChild>
            <Link href="/create">Create a new form</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

