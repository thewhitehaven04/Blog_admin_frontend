import { type JwtPayload } from 'jwt-decode'

declare module 'jwt-decode' {
  export interface Payload extends JwtPayload {
    username: string
    email: string
  }
}