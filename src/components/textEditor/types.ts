export interface IEditorProps {
  initialValue?: string
  name: string
  label: string
  onSave: (content: string) => void
}
