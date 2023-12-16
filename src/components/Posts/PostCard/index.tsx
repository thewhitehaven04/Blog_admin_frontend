import { type IPostCardProps } from 'Components/Posts/PostCard/types'
import {
  PostHeader,
  PostLayout,
  PostPublishedData,
  PostContextBlock,
  PostTitleLink
} from 'Components/Posts/PostCard/styles'
import { formatDate } from 'Utils/formatDate'
import { PostWrapper } from 'Pages/PostCreate/styles'

export const PostCard = ({
  id,
  title,
  text,
  published,
  author
}: IPostCardProps): JSX.Element => {
  return (
    <PostWrapper>
      <PostLayout>
        <PostTitleLink to={`/post/${id}`}>
          <PostHeader>{title}</PostHeader>
        </PostTitleLink>
        <PostPublishedData>
          Published by {author} {formatDate(published)}
        </PostPublishedData>
        <PostContextBlock dangerouslySetInnerHTML={{ __html: text }} />
      </PostLayout>
    </PostWrapper>
  )
}
