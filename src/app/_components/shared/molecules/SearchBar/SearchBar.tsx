import styles from './SearchBar.module.scss';

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

export const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); 
  };

  return (
    <div className={styles['search-bar']}>
      <input 
        className={styles['search-bar__input-bar']} 
        type="text" 
        placeholder="Find a game"
        onChange={handleSearchChange}
      />
    </div>
  );
};
