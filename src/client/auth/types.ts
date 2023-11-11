/** I think I'd be better off generating these types from OpenAPI specification,
 *  but since I didn't bother generating the specification on the back-end side,
 * I have to resort manually typing these here 
 * */

export interface IAuthRequestBodyDto {
  username: string
  password: string
}