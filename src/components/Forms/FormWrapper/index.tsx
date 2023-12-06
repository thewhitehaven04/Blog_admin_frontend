import styled from 'styled-components'
import { type IFormWrapperProps } from './types'
import { FormErrors } from 'Components/Forms/FormFieldErrors'

const FormHeader = styled.h1`
  font-size: larger;
  font-weight: 600;
  padding-left: 8px;
`

const FormContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  padding: 8px;
`

export const FormWrapper = ({
  children,
  title,
  errors = []
}: IFormWrapperProps): JSX.Element => {
  return (
    <>
      <FormHeader>{title}</FormHeader>
      <FormContent>{children}</FormContent>
      <FormErrors errors={errors} />
    </>
  )
}
