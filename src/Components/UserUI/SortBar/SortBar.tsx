import React from 'react';
import styles from './SortBar.module.css';

interface SortBarProps {
  activeSort: 'title' | 'author';
  onSortChange: (sortBy: 'title' | 'author') => void;
}

const SortBar: React.FC<SortBarProps> = ({ activeSort, onSortChange }) => {
  return (
    <div className={styles.sortBar}>
      <span className={styles.label}>sort by</span>
      <button
        className={`${styles.sortButton} ${activeSort === 'title' ? styles.active : ''}`}
        onClick={() => onSortChange('title')}
      >
        title
      </button>
      <button
        className={`${styles.sortButton} ${activeSort === 'author' ? styles.active : ''}`}
        onClick={() => onSortChange('author')}
      >
        author
      </button>
    </div>
  );
};

export default SortBar;
