import { type ILabelProps } from 'Components/Forms/ValidatedField/types'
import styled from 'styled-components'

export const ValidationMessage = styled.span`
  font-size: small;
  color: red;
`

export const Label = styled('label')<ILabelProps>`
  ${(props) => {
    if (props.$required) {
      return `&::after {
        content: "*";
        color: red
      }`
    }
  }}
`
