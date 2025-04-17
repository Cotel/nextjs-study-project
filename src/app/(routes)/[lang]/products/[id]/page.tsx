import { Uuid } from '@core/shared/entities/Uuid'
import { GetProductDetails } from '@core/products/application/useCases/GetProductDetails'
import { InMemoryProductsRepository } from '@infra/products/InMemoryProductsRepository'
import ProductListItemDetails from '@ui/components/shared/organisms/ProductListItemDetails/ProductListItemDetails'

type ProductPageParams = {
  id: string
}

export default async function ProductPage({ params }: { params: ProductPageParams }) {

  const productId = params.id as Uuid
  const repo = new InMemoryProductsRepository()
  const useCase = new GetProductDetails(repo)
  const product = await useCase.execute(productId)

  return (
    <ProductListItemDetails
      productId={product.id}
      imageUrl={product.imageUrl}
      title={product.title}
      price={product.price}
      status={product.status}
      details={product.details}
    />
  )
}
