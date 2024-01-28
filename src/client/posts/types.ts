import { TPaginatedResponse } from 'Client/base/types'

export interface IPostResponseDto {
  id: string,
  title: string
  text: string
  author: string
  updated: string | null
  published: string
  isPublished: boolean
}

export interface IGetPostsRequestParamsDto {
  offset: number
  count: number
}

export interface ICreatePostRequestDto {
  title: string
  text: string
  author: string
  published: string
}

export interface IUpdatePostRequestDto {
  title?: string,
  text?: string
}

export interface IFormattedPostDto {
  id: string,
  title: string
  text: string
  author: {
    username: string
    email: string
  } 
  updated: string | null
  published: string
  isPublished: boolean
}

export type TGetPostsResponse = TPaginatedResponse<IFormattedPostDto>