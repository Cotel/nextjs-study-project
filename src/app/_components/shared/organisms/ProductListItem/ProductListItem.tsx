import { Uuid } from '@core/shared/entities/Uuid'
import { Link } from '../../../../_i18n/navigation'
import styles from './ProductListItem.module.scss'

interface ProductListItemProps {
  productId: Uuid
  imageUrl: string
  title: string
  price: string
}

export const ProductListItem = ({
  productId,
  imageUrl,
  title,
  price,
}: ProductListItemProps) => {
  return (
    <Link href={`/products/${productId}`}>
      <div className={styles['product-list-item']}>
        <div
          className={styles['product-img']}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className={styles['product-text']}>
          <p className={styles['product-text-name']}>{title}</p>
          <p className={styles['product-text-price']}>{price}</p>
          <div className={styles['categoryIcon']}></div>
        </div>
      </div>
    </Link>
  )
}
