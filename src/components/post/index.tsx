import { CardWrapper } from 'Components/cardWrapper'
import { type IPostProps } from 'Components/post/types'
import {
  PostHeader,
  PostLayout,
  PostPublishedData,
  PostText
} from 'Components/post/styles'
import { formatDate } from 'Utils/formatDate'
import { Button } from 'Components/button/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Column } from 'Components/userData/styles'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const Post = ({
  title,
  text,
  published,
  author
}: IPostProps): JSX.Element => (
  <CardWrapper>
    <PostLayout>
      <PostHeader>{title}</PostHeader>
      <PostPublishedData>
        Published by {author} at {formatDate(published)}
      </PostPublishedData>
      <PostText>{text}</PostText>
      <Column>
        <Button type='button'>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
        <Button type='button'>
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </Column>
    </PostLayout>
  </CardWrapper>
)
