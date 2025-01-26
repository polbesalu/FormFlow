"use client"

import * as React from "react"
import { Command } from "cmdk"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Search,
  AlignLeft,
  CheckSquare,
  ChevronDown,
  CircleDot,
  Hash,
  Mail,
  Phone,
  LinkIcon,
  Upload,
  Calendar,
  Clock,
  Minus,
  Grid2X2,
  Star,
  CreditCard,
  Edit2,
  List,
  Wallet,
  Plus,
  Type,
  Trash2,
  Eye,
  Share2,
  MapPin,
  Sliders,
  Shield,
} from "lucide-react"
import { FormField } from "./form-field"
import { FormPreview } from "./form-preview"
import dynamic from "next/dynamic"
import { formStore } from "@/lib/form-store"

// Dynamically import DragDropContext with ssr disabled
const DragDropContext = dynamic(() => import("@hello-pangea/dnd").then((mod) => mod.DragDropContext), { ssr: false })

// Dynamically import Droppable with ssr disabled
const Droppable = dynamic(() => import("@hello-pangea/dnd").then((mod) => mod.Droppable), { ssr: false })

// Dynamically import Draggable with ssr disabled
const Draggable = dynamic(() => import("@hello-pangea/dnd").then((mod) => mod.Draggable), { ssr: false })

interface FormField {
  id: string
  type: string
  label: string
  required: boolean
  options?: string[]
  content?: string
}

const formBlocks = [
  {
    category: "Basic",
    items: [{ id: "text", name: "Text", icon: Type }],
  },
  {
    category: "Questions",
    items: [
      { id: "short", name: "Short answer", icon: AlignLeft },
      { id: "long", name: "Long answer", icon: AlignLeft },
      { id: "multiple", name: "Multiple choice", icon: CircleDot },
      { id: "checkbox", name: "Checkboxes", icon: CheckSquare },
      { id: "dropdown", name: "Dropdown", icon: ChevronDown },
      { id: "multiselect", name: "Multi-select", icon: CheckSquare },
      { id: "number", name: "Number", icon: Hash },
      { id: "email", name: "Email", icon: Mail },
      { id: "phone", name: "Phone number", icon: Phone },
      { id: "link", name: "Link", icon: LinkIcon },
      { id: "file", name: "File upload", icon: Upload },
      { id: "date", name: "Date", icon: Calendar },
      { id: "time", name: "Time", icon: Clock },
    ],
  },
  {
    category: "Not Implemented Yet",
    items: [
      { id: "scale", name: "Linear scale", icon: Minus },
      { id: "matrix", name: "Matrix", icon: Grid2X2 },
      { id: "rating", name: "Rating", icon: Star },
      { id: "payment", name: "Payment", icon: CreditCard },
      { id: "signature", name: "Signature", icon: Edit2 },
      { id: "ranking", name: "Ranking", icon: List },
      { id: "wallet", name: "Wallet Connect", icon: Wallet },
      { id: "location", name: "Location", icon: MapPin },
      { id: "slider", name: "Slider", icon: Sliders },
      { id: "captcha", name: "Captcha", icon: Shield },
    ],
  },
]

export function FormBuilder() {
  const [open, setOpen] = React.useState(false)
  const [previewOpen, setPreviewOpen] = React.useState(false)
  const [publishOpen, setPublishOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [fields, setFields] = React.useState<FormField[]>([])
  const [selectedField, setSelectedField] = React.useState<FormField | null>(null)
  const [formTitle, setFormTitle] = React.useState("")
  const [formUrl, setFormUrl] = React.useState("")
  const [origin, setOrigin] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    setOrigin(window.location.origin)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const addField = (type: string) => {
    const newField: FormField = {
      id: `field-${Date.now()}`,
      type,
      label: type === "text" ? "Information" : `Untitled ${type}`,
      required: false,
      options: ["Option 1", "Option 2", "Option 3"],
      content: type === "text" ? "Enter your information here" : undefined,
    }
    setFields((prev) => [...prev, newField])
    setOpen(false)
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(fields)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setFields(items)
  }

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields((prev) => prev.map((field) => (field.id === id ? { ...field, ...updates } : field)))
  }

  const deleteField = (id: string) => {
    setFields((prev) => prev.filter((field) => field.id !== id))
    if (selectedField?.id === id) {
      setSelectedField(null)
    }
  }

  const handlePreview = () => {
    setPreviewOpen(true)
  }

  const handlePublish = () => {
    const uniqueId = Math.random().toString(36).substring(2, 15)
    const url = `/forms/${uniqueId}`

    // Store the form data
    formStore.addForm(uniqueId, formTitle, fields)

    setFormUrl(url)
    setPublishOpen(true)
  }

  const handleCopyUrl = React.useCallback(() => {
    if (typeof window !== "undefined" && origin && formUrl) {
      navigator.clipboard.writeText(`${origin}${formUrl}`)
    }
  }, [origin, formUrl])

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="w-full max-w-none px-4 md:px-6 lg:px-8 py-10">
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Form title"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="w-full bg-transparent text-5xl font-bold outline-none placeholder:text-muted-foreground/30"
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={handlePreview}>
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handlePublish}>
                <Share2 className="h-4 w-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="form-fields">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {fields.map((field, index) => (
                    <Draggable key={field.id} draggableId={field.id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <FormField
                            field={field}
                            onUpdate={(updates) => updateField(field.id, updates)}
                            onSelect={() => setSelectedField(field)}
                            onDelete={() => deleteField(field.id)}
                            isSelected={selectedField?.id === field.id}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="text-sm" onClick={() => setOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add form block
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 p-0 outline-none">
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                placeholder="Find questions, input fields and layout options..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="max-h-[500px] overflow-y-auto">
              {formBlocks.map((group) => (
                <div key={group.category} cmdk-group="">
                  <div className="py-2 text-xs" cmdk-group-heading="">
                    {group.category}
                  </div>
                  {group.items
                    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm ${
                          group.category === "Not Implemented Yet"
                            ? "text-gray-400 cursor-not-allowed"
                            : "hover:bg-accent cursor-pointer"
                        }`}
                        role="option"
                        onClick={() => group.category !== "Not Implemented Yet" && addField(item.id)}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </Command>
        </DialogContent>
      </Dialog>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-3xl">
          <FormPreview title={formTitle} fields={fields} />
        </DialogContent>
      </Dialog>

      <Dialog open={publishOpen} onOpenChange={setPublishOpen}>
        <DialogContent>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Form Published!</h2>
            <p>Your form is now available at:</p>
            <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
              <code className="flex-1">
                {origin}
                {formUrl}
              </code>
              <Button variant="ghost" size="sm" onClick={handleCopyUrl}>
                Copy
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}

