import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../Types/Movie';
import styles from './MovieItem.module.css';

interface MovieItemProps {
  movie: Movie;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onEdit, onDelete }) => {
  return (
    <li className={styles.listItem}>
      <img
        src={movie.posterUrl || '/images/placeholder.png'}
        alt={`${movie.title} poster`}
        className={styles.poster}
      />
      <div className={styles.movieInfo}>
        <Link to={`/movie/${movie.id}`} className={styles.movieTitle}>
          {movie.title}
        </Link>
        <span className={styles.movieSubtitle}>
          by {movie.director} ({movie.releaseYear})
        </span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.editBtn} onClick={() => onEdit(movie.id)}>
          ✏️ Edit
        </button>
        <button className={styles.deleteBtn} onClick={() => onDelete(movie.id)}>
          🗑️ Delete
        </button>
      </div>
    </li>
  );
};

export default MovieItem;
