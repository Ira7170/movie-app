import { useParams, useNavigate } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import { useEffect, useState } from "react";
import MovieForm from '../Components/MovieForm';

// const EditMovie = () => {
//   const { id } = useParams();
//   const { movies, updateMovie } = useMovies();
//   const navigate = useNavigate();

//   const movie = movies.find(m => m.id === id);
//   if (!movie) return <div>Movie not found</div>;

//   const handleUpdate = (movieData) => {
//     updateMovie({ ...movie, ...movieData });
//     navigate('/');
//   };

//   return <MovieForm initialData={movie} onSubmit={handleUpdate} submitText="Update Movie" />;
// };

// export default EditMovie;

export default function EditMovie() {
  const { id } = useParams();
  const { getMovie, updateMovie } = useMovies();
  const movie = getMovie(id!);
  const navigate = useNavigate();

  const [form, setForm] = useState(movie);

  useEffect(() => {
    if (movie) setForm(movie);
  }, [movie]);

  if (!form) return <p>Movie not found</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMovie(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input value={form.director} onChange={(e) => setForm({ ...form, director: e.target.value })} />
      <input value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })} />
      <input type="number" value={form.releaseYear} onChange={(e) => setForm({ ...form, releaseYear: +e.target.value })} />
      <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <button type="submit">Save Changes</button>
    </form>
  );
}