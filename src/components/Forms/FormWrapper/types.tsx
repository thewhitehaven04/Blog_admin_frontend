import { type PropsWithChildren } from 'react'

export interface IFormWrapperProps extends PropsWithChildren { 
  title: string
  errors?: string[]
}