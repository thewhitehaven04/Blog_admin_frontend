export interface IUseAuthenticateReturn {
  submit: (...args: any) => Promise<void> 
  isSuccessful: boolean | null 
  submissionErrors: string[] 
}