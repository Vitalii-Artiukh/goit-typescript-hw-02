import React from 'react';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

export default function SearchBar({ defaultValue, setSearchQuery }) {
  const handleSubmit = event => {
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
}
