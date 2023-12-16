import { Row } from 'Components/Common/Row/styles'
import { getOffsets, getPageCount } from 'Components/Layout/Pagination/helpers'
import {
  PaginationLink,
  RowListItem
} from 'Components/Layout/Pagination/styles'
import { type IPaginationProps } from 'Components/Layout/Pagination/types'

export const Pagination = ({
  totalCount,
  pageSize
}: IPaginationProps): JSX.Element => {
  const pageCount = getPageCount(totalCount, pageSize)
  const offsets = getOffsets(pageCount, pageSize)

  return (
    <nav>
      <Row $justify='center'>
        {offsets.map((offset, index) => (
          <RowListItem key={offset}>
            <PaginationLink to={`?count=${pageSize}&offset=${offset}`}>
              {index + 1}
            </PaginationLink>
          </RowListItem>
        ))}
      </Row>
    </nav>
  )
}
