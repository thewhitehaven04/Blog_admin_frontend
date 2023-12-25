import { ButtonLink } from 'Components/Common/ButtonLink/styles'
import { CardWrapper } from 'Components/Common/CardWrapper/styles'
import { type IPostProps } from 'Components/Posts/Post/types'
import {
  PostLayout,
  PostHeader,
  PostPublishedData,
  PostContextBlock
} from 'Components/Posts/PostCard/styles'
import { Row } from 'Components/Common/Row/styles'
import { formatDate } from 'Utils/formatDate'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import * as SC from 'Components/Common/Icon/styles'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const PostView = ({
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
          Published by {author.username} at {formatDate(published)}
        </PostPublishedData>
        {/** The input in sanitized by TinyMCE. Additional sanitization
         * is needed on the backend side, as it is possible to perform requests
         * to the backend directly */}
        <PostContextBlock dangerouslySetInnerHTML={{ __html: text }} />
        <Row $alignment='center'>
          <ButtonLink to='edit'>
            <SC.Icon icon={faPenToSquare} />
          </ButtonLink>
          <ButtonLink to='delete'>
            <SC.Icon icon={faTrash} />
          </ButtonLink>
        </Row>
      </PostLayout>
    </CardWrapper>
  )
}

export const Post = withLoadingOnFetch<IPostProps>(({ data }) => (
  <PostView {...data} />
))
