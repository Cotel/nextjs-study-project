export type ProductStatus = 'new' | 'used' | 'very_used'

export const checkProductStatus = (value: string): value is ProductStatus => {
  const statuses: ProductStatus[] = ['new', 'used', 'very_used']

  return statuses.includes(value as ProductStatus)
}
