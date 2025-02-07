import { randomUUID } from 'node:crypto'
import { Listing, ListingConsoleHealth } from '@/listings/domain/Listing'
import { ListingRepository } from '@/listings/domain/ListingRepository'
import { Random } from '@/shared/utils/Random'
import { faker } from '@faker-js/faker/locale/en'
import { Money } from 'ts-money'

export class InMemoryListingRepository implements ListingRepository {
  private static instance: InMemoryListingRepository

  public static getInstance(): InMemoryListingRepository {
    if (!InMemoryListingRepository.instance) {
      InMemoryListingRepository.instance = new InMemoryListingRepository()
    }

    return InMemoryListingRepository.instance
  }

  private Listings: { [id: string]: Listing } = {}

  constructor() {
    for (let i = 0; i < 10; i++) {
      const id = randomUUID().toString()
      const sellerId = Random.inRange(1, 5)

      this.Listings[id] = {
        id,
        sellerId: `${sellerId}`,
        consoleId: 'playstation-5',
        price: Money.fromDecimal(
          faker.number.float({
            min: 150,
            max: 400,
            fractionDigits: 2,
          }),
          'EUR',
        ),
        details: {
          consoleHealth: Random.oneOf(
            ListingConsoleHealth.USED,
            ListingConsoleHealth.NOT_WORKING,
            ListingConsoleHealth.VERY_USED,
            ListingConsoleHealth.LIKE_NEW,
          ),
          message: faker.lorem.sentences({ min: 1, max: 4 }),
        },
      }
    }
  }

  async findAll(): Promise<Listing[]> {
    return Object.values(this.Listings)
  }

  async findOne(id: string): Promise<Listing> {
    return this.Listings[id]
  }

  async save(listing: Listing): Promise<Listing> {
    this.Listings[listing.id] = listing

    return listing
  }
}
