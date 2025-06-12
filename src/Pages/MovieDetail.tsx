import { useParams } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";

export default function MovieDetails() {
  const { id } = useParams();
  const { getMovie } = useMovies();
  const movie = getMovie(id!);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Year:</strong> {movie.releaseYear}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
}