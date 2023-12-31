import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostLayout = styled.article`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    'header tools'
    'published tools'
    'text text';
  column-gap: 8px;
  padding: 16px;
`

export const PostHeader = styled.h2`
  font-family: var(--font-serif);
  font-size: 18pt;
  font-weight: 600;
  grid-area: header;
  margin-bottom: 8px;
  margin-top: 0;
  color: ${(props) => props.theme.textPrimary};
`
export const PostPublishedData = styled.span`
  grid-area: published;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 8px;
`

export const PostContextBlock = styled.div`
  font-family: var(--font-serif);
  text-align: justify;
  grid-area: text;

  & * {
    font-family: inherit;
  }
`

export const PostTextHidden = styled.div`
  text-align: justify;
  grid-area: text;
  max-height: 100px;
  overflow-y: hidden;

  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent; 
  
  background-color: black;
  background-image: linear-gradient(
    to bottom,
    #fff0 70px,
    #ffff 100%
  );
  -moz-text-fill-color: transparent;
`

export const PostTitleLink = styled(Link)`
  text-decoration: none;
`