import { ProductsRepository } from '@core/products/application/interfaces/ProductsRepository'
import { Product } from '@core/products/entities/Product'
import { ProductCriteria } from '@core/products/entities/ProductsCriteria'
import { Uuid } from '@core/shared/entities/Uuid'
import { Currencies, Money } from 'ts-money'

const DEFAULT_MEMORY: Record<string, Product> = {
  bof1: {
    id: '123e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/games/BOF.webp',
    price: '39.99 €',
    title: 'Breath Of Fire',
    status: 'new',
    details: 'Product details 1',
    productCategoryId: '123e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '123e4567-e89b-12d3-a456-426614174002',
  },

  bof2: {
    id: '223e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/games/BOF2.webp',
    price: '39.99 €',
    title: 'Breath Of Fire 2',
    status: 'new',
    details: 'Product details 2',
    productCategoryId: '123e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '123e4567-e89b-12d3-a456-426614174002',
  },

  ffta: {
    id: '323e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/games/FFTA.webp',
    price: '39.99 €',
    title: 'Final Fantasy Tactics Advance',
    status: 'new',
    details: 'Product details 3',
    productCategoryId: '123e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '223e4567-e89b-12d3-a456-426614174002',
  },

  pkmnr: {
    id: '423e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/games/PR.webp',
    price: '29.99 €',
    title: 'Pokemon Ruby',
    status: 'new',
    details: 'Product details 4',
    productCategoryId: '123e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '323e4567-e89b-12d3-a456-426614174002',
  },

  tloztmc: {
    id: '523e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/games/TLOZTMC.webp',
    price: '39.99 €',
    title: 'The Legend Of Zelda The Minish Cap',
    status: 'new',
    details: 'Product details 5',
    productCategoryId: '123e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '123e4567-e89b-12d3-a456-426614174002',
  },

  gbaspBLue: {
    id: '63e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/consoles/gbaspBlue.webp',
    price: '99.99 €',
    title: 'Gameboy Advance SP Blue Cobalt',
    status: 'new',
    details: 'Product details 6',
    productCategoryId: '223e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '123e4567-e89b-12d3-a456-426614174002',
  },

  gbaspZelda: {
    id: '73e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/consoles/gbaspZelda.webp',
    price: '149.99 €',
    title: 'Gameboy Advance SP Zelda Edition',
    status: 'new',
    details: 'Product details 7',
    productCategoryId: '223e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '123e4567-e89b-12d3-a456-426614174002',
  },

  ndsZelda: {
    id: '83e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/consoles/ndsZelda.webp',
    price: '249.99 €',
    title: 'Nintendo DS Zelda Edition',
    status: 'new',
    details: 'Product details 8',
    productCategoryId: '223e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '123e4567-e89b-12d3-a456-426614174002',
  },

  n3dsxlMario: {
    id: '923e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/Consoles/n3dsxlMario.webp',
    price: '249.99 €',
    title: 'Nintendo 3DS XL Mario',
    status: 'new',
    details: 'Product details 9',
    productCategoryId: '223e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '123e4567-e89b-12d3-a456-426614174002',
  },

  n3dsXerneas: {
    id: '103e4567-e89b-12d3-a456-426614174000',
    imageUrl: 'locales/consoles/n3dsXerneas.webp',
    price: '249.99 €',
    title: 'Nintendo 3DS Xerneas Edition',
    status: 'new',
    details: 'Product details 10',
    productCategoryId: '223e4567-e89b-12d3-a456-426614174001',
    sellingStatus: 'selling',
    sellerId: '323e4567-e89b-12d3-a456-426614174002',
  },
}

export class InMemoryProductsRepository implements ProductsRepository {
  private memory: Record<string, Product>

  constructor(memory: Record<string, Product> = DEFAULT_MEMORY) {
    this.memory = memory
  }

  findAll(criteria?: ProductCriteria): Promise<Product[]> {
    const allItems = Object.values(this.memory)

    if (!criteria) return Promise.resolve(allItems)

    const filteredItems = allItems.filter((item) => {
      const nameMatches = criteria.title
        ? item.title.toLowerCase().startsWith(criteria.title.toLowerCase())
        : true
      const categoryMatches = criteria.categoryId
        ? item.productCategoryId === criteria.categoryId
        : true

      return nameMatches && categoryMatches
    })

    return Promise.resolve(filteredItems)
  }

  findById(id: Uuid): Promise<Product | undefined> {
    const product = Object.values(this.memory).find(
      (product) => product.id === id,
    )
    return Promise.resolve(product)
  }
}
