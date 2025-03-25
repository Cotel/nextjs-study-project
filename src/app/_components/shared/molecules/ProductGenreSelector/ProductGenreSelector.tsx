import { Button } from '../../atoms/Button/Button'
import styles from './ProductGenreSelector.module.scss'

export const ProductGenreSelector = () => {
  return <div className={styles['product-genre-selector']}>
    <Button variant='outline'>Consoles</Button>
    <Button variant='solid'>Video Games</Button>
  </div>
}
