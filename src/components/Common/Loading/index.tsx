import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import * as SC from 'Components/Common/Loading/styles'

export const LoadingComponent = (): JSX.Element => {
  return (
    <SC.LoadingOverlay>
      <SC.FAIcon spinPulse icon={faSpinner} />
    </SC.LoadingOverlay>
  )
}
