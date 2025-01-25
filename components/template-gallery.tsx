"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

const templates = [
  {
    id: "registration",
    title: "Registration form",
    description: "Collect user registration details",
    author: "Marie Martens",
    company: "Tally",
    downloads: "34,044",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-25%20a%20las%2013.28.44-3E4626KPsJBszKx1zWyk7R4Pv4WomY.png",
    preview: "/templates/registration.png",
  },
  {
    id: "contact",
    title: "Contact form",
    description: "Simple contact form template",
    author: "Marie Martens",
    company: "Tally",
    downloads: "25,479",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-25%20a%20las%2013.28.44-3E4626KPsJBszKx1zWyk7R4Pv4WomY.png",
    preview: "/templates/contact.png",
  },
  {
    id: "lead-gen",
    title: "Lead generation form",
    description: "Capture and qualify leads",
    author: "Marie Martens",
    company: "Tally",
    downloads: "24,705",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-25%20a%20las%2013.28.44-3E4626KPsJBszKx1zWyk7R4Pv4WomY.png",
    preview: "/templates/lead-gen.png",
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "creators", label: "Creators" },
  { id: "product", label: "Product" },
  { id: "marketing", label: "Marketing" },
  { id: "hr", label: "HR" },
  { id: "office", label: "Office" },
  { id: "personal", label: "Personal" },
]

export function TemplateGallery() {
  const router = useRouter()

  return (
    <div className="space-y-8">
      <div className="flex gap-2 pb-4 overflow-x-auto">
        {categories.map((category) => (
          <Button key={category.id} variant={category.id === "all" ? "default" : "outline"} className="rounded-full">
            {category.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative group">
                <img
                  src={template.preview || "/placeholder.svg"}
                  alt={template.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button onClick={() => router.push(`/create/template/${template.id}`)}>Use this template</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center gap-4 w-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={template.image} />
                  <AvatarFallback>MM</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">{template.title}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {template.author} from {template.company}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">{template.downloads}</div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

