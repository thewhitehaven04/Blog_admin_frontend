import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.accent}; 
  background-color: ${props => props.theme.bgPrimary};
  color: ${props => props.theme.textPrimary};
  padding: 4px;

  &:hover {
    cursor: pointer;
  }
`