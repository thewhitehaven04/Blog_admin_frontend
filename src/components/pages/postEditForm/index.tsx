import appConfig from '@/appConfig'
import { Editor } from '@tinymce/tinymce-react'
import { Button } from 'Components/button/styles'
import { CardWrapper } from 'Components/cardWrapper'
import { Input } from 'Components/input'
import { type Editor as TinyMCEEditor } from 'tinymce'
import { Column } from 'Components/styles/generic'
import { useRef } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { type IPostResponseDto } from 'Client/posts/types'
import { FormWrapper } from 'Components/formWrapper'

export const PostEditFormPage = (): JSX.Element => {
  const editorRef = useRef<null | TinyMCEEditor>(null)
  const { id, title, text } = useLoaderData() as IPostResponseDto

  return (
    <CardWrapper>
      <Form action={`/post/${id}/edit`} method='POST'>
        <FormWrapper title="Edit post">
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
        </FormWrapper>
      </Form>
    </CardWrapper>
  )
}
