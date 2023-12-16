import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RowListItem = styled.li`
  list-style-type: none;
`

export const PaginationLink = styled(Link)`
  color: ${props => props.theme.textPrimary}
`