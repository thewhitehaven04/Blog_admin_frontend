import appConfig from '@/appConfig'
import { Editor } from '@tinymce/tinymce-react'
import { Button } from 'Components/Common/Button/styles'
import { Column, Row } from 'Components/Styles/Common'
import { type IEditorProps } from 'Components/TextEditor/types'
import { useRef } from 'react'
import { type Editor as TinyMCEEditor } from 'tinymce'

export const TextEditor = ({
  initialValue,
  name,
  label: editorTitle,
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
    <>
      <Row $justify='between' $alignment='center'>
        <label htmlFor={name}>{editorTitle}</label>
        <Button type='button' onClick={handleSave}>
          Save
        </Button>
      </Row>
      <Editor
        apiKey={appConfig.tinyMceApiKey}
        onInit={handleEditorInit}
        textareaName={name}
        initialValue={initialValue}
        init={{
          plugins: 'autoresize',
          toolbar:
            'undo redo | blocks | bold italic underline strikethrough | checklist numlist bullist | charmap | removeformat',
          menubar: false,
          tinycomments_mode: 'embedded',
          content_style: 'body { font-family: Lato }'
        }}
      />
    </>
  )
}
