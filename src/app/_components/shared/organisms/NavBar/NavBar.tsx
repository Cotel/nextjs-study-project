import { Button } from '../../atoms/Button/Button'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <nav className={styles['nav-bar']}>
      <h1>Enriconsolas</h1>

      <div className={styles['nav-bar__right-actions']}>
        <Button>Sign In</Button>
        <Button variant="outline">Sign Up</Button>
      </div>
    </nav>
  )
}
