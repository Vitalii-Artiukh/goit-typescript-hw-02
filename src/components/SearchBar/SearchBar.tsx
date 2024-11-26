import React, { FC, FormEvent } from 'react';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

interface Photos {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
  user: {
    first_name: string;
    location: string;
    total_likes: number;
  };
}

interface SearchBarProps {
  defaultValue: () => void;
  setSearchQuery: string;
}

const SearchBar: FC<SearchBarProps> = ({ defaultValue, setSearchQuery }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = event.target.elements.search.value.trim();

    if (query === '') {
      toast.error('Please enter your search queries!', {
        position: 'top-right',
      });
    } else {
      defaultValue();
      setSearchQuery(query);
      event.target.reset();
    }
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.submit} type="submit">
          <FaSearch />
          {'  '}Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
