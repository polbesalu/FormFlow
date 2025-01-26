"use client"

import { createContext, useContext, useEffect, useState } from "react"

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

interface StoredForm {
  id: string
  title: string
  fields: FormField[]
}

interface FormContextType {
  forms: Map<string, StoredForm>
  addForm: (id: string, title: string, fields: FormField[]) => void
  getForm: (id: string) => StoredForm | undefined
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [forms, setForms] = useState<Map<string, StoredForm>>(new Map())

  // Load forms from localStorage on mount
  useEffect(() => {
    const storedForms = localStorage.getItem("forms")
    if (storedForms) {
      setForms(new Map(JSON.parse(storedForms)))
    }
  }, [])

  const addForm = (id: string, title: string, fields: FormField[]) => {
    setForms((prevForms) => {
      const newForms = new Map(prevForms)
      newForms.set(id, { id, title, fields })
      // Save to localStorage
      localStorage.setItem("forms", JSON.stringify(Array.from(newForms.entries())))
      return newForms
    })
  }

  const getForm = (id: string) => {
    return forms.get(id)
  }

  return <FormContext.Provider value={{ forms, addForm, getForm }}>{children}</FormContext.Provider>
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}

