import React from 'react';
import styles from './SelectedMovie.module.css';

interface SelectedMovieProps {
  title: string;
  year: number;
  posterUrl: string;
  description?: string;
}

const SelectedMovie: React.FC<SelectedMovieProps> = ({ title, year, posterUrl, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.selectedLabel}>Selected</h1>
        <h2 className={styles.movieTitle}>
          {title} ({year})
        </h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <img className={styles.poster} src={posterUrl} alt={`${title} poster`} />
    </div>
  );
};

export default SelectedMovie;
