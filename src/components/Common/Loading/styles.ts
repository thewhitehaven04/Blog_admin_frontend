import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const LoadingOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  backdrop-filter: brightness(0.6)
`

export const FAIcon = styled(FontAwesomeIcon)`
  color: white; 
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 64px;
`