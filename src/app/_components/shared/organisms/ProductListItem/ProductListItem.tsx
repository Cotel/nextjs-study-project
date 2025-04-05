import styles from './ProductListItem.module.scss'

interface ProductListItemProps {
  imageUrl: string
  price: string
  title: string
}

export const ProductListItem = ({
  imageUrl,
  price,
  title,
}: ProductListItemProps) => {
  return (
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
  )
}
