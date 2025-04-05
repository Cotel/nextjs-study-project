import { Uuid } from '@core/shared/entities/Uuid'

export type ProductCriteria = {
  title?: string
  categoryId?: Uuid
}
