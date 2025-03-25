import styles from './SearchBar.module.scss'

export const SearchBar = () =>{
  return (
    <div className={styles['search-bar']}>
      <input className={styles['search-bar__input-bar']} type="text" placeholder='Find a game'/>
    </div>
  )
}
