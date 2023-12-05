import { CardWrapper } from 'Components/cardWrapper'
import { type IPostProps } from 'Components/postCard/types'
import {
  PostHeader,
  PostLayout,
  PostPublishedData,
  PostText
} from 'Components/postCard/styles'
import { formatDate } from 'Utils/formatDate'
import { Link } from 'react-router-dom'

export const PostCard = ({
  id,
  title,
  text,
  published,
  author
}: IPostProps): JSX.Element => {
  return (
    <CardWrapper>
      <PostLayout>
        <Link to={`/post/${id}`}>
          <PostHeader>{title}</PostHeader>
        </Link>
        <PostPublishedData>
          Published by {author} {formatDate(published)}
        </PostPublishedData>
        <PostText dangerouslySetInnerHTML={{ __html: text }} />
      </PostLayout>
    </CardWrapper>
  )
}
