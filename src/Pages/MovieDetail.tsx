
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../App/hooks';
import { updateMovie, deleteMovie } from '../Features/moviesSlice';
import MovieForm from '../Components/AdminComponents/MovieForm';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const movie = useAppSelector((state) =>
    state.movies.find((m) => m.id === id)
  );

  const handleUpdate = (updatedData: {
    id?: string;
    title: string;
    director: string;
    genre: string;
    releaseYear: number;
    description?: string;
  }) => {
    if (!movie) return;
    dispatch(updateMovie({ ...updatedData, id: movie.id }));
    alert('Movie updated!');
  };

  const handleDelete = () => {
    if (movie && window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(movie.id));
      navigate('/');
    }
  };

  if (!movie) return <div>Movie not found.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Edit Movie</h2>
      <MovieForm
        initialMovie={movie}
        onSubmit={handleUpdate}
        onCancel={() => navigate('/')}
      />
      <button onClick={handleDelete} style={{ marginTop: '10px', color: 'red' }}>
        🗑️ Delete Movie
      </button>
    </div>
  );
};

export default MovieDetail;
