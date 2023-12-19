export interface IUseFormSubmitReturn {
  submit: (...args: any) => Promise<void>
  submissionErrors: string[]
  isSuccessful: boolean | null
}