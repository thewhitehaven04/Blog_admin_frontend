import {
  Label,
  ValidationMessage
} from 'Components/Forms/ValidatedField/styles'
import { type IValidatedFieldProps } from 'Components/Forms/ValidatedField/types'
import { Column, Row } from 'Components/Styles/Common'

export const ValidatedField = ({
  label,
  labelFor,
  errorMessage,
  required,
  children,
  vertical = false,
}: IValidatedFieldProps): JSX.Element => {
  if (vertical) {
    return (
      <Column>
        <Row $justify='spread'>
          <Label htmlFor={labelFor} $required={required}>
            {label}
          </Label>
          {errorMessage != null && (
            <ValidationMessage>{errorMessage}</ValidationMessage>
          )}
        </Row>
        {children}
      </Column>
    )
  }
  return (
    <Column $justify='start'>
      <Row>
        <Label htmlFor={labelFor} $required={required}>
          {label}
        </Label>
        {children}
      </Row>
      {errorMessage != null && (
        <ValidationMessage>{errorMessage}</ValidationMessage>
      )}
    </Column>
  )
}
