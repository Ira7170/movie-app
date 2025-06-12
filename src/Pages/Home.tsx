// pages/Home.tsx
import { useMovies } from '../Context/MovieContext';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import MovieCard from '../Components/MovieCard';

// const Home = () => {
//   const { movies, deleteMovie } = useMovies();

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Movie List</h1>
//       <Link to="/add" className="text-blue-500">Add New Movie</Link>
//       {movies.map(movie => (
//         <div key={movie.id} className="border p-4 my-2">
//           <h2>{movie.title} ({movie.releaseYear})</h2>
//           <Link to={`/movie/${movie.id}`} className="text-blue-500">View</Link>
//           <Link to={`/edit/${movie.id}`} className="ml-2 text-green-500">Edit</Link>
//           <button onClick={() => deleteMovie(movie.id)} className="ml-2 text-red-500">Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };


export default function Home() {
  const { movies, deleteMovie } = useMovies();

  return (
    <div>
      <Link to="/add">➕ Add Movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.releaseYear}) – {movie.genre}
            <Link to={`/movie/${movie.id}`}> 🔍 View</Link>
            <Link to={`/edit/${movie.id}`}> ✏️ Edit</Link>
            <button onClick={() => deleteMovie(movie.id)}>❌ Delete</button>
          </li>
        ))}
 
        
      </ul>
    </div>
  );
}

// // Inside component return
// {movies.map(movie => (
//   <MovieCard key={movie.id} movie={movie} onDelete={deleteMovie} />
// ))}


<button onClick={() => signOut(auth)}>Logout</button>

