interface IErrorResponse {
  success: false
  errors: Record<string, any>
}

interface ISuccessfulResponse<T> {
  success: true
  data?: T
}
export type TGenericResponse<T> = ISuccessfulResponse<T> | IErrorResponse
