import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import * as SC from 'Components/Common/Loading/styles'

export const LoadingComponent = (): JSX.Element => {
  return (
    <SC.LoadingOverlay>
      <SC.LoadingIcon spinPulse icon={faSpinner} />
    </SC.LoadingOverlay>
  )
}
