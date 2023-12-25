import { Column } from 'Components/Common/Column/styles'
import { type IErrorProps } from 'Components/Common/Error/types'
import * as SC from './styles'
import { MainLayout } from 'Components/Layout/AppLayout/styles'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export const ErrorComponent = ({ error }: IErrorProps): JSX.Element => (
  <MainLayout>
    <Column $alignment='center' $justify='center'>
      <Column $alignment='center'>
        <SC.ErrorIcon icon={faCircleExclamation}/>
        <h1>Error</h1>
      </Column>
      <span>
        An unexpected application error happened. Please, refresh the page.
      </span>
      <span>Additional information on the error:</span>
      <SC.ErrorInformation>{error.message}</SC.ErrorInformation>
    </Column>
  </MainLayout>
)
