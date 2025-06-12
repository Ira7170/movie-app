import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import MovieForm from '../Components/MovieForm';
import { v4 as uuidv4 } from 'uuid';

// const AddMovie1 = () => {
//   const { addMovie } = useMovies();
//   const navigate = useNavigate();

//   const handleAdd = (movieData) => {
//     addMovie({ ...movieData, id: uuidv4() });
//     navigate('/');
//   };

//   return <MovieForm onSubmit={handleAdd} submitText="Add Movie" />;
// };

// export default AddMovie1;

export default function AddMovie() {
  const { addMovie } = useMovies();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: 2024,
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMovie(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Director" value={form.director} onChange={(e) => setForm({ ...form, director: e.target.value })} />
      <input placeholder="Genre" value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })} />
      <input type="number" placeholder="Year" value={form.releaseYear} onChange={(e) => setForm({ ...form, releaseYear: +e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <button type="submit">Add Movie</button>
    </form>
  );
}
