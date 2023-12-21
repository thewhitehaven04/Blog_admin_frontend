import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RowListItem = styled.li`
  list-style-type: none;
`

export const PaginationLink = styled(Link)`
  color: ${props => props.theme.textPrimary};
  border: 1px solid ${props => props.theme.borderColor};
  padding: 4px;
  border-radius: 4px;
  text-decoration: none;
`

export const PaginationContainer = styled.nav`
  padding-top: 8px;
`