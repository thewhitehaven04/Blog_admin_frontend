export interface IGenericError {
  message: string
} 

export type TResponseError = IGenericError[] | FieldValidationError[]

export interface FieldValidationError {
  type: 'field'
  location: Location
  path: string
  value: any
  msg: any
}

interface IErrorResponse {
  success: false
  errors: TResponseError 
}

interface ISuccessfulResponse<T> {
  success: true
  data: T
}
export type TGenericResponse<T = null> = ISuccessfulResponse<T> | IErrorResponse
