import { type IContainerProps } from 'Components/styles/generic/types'
import styled from 'styled-components'

export const Column = styled('div')<IContainerProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: ${(props) => {
    switch (props.$alignment) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      case 'stretch':
        return 'stretch'
      default:
        return 'stretch'
    }
  }};
  gap: 4px;
`

export const Row = styled.div<IContainerProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: ${(props) => {
    switch (props.$alignment) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      case 'stretch':
        return 'stretch'
      default:
        return 'stretch'
    }
  }};
  gap: 8px;
`
