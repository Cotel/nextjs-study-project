import { TranslationKey } from '@core/shared/entities/TranslationKey'
import { Uuid } from '@core/shared/entities/Uuid'

export type ProductCategory = {
  id: Uuid
  name: TranslationKey
}
