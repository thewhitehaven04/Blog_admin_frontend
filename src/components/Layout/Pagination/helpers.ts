export function getPageCount(totalCount: number, pageSize: number): number {
  return Math.ceil(totalCount / pageSize)
}

export function getOffsets(pageCount: number, offset: number): number[] {
  return Array.from({ length: pageCount }, (_, i) => i * offset)
}
