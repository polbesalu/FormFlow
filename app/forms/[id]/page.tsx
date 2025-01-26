"use client"

import { useFormContext } from "@/lib/form-context"
import { FormPreview } from "@/components/form-preview"
import { SiteHeader } from "@/components/site-header"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function FormPage({ params }: { params: { id: string } }) {
  const { getForm } = useFormContext()
  const router = useRouter()
  const [form, setForm] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchForm = () => {
      const fetchedForm = getForm(params.id)
      if (fetchedForm) {
        setForm(fetchedForm)
      } else {
        router.push("/forms/not-found")
      }
      setLoading(false)
    }

    fetchForm()
  }, [params.id, getForm, router])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 w-full max-w-none px-4 md:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-2/3 h-10 mb-6" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="w-1/3 h-6" />
                  <Skeleton className="w-full h-10" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!form) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full max-w-none px-4 md:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <FormPreview title={form.title} fields={form.fields} />
        </div>
      </main>
    </div>
  )
}

