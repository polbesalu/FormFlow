import { formStore } from "@/lib/form-store"
import { FormPreview } from "@/components/form-preview"
import { SiteHeader } from "@/components/site-header"
import { notFound } from "next/navigation"

export default function FormPage({ params }: { params: { id: string } }) {
  const form = formStore.getForm(params.id)

  if (!form) {
    notFound()
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

