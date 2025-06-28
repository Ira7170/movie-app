
import React, { useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { addMovie, updateMovie, deleteMovie } from '../../Features/moviesSlice';
import MovieForm from '../../Components/AdminComponents/MovieForm';
import MovieList from '../../Components/AdminComponents/MovieList';
import styles from './MovieDashboard.module.css';

const MovieDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);

  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedMovie = movies.find((m) => m.id === selectedMovieId) || null;

  // Filter movies by search term (title or director)
  const filteredMovies = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(term) ||
        movie.director.toLowerCase().includes(term)
    );
  }, [movies, searchTerm]);

  const handleAddOrUpdate = (movieData: {
    id?: string;
    title: string;
    director: string;
    genre: string;
    releaseYear: number;
    description?: string;
    posterUrl?: string;
  }) => {
    if (movieData.id) {
      dispatch(updateMovie(movieData as any));
      alert('Movie updated!');
    } else {
      dispatch(addMovie({ ...movieData, id: Date.now().toString() } as any));
      alert('Movie added!');
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
    <div className={styles.dashboardContainer}>
      <h1>🎬 Movie Dashboard</h1>

      <input
        type="text"
        className={styles.searchBox}
        placeholder="Search by title or director..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <MovieForm
        initialMovie={selectedMovie}
        onSubmit={handleAddOrUpdate}
        onCancel={() => setSelectedMovieId(null)}
      />

      <MovieList
        movies={filteredMovies}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MovieDashboard;

