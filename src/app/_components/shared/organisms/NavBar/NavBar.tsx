import { Button } from '../../atoms/Button/Button'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <nav className={styles['nav-bar']}>
      <div className={styles['nav-bar__left-actions']}>
      <h2>QUIMUKEYS</h2>
      </div>
      <div className={styles['nav-bar__right-actions']}>
        <Button variant="outline">Sign In</Button>
        <Button variant="solid">Sign Up</Button>
      </div>
    </nav>
  )
}
