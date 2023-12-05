import appConfig from '@/appConfig'
import { Editor } from '@tinymce/tinymce-react'
import { Button } from 'Components/button/styles'
import { Row } from 'Components/styles/generic'
import { type IEditorProps } from 'Components/textEditor/types'
import { useRef } from 'react'
import { type Editor as TinyMCEEditor } from 'tinymce'

export const TextEditor = ({
  initialValue,
  name,
  onSave
}: IEditorProps): JSX.Element => {
  const editorRef = useRef<TinyMCEEditor | null>()
  const handleEditorInit = (_: any, editor: TinyMCEEditor): void => {
    editorRef.current = editor
  }

  const handleSave = (): void => {
    if (editorRef.current != null) {
      onSave(editorRef.current?.getContent() ?? '')
      editorRef.current?.setDirty(false)
    }
  }

  return (
    <Row $alignment='start' $justify='between'>
      <Editor
        apiKey={appConfig.tinyMceApiKey}
        onInit={handleEditorInit}
        textareaName={name}
        initialValue={initialValue}
        init={{
          toolbar:
            'undo redo | blocks | bold italic underline strikethrough | checklist numlist bullist | charmap | removeformat',
          menubar: false,
          tinycomments_mode: 'embedded',
          content_style: 'body { font-family: Lato }'
        }}
      />
      <Button type='button' onClick={handleSave}>
        Save
      </Button>
    </Row>
  )
}
