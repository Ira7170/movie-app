import React from 'react';
import { Movie } from '../Types/Movie';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
  onDelete: (id: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">{movie.title} ({movie.releaseYear})</h2>
      <p className="text-sm text-gray-600">Directed by {movie.director}</p>
      <p className="text-sm">Genre: {movie.genre}</p>

      <div className="mt-2 space-x-4">
        <Link to={`/movie/${movie.id}`} className="text-blue-500 hover:underline">View</Link>
        <Link to={`/edit/${movie.id}`} className="text-green-500 hover:underline">Edit</Link>
        <button
          onClick={() => onDelete(movie.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;