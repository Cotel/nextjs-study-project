import { VideogameConsoleRepository } from '@/consoles/domain/VideogameConsoleRepository'
import { Listing as ListingDto } from '@/listings/application/Listing'
import { ListingRepository } from '@/listings/domain/ListingRepository'
import { UserRepository } from '@/users/domain/UserRepository'

export const getListings = async (
  listingRepository: ListingRepository,
  consolesRepository: VideogameConsoleRepository,
  usersRepository: UserRepository,
): Promise<ListingDto[]> => {
  const listings = await listingRepository.findAll()

  return await Promise.all(
    listings.map(async (listing): Promise<ListingDto> => {
      const console = await consolesRepository.findOne(listing.consoleId)
      const seller = await usersRepository.findOne(listing.sellerId)

      return {
        id: listing.id,
        price: listing.price.toString(),
        details: listing.details,
        console: console,
        seller: seller,
      }
    }),
  )
}
