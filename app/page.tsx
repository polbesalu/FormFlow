import { Marquee } from "@/components/ui/marquee"
import { SiteHeader } from "@/components/site-header"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "FormFlow completely transformed our user feedback process. The interface is so intuitive that anyone on our team can create forms in minutes.",
    image: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    company: "InnovateLabs",
    content:
      "After trying countless form builders, FormFlow stands out. It's lightning fast, beautiful, and actually enjoyable to use.",
    image: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Emma Thompson",
    role: "Marketing Director",
    company: "GrowthCo",
    content:
      "The conditional logic features are game-changing. We've increased our lead conversion rate by 40% since switching to FormFlow.",
    image: "https://avatar.vercel.sh/emma",
  },
  {
    name: "David Kim",
    role: "Developer",
    company: "CodeWorks",
    content:
      "As a developer, I appreciate how well-thought-out the API is. Integration was a breeze, and the customization options are endless.",
    image: "https://avatar.vercel.sh/david",
  },
  {
    name: "Lisa Wang",
    role: "UX Researcher",
    company: "DesignLab",
    content: "The accessibility features are top-notch. Finally, a form builder that takes inclusive design seriously!",
    image: "https://avatar.vercel.sh/lisa",
  },
  {
    name: "James Wilson",
    role: "E-commerce Director",
    company: "ShopifyPlus",
    content: "Our checkout completion rates improved by 25% after implementing FormFlow's smart validation features.",
    image: "https://avatar.vercel.sh/james",
  },
  {
    name: "Ana Martinez",
    role: "HR Manager",
    company: "TalentFirst",
    content:
      "Managing job applications has never been easier. The file upload and automatic organization features save us hours every week.",
    image: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Tom Anderson",
    role: "Event Organizer",
    company: "EventPro",
    content:
      "The real-time collaboration features are incredible. Our team can work together on forms without stepping on each other's toes.",
    image: "https://avatar.vercel.sh/tom",
  },
]

const firstHalf = testimonials.slice(0, testimonials.length / 2)
const secondHalf = testimonials.slice(testimonials.length / 2)

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full max-w-none px-4 md:px-6 lg:px-8 py-24 space-y-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            The simplest way to create
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              beautiful forms
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Say goodbye to complex form builders. Meet FormFlow — the intuitive, powerful form creator you've been
            waiting for.
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/create">Create your first form</Link>
            </Button>
            <p className="text-sm text-muted-foreground">No signup required to get started</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
          <div className="w-full max-w-none px-4 md:px-6 lg:px-8 mb-10">
            <h2 className="text-3xl font-bold text-center">Loved by thousands of creators</h2>
          </div>
          <div className="relative">
            <Marquee className="py-4" pauseOnHover>
              <div className="flex gap-4">
                {firstHalf.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </div>
            </Marquee>
            <Marquee className="py-4" pauseOnHover reverse>
              <div className="flex gap-4">
                {secondHalf.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </div>
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-50 dark:from-slate-900" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-50 dark:from-slate-900" />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-none px-4 md:px-6 lg:px-8 py-24 space-y-16">
          <h2 className="text-3xl font-bold text-center">Everything you need to create amazing forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beautiful by default",
                description: "Professionally designed templates and themes that make your forms stand out.",
              },
              {
                title: "Powerful features",
                description: "Advanced logic, file uploads, payments, and more. All without coding.",
              },
              {
                title: "Works everywhere",
                description: "Responsive forms that work perfectly on any device and embed anywhere.",
              },
            ].map((feature) => (
              <div key={feature.title} className="space-y-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

