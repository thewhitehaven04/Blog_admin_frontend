import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0px;

  padding: 4px;
  background-color: ${props => props.theme.bgSecondary};
  color: ${props => props.theme.textPrimary};
  backdrop-filter: blur(8px);

  border-bottom: 1px solid ${props => props.theme.borderColor};
  box-shadow: 0px 0px 3px 0.2px ${props => props.theme.shadowColor};

  padding-inline: 16px;
`