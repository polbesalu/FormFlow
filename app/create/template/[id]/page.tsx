import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function TemplatePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full max-w-none px-4 md:px-6 lg:px-8 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Customize template</h1>
                <p className="text-muted-foreground">Modify this template to fit your needs</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input type="text" placeholder="Enter form title..." className="text-lg" />
                  <p className="text-sm text-muted-foreground">Press Enter to start customizing your form</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

