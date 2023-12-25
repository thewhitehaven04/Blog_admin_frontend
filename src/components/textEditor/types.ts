export interface IEditorProps {
  initialValue?: string
  name: string
  label: string
  required: boolean
  onSave: (content: string) => void
}
