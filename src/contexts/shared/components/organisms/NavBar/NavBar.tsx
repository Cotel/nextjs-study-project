import { Flex, Link } from '@radix-ui/themes'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <Flex className={styles['navBar']} asChild p="4">
      <nav>
        <Link href="/public" underline="none" weight="bold" size="5">
          Enriconsolas
        </Link>
      </nav>
    </Flex>
  )
}
