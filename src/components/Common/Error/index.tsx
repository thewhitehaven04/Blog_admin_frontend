import { Column } from 'Components/Common/Column/styles'
import { type IErrorProps } from 'Components/Common/Error/types'
import * as SC from './styles'
import { MainLayout } from 'Components/Layout/AppLayout/styles'

export const ErrorComponent = ({ error }: IErrorProps): JSX.Element => (
  <MainLayout>
    <Column $alignment='center' $justify='center'>
      <h1>Error</h1>
      <span>
        An unexpected application error happened. Please, refresh the page.
      </span>
      <span>Additional information on the error:</span>
      <SC.ErrorInformation>{error.message}</SC.ErrorInformation>
    </Column>
  </MainLayout>
)
