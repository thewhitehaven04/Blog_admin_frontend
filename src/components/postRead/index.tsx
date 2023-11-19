import { CardWrapper } from 'Components/cardWrapper'
import { type IPostProps } from 'Components/postRead/types'
import {
  PostHeader,
  PostLayout,
  PostPublishedData,
  PostText
} from 'Components/postRead/styles'
import { formatDate } from 'Utils/formatDate'
import { Button } from 'Components/button/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Column } from 'Components/userData/styles'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Post = ({
  id,
  title,
  text,
  published,
  author
}: IPostProps): JSX.Element => {
  return (
    <CardWrapper>
      <PostLayout>
        <PostHeader>{title}</PostHeader>
        <PostPublishedData>
          Published by {author} at {formatDate(published)}
        </PostPublishedData>
        <PostText>{text}</PostText>
        <Column>
          <Link to={`/post/` + id}>
            <Button type='button'>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </Link>
          <Button type='button'>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </Column>
      </PostLayout>
    </CardWrapper>
  )
}
