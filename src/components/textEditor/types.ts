export interface IEditorProps {
  initialValue?: string
  name: string
  onSave: (content: string) => void
}
