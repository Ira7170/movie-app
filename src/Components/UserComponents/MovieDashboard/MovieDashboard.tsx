
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Features/hooks';
import { addMovie, updateMovie, deleteMovie } from '../../../Features/moviesSlice';
import MovieForm from '../../AdminComponents/MovieForm';
import MovieList from '../../AdminComponents/MovieList';

const MovieDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);

  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  const selectedMovie = movies.find((m) => m.id === selectedMovieId) || null;

  const handleAddOrUpdate = (movieData: {
    id?: string;
    title: string;
    director: string;
    genre: string;
    releaseYear: number;
    description?: string;
  }) => {
    if (movieData.id) {
      dispatch(updateMovie(movieData as any));
      alert('Movie updated!');
    } else {
      dispatch(addMovie({ ...movieData, id: Date.now().toString() } as any));
    }
    setSelectedMovieId(null);
  };

  const handleEdit = (id: string) => setSelectedMovieId(id);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
      if (selectedMovieId === id) setSelectedMovieId(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎬 Movie Dashboard</h1>
      <MovieForm
        initialMovie={selectedMovie}
        onSubmit={handleAddOrUpdate}
        onCancel={() => setSelectedMovieId(null)}
      />
      <MovieList movies={movies} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default MovieDashboard;
