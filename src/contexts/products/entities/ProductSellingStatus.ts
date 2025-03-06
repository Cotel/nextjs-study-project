export type ProductSellingStatus = 'selling' | 'sold'

export const checkProductSellingStatus = (
  value: string,
): value is ProductSellingStatus => {
  const possibleValues: ProductSellingStatus[] = ['selling', 'sold']

  return possibleValues.includes(value as ProductSellingStatus)
}
