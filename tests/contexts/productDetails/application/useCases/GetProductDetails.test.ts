import { ProductsRepository } from "@core/products/application/interfaces/ProductsRepository"
import { GetProductDetails } from "@core/products/application/useCases/GetProductDetails"
import { Product } from "@core/products/entities/Product"
import { Uuid } from "@core/shared/entities/Uuid"
import { Money, Currencies } from "ts-money"

describe('Use case - Get Product Details', () => {
  test('should return product details', async () => {
    // Prepare / Given
    const allProducts:Product[] = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        imageUrl: 'https://example.com/image1.jpg',
        price: new Money(1999, Currencies.USD),
        title: 'Test Product 1',
        status: 'new',
        details: 'Test product details 1',
        productCategoryId: '123e4567-e89b-12d3-a456-426614174001',
        sellingStatus: 'selling',
        sellerId: '123e4567-e89b-12d3-a456-426614174002',
      },
      {
        id: '223e4567-e89b-12d3-a456-426614174000',
        imageUrl: 'https://example.com/image2.jpg',
        price: new Money(2999, Currencies.USD),
        title: 'Test Product 2',
        status: 'new',
        details: 'Test product details 2',
        productCategoryId: '223e4567-e89b-12d3-a456-426614174001',
        sellingStatus: 'selling',
        sellerId: '223e4567-e89b-12d3-a456-426614174002',
      },
    ]
    const mockProductsRepository: ProductsRepository = {
      findAll: async (): Promise<Product[]> => allProducts,
      findById: async (id: Uuid): Promise<Product|undefined> => 
        allProducts.find(product => product.id === id)
    }
    const useCase = new GetProductDetails(mockProductsRepository)
    const productId = '123e4567-e89b-12d3-a456-426614174000'

    // Act / When
    const result = await useCase.execute(productId)

    //Assert / Then
    expect(result).toBeDefined()
    expect(result?.id).toBe('123e4567-e89b-12d3-a456-426614174000')
    expect(result?.imageUrl).toBe('https://example.com/image1.jpg')
    expect(result?.price).toStrictEqual(new Money(1999, 'USD'))
    expect(result?.title).toBe('Test Product 1')
    expect(result?.status).toBe('new')
    expect(result?.details).toBe('Test product details 1')
    expect(result?.productCategoryId).toBe('123e4567-e89b-12d3-a456-426614174001')
    expect(result?.sellingStatus).toBe('selling')
    expect(result?.sellerId).toBe('123e4567-e89b-12d3-a456-426614174002')
  })
})
