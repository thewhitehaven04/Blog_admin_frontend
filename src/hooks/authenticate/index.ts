import appConfig from '@/appConfig'
import { type Payload } from '@/types/jwt-decode'
import AuthClient from 'Client/auth'
import { type IAuthResponseDto } from 'Client/auth/types'
import { type IUseAuthenticateReturn } from 'Hooks/authenticate/types'
import { useUserDispatchContext } from 'Hooks/context/useUserDispatchContext'
import { useFormSubmit } from 'Hooks/forms/submit'
import { storeAccessToken } from 'Service/accessToken'
import { jwtDecode } from 'jwt-decode'

export function useAuthenticate(): IUseAuthenticateReturn {
  const authClientInstance = new AuthClient(appConfig.apiRootUrl)
  const userDispatch = useUserDispatchContext()

  const { submit, submissionErrors, isSuccessful, data } =
    useFormSubmit<IAuthResponseDto>({
      submitCallback: async (data) => await authClientInstance.auth(data)
    })

  if (isSuccessful === true && data != null) {
    storeAccessToken(data.token)
    const payload = jwtDecode<Payload>(data.token)
    userDispatch(payload)
  }

  return {
    isSuccessful,
    submissionErrors,
    submit
  }
}
