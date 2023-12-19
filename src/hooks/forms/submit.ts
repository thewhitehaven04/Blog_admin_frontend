import { type TGenericResponse } from 'Client/base/types'
import { type IUseFormSubmitReturn } from 'Hooks/forms/types'
import { useState } from 'react'

export function useFormSubmit<T>({
  submitCallback
}: {
  submitCallback: (...args: any) => Promise<Response>
}): IUseFormSubmitReturn<T> {
  const [submissionErrors, setSubmissionErrors] = useState<
    IUseFormSubmitReturn<T>['submissionErrors']
  >([])
  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null)
  const [data, setData] = useState<T | null>(null)

  const submit = async (...args: any): Promise<void> => {
    const response = (await (
      await submitCallback(...args)
    ).json()) as TGenericResponse

    if (response.success) {
      setIsSuccessful(true)
      setData(response.data)
      setSubmissionErrors([])
    } else {
      setIsSuccessful(false)
      setSubmissionErrors(response.errors.map((error) => error.message))
      setData(null)
    }
  }

  return {
    submit,
    submissionErrors,
    isSuccessful,
    data
  }
}
