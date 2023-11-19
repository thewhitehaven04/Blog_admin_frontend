import appConfig from '@/appConfig'
import { Editor } from '@tinymce/tinymce-react'
import { Button } from 'Components/button/styles'
import { CardWrapper } from 'Components/cardWrapper'
import { Input } from 'Components/input'
import { type IPostEditForm } from 'Components/postEditForm/types'
import { type Editor as TinyMCEEditor } from 'tinymce'
import { Column } from 'Components/userData/styles'
import { useRef } from 'react'
import { Form } from 'react-router-dom'

export const PostEditForm = ({
  id,
  title,
  text
}: IPostEditForm): JSX.Element => {
  const editorRef = useRef<null | TinyMCEEditor>(null)

  return (
    <CardWrapper>
      <Form action={`/post/${id}/edit`} method='POST'>
        <Column>
          <label>Post title</label>
          <Input name='title' type='text' defaultValue={title} />
        </Column>
        <Editor
          apiKey={appConfig.tinyMceApiKey}
          onInit={(e, editor: TinyMCEEditor) => {
            editorRef.current = editor
          }}
          textareaName='text'
          initialValue={text}
          init={{
            plugins:
              'tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
            toolbar:
              'undo redo | blocks | bold italic underline strikethrough | checklist numlist bullist | charmap | removeformat',
            menubar: false,
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            content_style: 'body { font-family: Lato }'
          }}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </CardWrapper>
  )
}
