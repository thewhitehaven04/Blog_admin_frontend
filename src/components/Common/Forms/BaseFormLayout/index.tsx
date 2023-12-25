import { Button } from 'Components/Common/Button/styles'
import { type IFormWrapperProps } from './types'
import { FormErrors } from 'Components/Common/Forms/FormFieldErrors'
import * as SC from 'Components/Common/Forms/BaseFormLayout/styles'
import { Row } from 'Components/Common/Row/styles'

export const BaseFormLayout = ({
  children,
  title,
  submitButtonText,
  errors = []
}: IFormWrapperProps): JSX.Element => {
  return (
    <>
      <SC.FormHeaderWrapper>
        <Row $justify='between' $alignment='center'>
          <SC.FormTitle>{title}</SC.FormTitle>
          <Button type='submit'>{submitButtonText}</Button>
        </Row>
      </SC.FormHeaderWrapper>
      <SC.FormContentWrapper>{children}</SC.FormContentWrapper>
      <SC.FormErrorsWrapper>
        <FormErrors errors={errors} />
      </SC.FormErrorsWrapper>
    </>
  )
}
