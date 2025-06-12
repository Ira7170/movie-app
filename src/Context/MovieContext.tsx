import { createContext, useContext, useEffect, useState } from "react";
import { Movie } from "../Types/Movie";
import { v4 as uuidv4 } from "uuid";

interface MovieContextType {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, "id">) => void;
  updateMovie: (updatedMovie: Movie) => void;
  deleteMovie: (id: string) => void;
  getMovie: (id: string) => Movie | undefined;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem("movies");
    if (stored) setMovies(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie: Omit<Movie, "id">) => {
    const newMovie = { ...movie, id: uuidv4() };
    setMovies((prev) => [...prev, newMovie]);
  };

  const updateMovie = (updatedMovie: Movie) => {
    setMovies((prev) => prev.map((m) => (m.id === updatedMovie.id ? updatedMovie : m)));
  };

  const deleteMovie = (id: string) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  const getMovie = (id: string) => movies.find((m) => m.id === id);

  return (
    <MovieContext.Provider value={{ movies, addMovie, updateMovie, deleteMovie, getMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovies must be used inside MovieProvider");
  return context;
};

