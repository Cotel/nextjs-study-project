import { ChangeEvent } from 'react'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  setSearchQuery: (query: string) => void
}

export const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <input
      className={styles['search-bar__input-bar']}
      type="text"
      placeholder="Find a game"
      onChange={handleSearchChange}
    />
  )
}
