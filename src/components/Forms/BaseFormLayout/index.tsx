import { Button } from 'Components/Common/Button/styles'
import { type IFormWrapperProps } from './types'
import { FormErrors } from 'Components/Forms/FormFieldErrors'
import {
  FormContentWrapper,
  FormHeaderWrapper,
  FormTitle
} from 'Components/Forms/BaseFormLayout/styles'
import { Row } from 'Components/Styles/Common'

export const BaseFormLayout = ({
  children,
  title,
  submitButtonText,
  errors = []
}: IFormWrapperProps): JSX.Element => {
  return (
    <>
      <FormHeaderWrapper>
        <Row $justify='between' $alignment='center'>
          <FormTitle>{title}</FormTitle>
          <Button type='submit'>{submitButtonText}</Button>
        </Row>
      </FormHeaderWrapper>
      <FormContentWrapper>{children}</FormContentWrapper>
      <FormErrors errors={errors} />
    </>
  )
}
