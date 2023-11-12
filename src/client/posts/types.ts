export interface IPostResponseDto {
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