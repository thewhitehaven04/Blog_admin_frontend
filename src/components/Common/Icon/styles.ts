import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textPrimary};
  height: 16px;
`