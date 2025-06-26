import React from 'react';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  title: string;
  posterUrl: string;
  year: number;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, year, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={posterUrl} alt={title} className={styles.poster} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
