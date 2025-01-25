import { FormBuilder } from "@/components/form-builder"
import { SiteHeader } from "@/components/site-header"

export default function NewFormPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1 w-full max-w-none">
        <FormBuilder />
      </div>
    </div>
  )
}

