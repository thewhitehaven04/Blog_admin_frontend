import { Button } from 'Components/button/styles'
import { CardWrapper } from 'Components/cardWrapper'
import { Modal } from 'Components/dialogModal'
import {
  PostLayout,
  PostHeader,
  PostPublishedData,
  PostText
} from 'Components/postCard/styles'
import { Row } from 'Components/styles/generic'
import { usePostContext } from 'Context/post'
import { formatDate } from 'Utils/formatDate'
import { title } from 'process'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const PostView = (): JSX.Element => {
  const { text, author, published } = usePostContext()
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
