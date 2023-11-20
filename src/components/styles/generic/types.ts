export type TContainerAlignment = 'center' | 'stretch' | 'start' | 'end'

export type TContainerJustify = 'spread' | 'evenly' | 'between' | 'start' | 'end' 

export interface IContainerProps {
  $alignment?: TContainerAlignment
  $justify?: TContainerJustify
}