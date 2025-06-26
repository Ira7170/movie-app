import React from 'react';
import { Movie } from '../../Types/Movie';
import MovieItem from './MovieItem';

interface MovieListProps {
  movies: Movie[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onEdit, onDelete }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default MovieList;

