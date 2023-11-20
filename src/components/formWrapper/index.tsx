import styled from 'styled-components'
import { type IFormWrapperProps } from './types'

const FormHeader = styled.h1`
  font-size: large;
  font-weight: 500;
  padding-left: 8px;
`

const FormContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  padding: 8px;
`

export const FormWrapper = ({
  title,
  children
}: IFormWrapperProps): JSX.Element => {
  return (
    <>
      <FormHeader>{title}</FormHeader>
      <FormContent>{children}</FormContent>
    </>
  )
}
