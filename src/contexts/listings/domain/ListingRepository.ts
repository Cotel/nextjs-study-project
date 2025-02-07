import { Listing } from './Listing'

export interface ListingRepository {
  findAll(): Promise<Listing[]>

  findOne(id: string): Promise<Listing>

  save(listing: Listing): Promise<Listing>
}
