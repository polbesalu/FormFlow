import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { FileText, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CreatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full max-w-none px-4 md:px-6 lg:px-8 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Create a new form</h1>
                <p className="text-muted-foreground">Get started by creating a form from scratch or using a template</p>
              </div>

              <div className="grid gap-4">
                <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                  <Link href="/create/new">
                    <FileText className="h-5 w-5 mr-2" />
                    <div className="text-left">
                      <div className="font-medium">Start from scratch</div>
                      <div className="text-sm text-muted-foreground">
                        Create a custom form with our drag-and-drop builder
                      </div>
                    </div>
                  </Link>
                </Button>

                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Not implemented yet</div>
                  <Button
                    variant="outline"
                    className="h-auto p-4 justify-start w-full opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    <div className="text-left">
                      <div className="font-medium">Use a template</div>
                      <div className="text-sm text-muted-foreground">
                        Choose from our pre-built templates to get started quickly
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

