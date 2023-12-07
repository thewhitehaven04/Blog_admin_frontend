import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonLink = styled(Link)`
  display: block;
  padding: 4px 8px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.bgPrimary};
  color: ${props => props.theme.textPrimary};

  text-decoration: none;
`
