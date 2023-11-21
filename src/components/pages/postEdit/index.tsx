import appConfig from '@/appConfig'
import { Button } from 'Components/button/styles'
import { CardWrapper } from 'Components/cardWrapper'
import { Input } from 'Components/input'
import { type Editor as TinyMCEEditor } from 'tinymce'
import { Column } from 'Components/styles/generic'
import { useRef } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { type IPostResponseDto } from 'Client/posts/types'
import { FormWrapper } from 'Components/formWrapper'
import { TextEditor } from 'Components/textEditor'

export const PostEditFormPage = (): JSX.Element => {
  const editorRef = useRef<null | TinyMCEEditor>(null)
  const { id, title, text } = useLoaderData() as IPostResponseDto

  const handleEditorInit = (_: any, editor: TinyMCEEditor): void => {
    editorRef.current = editor
  }

  return (
    <CardWrapper>
      <Form action={`/post/${id}/edit`} method='POST'>
        <FormWrapper title='Edit post'>
          <Column>
            <label>Post title</label>
            <Input name='title' type='text' defaultValue={title} />
          </Column>
          <TextEditor
            onInit={handleEditorInit}
            name='text'
            initialValue={text}
          />
          <Button type='submit'>Submit</Button>
        </FormWrapper>
      </Form>
    </CardWrapper>
  )
}
