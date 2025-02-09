import { TranslationKey } from '@/shared/domain/TranslationKey'

export interface VideogameConsole {
  id: string
  name: string
  info: VideogameConsoleInfo
  manufacturer: VideogameConsoleManufacturer
  category: VideogameConsoleCategory
}

export interface VideogameConsoleInfo {
  description: TranslationKey
  launchYear: number
}

export interface VideogameConsoleManufacturer {
  id: string
  name: string
}

export enum VideogameConsoleCategory {
  PORTABLE = 'portable',
  HOME_SYSTEM = 'home-system',
}
