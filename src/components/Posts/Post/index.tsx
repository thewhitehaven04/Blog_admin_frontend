import { ButtonLink } from 'Components/Common/ButtonLink'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { type IPostProps } from 'Components/Posts/Post/types'
import {
  PostLayout,
  PostHeader,
  PostPublishedData,
  PostText
} from 'Components/Posts/PostCard/styles'
import { Row } from 'Components/Styles/Common'
import { formatDate } from 'Utils/formatDate'

export const Post = ({
  title,
  text,
  author,
  published
}: IPostProps): JSX.Element => {
  return (
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
  )
}
