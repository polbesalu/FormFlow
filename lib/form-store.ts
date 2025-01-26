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
  
  class FormStore {
    private forms: Map<string, StoredForm> = new Map()
  
    addForm(id: string, title: string, fields: FormField[]): void {
      this.forms.set(id, { id, title, fields })
    }
  
    getForm(id: string): StoredForm | undefined {
      return this.forms.get(id)
    }
  }
  
  // Create a singleton instance
  export const formStore = new FormStore()
  
  