"use client"

import { useFormContext } from "@/lib/form-context"
import { FormPreview } from "@/components/form-preview"
import { SiteHeader } from "@/components/site-header"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function FormPage({ params }: { params: { id: string } }) {
  const { getForm } = useFormContext()
  const router = useRouter()
  const form = getForm(params.id)

  useEffect(() => {
    if (!form) {
      router.push("/forms/not-found")
    }
  }, [form, router])

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

