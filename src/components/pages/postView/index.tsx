import { type IPostResponseDto } from 'Client/posts/types'
import { Button } from 'Components/Common/Button/styles'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { Modal } from 'Components/DialogModal'
import {
  PostLayout,
  PostHeader,
  PostPublishedData,
  PostText
} from 'Components/PostCard/styles'
import { Row } from 'Components/Styles/Common'
import { formatDate } from 'Utils/formatDate'
import { title } from 'process'
import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const PostViewPage = (): JSX.Element => {
  const { text, author, published } = useLoaderData() as IPostResponseDto
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false)

  const handleDeleteButtonClick = (): void => {
    setIsDeleteModalShown(true)
  }

  return (
    <>
      <Modal
        text='Do you want to delete this post?'
        setShow={isDeleteModalShown}
      />
      <CardWrapper>
        <PostLayout>
          <PostHeader>{title}</PostHeader>
          <PostPublishedData>
            Published by {author} at {formatDate(published)}
          </PostPublishedData>
          {/** The input in sanitized by TinyMCE. Additional sanitization
           * is needed on the backend side, as it is possible to perform requests
           * to the backend directly */}
          <PostText dangerouslySetInnerHTML={{ __html: text }} />
          <Row $alignment='stretch'>
            <Button type='button'>
              {/** bad decision to wrap link in button and not vice versa,
               * as only the button text will listen to click events */}
              <Link to='edit'>Edit</Link>
            </Button>
            <Button type='button' onClick={handleDeleteButtonClick}>
              Delete
            </Button>
          </Row>
        </PostLayout>
      </CardWrapper>
    </>
  )
}
