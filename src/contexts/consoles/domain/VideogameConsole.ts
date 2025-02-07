import { TranslationKey } from '@/shared/types/TranslationKey'

export interface VideogameConsole {
  id: string
  name: string
  info: VideogameConsoleInfo
}

export interface VideogameConsoleInfo {
  description: TranslationKey
  manufacturer: string
  launchYear: number
}
