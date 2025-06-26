
import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../Types/Movie';

interface MovieItemProps {
  movie: Movie;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onEdit, onDelete }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>
        <strong>{movie.title}</strong>
      </Link>{' '}
      by {movie.director} ({movie.releaseYear})
      <button onClick={() => onEdit(movie.id)} style={{ marginLeft: '10px' }}>
        ✏️ Edit
      </button>
      <button onClick={() => onDelete(movie.id)} style={{ marginLeft: '5px', color: 'red' }}>
        🗑️ Delete
      </button>
    </li>
  );
};

export default MovieItem;
