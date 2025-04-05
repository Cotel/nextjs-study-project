import { Uuid } from '@core/shared/entities/Uuid'
import { Link } from '../../../../_i18n/navigation'
import styles from './ProductListItem.module.scss'

interface ProductListItemProps {
  productId: Uuid
  imageUrl: string
  price: string
  title: string
}

export const ProductListItem = ({
  productId,
  imageUrl,
  price,
  title,
}: ProductListItemProps) => {
  return (
    <Link href={`/products/${productId}`}>
      <div className={styles['product-list-item']}>
        <div
          className={styles['product-img']}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className={styles['product-text']}>
          <p className={styles['product-text-price']}>{price}</p>
          <p className={styles['product-text-name']}>{title}</p>
        </div>
      </div>
    </Link>
  )
}
