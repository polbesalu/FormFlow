"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { GripVertical, Plus, X, Trash2 } from "lucide-react"

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

interface FormFieldProps {
  field: FormField
  onUpdate: (updates: Partial<FormField>) => void
  onSelect: () => void
  onDelete: () => void
  isSelected: boolean
}

export function FormField({ field, onUpdate, onSelect, onDelete, isSelected }: FormFieldProps) {
  const hasOptions = ["multiple", "checkbox", "dropdown", "multiselect"].includes(field.type)

  const addOption = () => {
    const newOptions = [...(field.options || []), `Option ${(field.options?.length || 0) + 1}`]
    onUpdate({ options: newOptions })
  }

  const updateOption = (index: number, value: string) => {
    const newOptions = [...(field.options || [])]
    newOptions[index] = value
    onUpdate({ options: newOptions })
  }

  const removeOption = (index: number) => {
    const newOptions = field.options?.filter((_, i) => i !== index)
    onUpdate({ options: newOptions })
  }

  const renderOptionInput = (option: string, index: number) => (
    <div key={index} className="flex items-center gap-2 mb-2">
      <Input
        value={option}
        onChange={(e) => updateOption(index, e.target.value)}
        className="flex-1"
        placeholder={`Option ${index + 1}`}
      />
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeOption(index)}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  )

  const renderFieldInput = () => {
    switch (field.type) {
      case "text":
        return (
          <Textarea
            value={field.content}
            onChange={(e) => onUpdate({ content: e.target.value })}
            placeholder="Enter information text here"
            className="min-h-[100px]"
          />
        )
      case "short":
        return <Input placeholder="Short answer text" disabled />
      case "long":
        return <Textarea placeholder="Long answer text" disabled />
      case "multiple":
        return (
          <div className="space-y-4">
            <RadioGroup disabled>
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <div className="space-y-2">
              {field.options?.map((option, index) => renderOptionInput(option, index))}
              <Button variant="outline" size="sm" onClick={addOption}>
                <Plus className="h-4 w-4 mr-2" />
                Add option
              </Button>
            </div>
          </div>
        )
      case "checkbox":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`option-${index}`} disabled />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {field.options?.map((option, index) => renderOptionInput(option, index))}
              <Button variant="outline" size="sm" onClick={addOption}>
                <Plus className="h-4 w-4 mr-2" />
                Add option
              </Button>
            </div>
          </div>
        )
      case "dropdown":
      case "multiselect":
        return (
          <div className="space-y-4">
            <Select disabled>
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
            <div className="space-y-2">
              {field.options?.map((option, index) => renderOptionInput(option, index))}
              <Button variant="outline" size="sm" onClick={addOption}>
                <Plus className="h-4 w-4 mr-2" />
                Add option
              </Button>
            </div>
          </div>
        )
      case "link":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Link URL</Label>
              <Input
                type="url"
                value={field.linkUrl}
                onChange={(e) => onUpdate({ linkUrl: e.target.value })}
                placeholder="https://example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Link Text</Label>
              <Input
                type="text"
                value={field.linkText}
                onChange={(e) => onUpdate({ linkText: e.target.value })}
                placeholder="Click here"
              />
            </div>
          </div>
        )
      case "email":
        return <Input type="email" placeholder="Email" disabled />
      case "number":
        return <Input type="number" placeholder="0" disabled />
      case "phone":
        return <Input type="tel" placeholder="Phone number" disabled />
      case "date":
        return <Input type="date" disabled />
      case "time":
        return <Input type="time" disabled />
      default:
        return <Input disabled />
    }
  }

  return (
    <Card className={`relative ${isSelected ? "ring-2 ring-primary" : ""}`} onClick={onSelect}>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-move opacity-50 hover:opacity-100">
        <GripVertical className="h-4 w-4" />
      </div>
      <CardHeader className="pb-2 pt-4 px-6">
        <div className="flex items-center justify-between">
          <Input
            value={field.label}
            onChange={(e) => onUpdate({ label: e.target.value })}
            className="h-auto border-0 p-0 text-lg font-semibold focus-visible:ring-0"
          />
          <div className="flex items-center space-x-2">
            {field.type !== "text" && (
              <>
                <Switch checked={field.required} onCheckedChange={(checked) => onUpdate({ required: checked })} />
                <Label>Required</Label>
              </>
            )}
            <Button variant="ghost" size="icon" onClick={onDelete} className="h-8 w-8 text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4 pl-12 pr-6">{renderFieldInput()}</CardContent>
    </Card>
  )
}

