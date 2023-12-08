import styled from 'styled-components';

export const ModalTitle = styled.div`
  font-size: large;
  padding-left: 8px;
`

export const ModalText = styled.p`
  padding-left: 8px;
`

export const ModalWrapper = styled.div`
  position: relative;
  top: 200px;
  margin: 0 auto;
  padding: 8px;
  width: max-content;
  
  background-color: white;
  box-shadow: 0px 0px 8px 1px #333333;
  border-radius: 12px;
`

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  backdrop-filter: brightness(0.6) blur(2px); 
`