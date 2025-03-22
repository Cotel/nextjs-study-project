import { ProductsRepository } from '@core/products/application/interfaces/ProductsRepository'
import { GetProducts } from '@core/products/application/useCases/GetProducts'
import { Product } from '@core/products/entities/Product'
import { Currencies, Money } from 'ts-money'

describe('Use Case - Get Products', () => {
  test('should return all products', async () => {
    // Prepare / Given
    const mockProductsRepository: ProductsRepository = {
      findAll: async (): Promise<Product[]> => [
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
      ],
    }
    const useCase = new GetProducts(mockProductsRepository)

    // Act / When
    const result = await useCase.execute()

    // Assert / Then
    expect(result.length).toBe(2)
  })
})
