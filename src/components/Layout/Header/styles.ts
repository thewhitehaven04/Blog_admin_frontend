import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  padding: 8px;
  background-color: ${props => props.theme.bgSecondary};
  color: ${props => props.theme.bgPrimary};
`