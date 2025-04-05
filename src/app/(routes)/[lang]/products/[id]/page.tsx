type ProductPageParams = {
  id: string
}

const ProductPage = async ({
  params,
}: { params: Promise<ProductPageParams> }) => {
  const { id: productId } = await params

  return <div>Product: {productId}</div>
}

export default ProductPage
