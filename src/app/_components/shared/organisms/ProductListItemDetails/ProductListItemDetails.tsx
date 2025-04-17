// components/ProductListItemDetails.tsx
import { Uuid } from '@core/shared/entities/Uuid'
import { Link } from '../../../../_i18n/navigation'
import styles from './ProductListItemDetails.module.scss'

interface ProductListItemDetailsProps {
  productId: Uuid
  imageUrl: string
  title: string
  price: number
  status: string
  details: string
}

export default function ProductListItemDetails({
  productId,
  imageUrl,
  title,
  price,
  status,
  details,
}: ProductListItemDetailsProps) {
  return (
    <div className={styles['productCard']}>
      <div
          className={styles['productImg']}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      <div className={styles['productCardContent']}>
      <h2 className={styles['productCardTitle']}>{title}</h2>
        <div className={styles['productCardStatus']}>
          <span className={styles['productCardLabel']}></span> {status}
        </div>
        <div className={styles['productCardDetails']}>
          <span className={styles['productCardLabel']}></span>
          <p>{details}</p>
        </div>
        <div className={styles['productCardActions']}>
          <div className={styles['productCardPrice']}>
            {price}
          </div>
          <Link href={`/products/${productId}`}>
          <button className={styles['productCardCta']}>BUY</button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}
