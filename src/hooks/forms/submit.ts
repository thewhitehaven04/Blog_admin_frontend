import { type TGenericResponse } from 'Client/base/types'
import { useState } from 'react'

export function useFormSubmit({
  submitCallback
}: {
  submitCallback: (...args: any) => Promise<Response>
}): {
  submit: (...args: any) => Promise<void>
  submissionErrors: string[]
  isSuccessful: boolean | null
} {
  const [submissionErrors, setSubmissionErrors] = useState<string[]>([])
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
