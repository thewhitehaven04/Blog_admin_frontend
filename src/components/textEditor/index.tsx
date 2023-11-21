import appConfig from '@/appConfig'
import { Editor } from '@tinymce/tinymce-react'
import { type IEditorProps } from 'Components/textEditor/types'

export const TextEditor = ({
  onInit,
  initialValue,
  name
}: IEditorProps): JSX.Element => {
  return (
    <Editor
      apiKey={appConfig.tinyMceApiKey}
      onInit={onInit}
      textareaName={name}
      initialValue={initialValue}
      init={{
        plugins:
          'tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
        toolbar:
          'undo redo | blocks | bold italic underline strikethrough | checklist numlist bullist | charmap | removeformat',
        menubar: false,
        tinycomments_mode: 'embedded',
        content_style: 'body { font-family: Lato }'
      }}
    />
  )
}
