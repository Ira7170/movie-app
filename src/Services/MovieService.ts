import { Movie } from '../Types/Movie';

export class MovieService {
  private static storageKey = 'movies';

  static getMovies(): Movie[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  static saveMovies(movies: Movie[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }

  static addMovie(movie: Movie) {
    const movies = this.getMovies();
    movies.push(movie);
    this.saveMovies(movies);
  }

  static updateMovie(updatedMovie: Movie) {
    const movies = this.getMovies().map(m =>
      m.id === updatedMovie.id ? updatedMovie : m
    );
    this.saveMovies(movies);
  }

  static deleteMovie(id: string) {
    const movies = this.getMovies().filter(m => m.id !== id);
    this.saveMovies(movies);
  }

  static getMovieById(id: string): Movie | undefined {
    return this.getMovies().find(m => m.id === id);
  }
}
