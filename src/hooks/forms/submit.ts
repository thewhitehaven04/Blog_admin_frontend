import { type TGenericResponse } from 'Client/base/types'
import { type IUseFormSubmitReturn } from 'Hooks/forms/types'
import { useState } from 'react'

export function useFormSubmit({
  submitCallback
}: {
  submitCallback: (...args: any) => Promise<Response>
}): IUseFormSubmitReturn {
  const [submissionErrors, setSubmissionErrors] = useState<
    IUseFormSubmitReturn['submissionErrors']
  >([])
  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null)

  const submit = async (...args: any): Promise<void> => {
    const response = (await (
      await submitCallback(...args)
    ).json()) as TGenericResponse

    if (response.success) {
      setIsSuccessful(true)
      setSubmissionErrors([])
    } else {
      setIsSuccessful(false)
      setSubmissionErrors(response.errors.map((error) => error.message))
    }
  }

  return {
    submit,
    submissionErrors,
    isSuccessful
  }
}
