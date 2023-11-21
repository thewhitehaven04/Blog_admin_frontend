import { Button } from 'Components/button/styles'
import { CardWrapper } from 'Components/cardWrapper'
import { FormWrapper } from 'Components/formWrapper'
import { Input } from 'Components/input'
import { Column, Row } from 'Components/styles/generic'
import { TextEditor } from 'Components/textEditor'
import { useUserContext } from 'Hooks/useUserContext'
import { ROUTES_LIST } from 'Router/routes'
import { type FormEvent, useRef } from 'react'
import { Form, useNavigate, useSubmit } from 'react-router-dom'
import { type Editor as TinyMCEEditor } from 'tinymce'

export const PostCreateForm = (): JSX.Element => {
  const navigate = useNavigate()

  const user = useUserContext()

  const editorRef = useRef<TinyMCEEditor | null>()

  const handleEditorInit = (_: any, editor: TinyMCEEditor): void => {
    editorRef.current = editor
  }

  const submit = useSubmit()

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    submit(e.currentTarget, {
      state: {
        user
      }
    })

    navigate(ROUTES_LIST.posts)
  }

  return (
    <CardWrapper>
      <Form onSubmit={handleSubmit}>
        <FormWrapper title='New post'>
          <Column>
            <Row $justify='start'>
              <label htmlFor='title'>Title</label>
              <Input type='text' name='title' />
            </Row>
            <Row $justify='start' $alignment='center'>
              <label htmlFor='published'>Publishing date</label>
              <Input type='datetime-local' name='published' />
            </Row>
            <Column>
              <label htmlFor='text'>Text</label>
              <TextEditor
                onInit={handleEditorInit}
                name='text'
                initialValue=''
              />
            </Column>
          </Column>
          <Row $justify='end'>
            <Button type="submit">Create</Button>
          </Row>
        </FormWrapper>
      </Form>
    </CardWrapper>
  )
}
