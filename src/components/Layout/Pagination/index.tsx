import { Row } from 'Components/Common/Row/styles'
import { getOffsets, getPageCount } from 'Components/Layout/Pagination/helpers'
import {
  PaginationContainer,
  PaginationLink,
  RowListItem
} from 'Components/Layout/Pagination/styles'
import { type IPaginationProps } from 'Components/Layout/Pagination/types'

export const Pagination = ({
  totalCount,
  pageSize
}: IPaginationProps): JSX.Element => {
  const offsets = getOffsets(getPageCount(totalCount, pageSize), pageSize)

  return (
    <PaginationContainer>
      <Row $justify='center'>
        {offsets.map((offset, index) => (
          <RowListItem key={offset}>
            <PaginationLink to={`?count=${pageSize}&offset=${offset}`}>
              {index + 1}
            </PaginationLink>
          </RowListItem>
        ))}
      </Row>
    </PaginationContainer>
  )
}
