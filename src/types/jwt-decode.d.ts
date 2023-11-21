import { type JwtPayload } from 'jwt-decode'

declare module 'jwt-decode' {
  export interface Payload extends JwtPayload {
    id: string
    username: string
    email: string
  }
}