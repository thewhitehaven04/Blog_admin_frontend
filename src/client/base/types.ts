interface IGenericError {
  message: string
} 

interface FieldValidationError {
  type: 'field'
  location: Location
  path: string
  value: any
  msg: any
}

interface IErrorResponse {
  success: false
  errors: IGenericError[] | FieldValidationError[]  
}

interface ISuccessfulResponse<T> {
  success: true
  data: T
}
export type TGenericResponse<T = null> = ISuccessfulResponse<T> | IErrorResponse
