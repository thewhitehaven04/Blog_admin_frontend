import styled from 'styled-components';

export const ModalTitle = styled.div`
  font-size: large;
  padding-left: 8px;
`

export const ModalText = styled.p`
  padding: 8px;
`

export const ModalWrapper = styled.div`
  position: relative;
  top: 200px;
  margin: 0 auto;
  width: max-content;
  
  background-color: white;
  box-shadow: 0px 0px 8px 0.6px #444; 
  border-radius: 8px;
  padding-bottom: 8px;
`

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  backdrop-filter: brightness(0.4); 
`

export const ModalHeader = styled.div`
  background-color: ${props => props.theme.bgSecondary};
  color: ${props => props.theme.textPrimary};
  border-bottom: 1px solid ${props => props.theme.borderColor};

  padding: 8px 8px;
`