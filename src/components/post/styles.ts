import styled from 'styled-components';

export const PostLayout = styled.article`
  display: grid;
  grid-template-columns: 1fr 36px;
  grid-template-rows: min-content min-content;
  grid-template-areas: "header tools"
  "published tools"
  "text tools";
  column-gap: 8px;
  padding: 16px;
`

export const PostHeader = styled.h2`
  font-size: 18pt; 
  font-weight: 600;
  grid-area: header;
  margin-bottom: 8px;
  margin-top: 0;
  color: ${props => props.theme.textPrimary}
`
export const PostPublishedData = styled.span`
  grid-area: published;
  color: ${props => props.theme.textPrimary};
  margin-bottom: 8px;
`

export const PostText = styled.div`
  text-align: justify;
  grid-area: text;
`