import { CardWrapper } from 'Components/cardWrapper'
import { type IPostProps } from 'Components/post/types'
import { PostHeader } from 'Components/post/styles'

export const Post = ({
  title,
  text,
  published,
  author
}: IPostProps): JSX.Element => (
  <CardWrapper>
    <PostHeader>{title}</PostHeader>
    <span>{text}</span>
    <span>Last update: {published}</span>
    <span>{author}</span>
  </CardWrapper>
)
