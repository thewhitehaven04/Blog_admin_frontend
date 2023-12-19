export interface IUseFormSubmitReturn<T> {
  submit: (...args: any) => Promise<void>
  submissionErrors: string[]
  isSuccessful: boolean | null
  data: T | null 
}