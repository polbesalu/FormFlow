import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  name: string
  role: string
  company: string
  content: string
  image: string
}

export function TestimonialCard({ name, role, company, content, image }: TestimonialProps) {
  return (
    <Card className="w-[350px] mx-4 flex-shrink-0">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm text-muted-foreground">"{content}"</blockquote>
      </CardContent>
    </Card>
  )
}

