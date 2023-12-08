import { type IPostResponseDto } from 'Client/posts/types'
import { Button } from 'Components/Common/Button/styles'
import { ButtonLink } from 'Components/Common/ButtonLink'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { Modal } from 'Components/Common/Modal'
import {
  PostLayout,
  PostHeader,
  PostPublishedData,
  PostText
} from 'Components/PostCard/styles'
import { Row } from 'Components/Styles/Common'
import { formatDate } from 'Utils/formatDate'
import { title } from 'process'
import { Outlet, useLoaderData } from 'react-router-dom'

export const PostViewPage = (): JSX.Element => {
  const { text, author, published } = useLoaderData() as IPostResponseDto

  return (
    <>
      <CardWrapper>
        <PostLayout>
          <PostHeader>{title}</PostHeader>
          <PostPublishedData>
            {/** need to rework backend method to return author's name instead
             * of ID to prevent making an additional request
             * to get author by its ID */}
            Published by {author} at {formatDate(published)}
          </PostPublishedData>
          {/** The input in sanitized by TinyMCE. Additional sanitization
           * is needed on the backend side, as it is possible to perform requests
           * to the backend directly */}
          <PostText dangerouslySetInnerHTML={{ __html: text }} />
          <Row $alignment='center'>
            <ButtonLink to='edit'>Edit</ButtonLink>
            <ButtonLink to='delete'>Delete</ButtonLink>
          </Row>
        </PostLayout>
      </CardWrapper>
      <Outlet />
    </>
  )
}
