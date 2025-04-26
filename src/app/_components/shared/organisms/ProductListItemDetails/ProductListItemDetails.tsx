'use client'

import { Uuid } from '@core/shared/entities/Uuid'
import styles from './ProductListItemDetails.module.scss'
import BuyButton from '../../molecules/BuyButton/BuyButton'

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
  const fixedImageUrl = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`

  return (
    <div className={styles['productCard']}>
      <div
        className={styles['productImg']}
        style={{ backgroundImage: `url(${fixedImageUrl})` }}
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
          <div className={styles['productCardPrice']}>{price}</div>
          <BuyButton title={title} details={details} price={price} />
        </div>
      </div>
    </div>
  )
}
