import { type Editor } from 'tinymce'

export interface IEditorProps {
  onInit: (
    e: {
      readonly type: string
      readonly target: any
      readonly isDefaultPrevented: () => boolean
      readonly preventDefault: () => void
      readonly isPropagationStopped: () => boolean
      readonly stopPropagation: () => void
      readonly isImmediatePropagationStopped: () => boolean
      readonly stopImmediatePropagation: () => void
    },
    editor: Editor
  ) => void
  initialValue?: string
  name?: string
}
