import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const ErrorInformation = styled.span`
  background-color: #D9D9D9;
  color: #111; 
  font-family: 'Source Code Pro', monospace;

  padding: 8px;
  border-radius: 4px;
  width: 100%;
`

export const ErrorIcon = styled(FontAwesomeIcon)`
  height: 48px;
  color: ${props => props.theme.textPrimary};
`