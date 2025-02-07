import { Money } from 'ts-money'

export interface Listing {
  id: string
  consoleId: string
  sellerId: string
  price: Money
  details: ListingDetails
}

export interface ListingDetails {
  consoleHealth: ListingConsoleHealth
  message?: string
}

export enum ListingConsoleHealth {
  LIKE_NEW = 'LIKE_NEW',
  USED = 'USED',
  VERY_USED = 'VERY_USED',
  NOT_WORKING = 'NOT_WORKING',
}
