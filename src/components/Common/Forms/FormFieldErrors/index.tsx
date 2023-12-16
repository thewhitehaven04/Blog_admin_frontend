import { FormError } from 'Components/Common/Forms/FormFieldErrors/styles'
import { type IFormErrorProps } from 'Components/Common/Forms/FormFieldErrors/types'
import { Column } from 'Components/Common/Column/styles'

export const FormErrors = ({ errors }: IFormErrorProps): JSX.Element => {
  return (
    <>
      {errors.length > 0 && (
        <>
          <span>The form contains following issues:</span>
          <Column $alignment='start'>
            {errors.map((errorText, index) => (
              <FormError key={index}>{errorText}</FormError>
            ))}
          </Column>
        </>
      )}
    </>
  )
}
