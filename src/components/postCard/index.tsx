import { CardWrapper } from 'Components/Common/CardWrapper'
import { type IPostProps } from 'Components/PostCard/types'
import {
  PostHeader,
  PostLayout,
  PostPublishedData,
  PostText,
  PostTitleLink
} from 'Components/PostCard/styles'
import { formatDate } from 'Utils/formatDate'

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
        <PostTitleLink to={`/post/${id}`}>
          <PostHeader>{title}</PostHeader>
        </PostTitleLink>
        <PostPublishedData>
          Published by {author} {formatDate(published)}
        </PostPublishedData>
        <PostText dangerouslySetInnerHTML={{ __html: text }} />
      </PostLayout>
    </CardWrapper>
  )
}
