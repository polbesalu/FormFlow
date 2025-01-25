"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface FormField {
  id: string
  type: string
  label: string
  required: boolean
  options?: string[]
  content?: string
  linkUrl?: string
  linkText?: string
}

interface FormPreviewProps {
  title: string
  fields: FormField[]
}

export function FormPreview({ title, fields }: FormPreviewProps) {
  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
        return (
          <div className="prose dark:prose-invert">
            <p>{field.content}</p>
          </div>
        )
      case "short":
        return <Input placeholder="Short answer" required={field.required} />
      case "long":
        return <Textarea placeholder="Long answer" required={field.required} />
      case "multiple":
        return (
          <RadioGroup required={field.required}>
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${field.id}-${index}`} />
                <Label htmlFor={`${field.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        )
      case "checkbox":
        return (
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`${field.id}-${index}`} />
                <Label htmlFor={`${field.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </div>
        )
      case "dropdown":
        return (
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case "multiselect":
        return (
          <Select multiple>
            <SelectTrigger>
              <SelectValue placeholder="Select options" />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case "link":
        return (
          <Link
            href={field.linkUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {field.linkText || field.linkUrl || "Click here"}
          </Link>
        )
      case "email":
        return <Input type="email" placeholder="Email" required={field.required} />
      case "number":
        return <Input type="number" placeholder="Number" required={field.required} />
      case "phone":
        return <Input type="tel" placeholder="Phone number" required={field.required} />
      case "date":
        return <Input type="date" required={field.required} />
      case "time":
        return <Input type="time" required={field.required} />
      case "file":
        return <Input type="file" required={field.required} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{title || "Untitled Form"}</h1>
      </div>
      <form className="space-y-6">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label>
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            {renderField(field)}
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

