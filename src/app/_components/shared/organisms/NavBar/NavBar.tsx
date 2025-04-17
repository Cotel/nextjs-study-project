import Link from 'next/link'
import { Button } from '../../atoms/Button/Button'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <nav className={styles['nav-bar']}>
      <Link href="/" className={styles['nav-bar__left-actions']}>QEYS</Link>
      <div className={styles['nav-bar__right-actions']}>
        <Button variant="transparent">Sign In</Button>
        <Button variant="solid">Sign Up</Button>
      </div>
    </nav>
  )
}
