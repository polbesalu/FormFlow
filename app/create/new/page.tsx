import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"

const FormBuilder = dynamic(() => import("@/components/form-builder").then((mod) => mod.FormBuilder), {
  ssr: false,
})

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

