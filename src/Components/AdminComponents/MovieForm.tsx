
import React, { useEffect, useState } from 'react';
import { Movie } from '../../Types/Movie';

interface MovieFormProps {
  initialMovie: Movie | null;
  onSubmit: (movieData: Omit<Movie, 'id'> & { id?: string }) => void;
  onCancel: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialMovie, onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialMovie) {
      setTitle(initialMovie.title);
      setDirector(initialMovie.director);
      setGenre(initialMovie.genre);
      setReleaseYear(initialMovie.releaseYear.toString());
      setDescription(initialMovie.description ?? '');
    } else {
      // reset form
      setTitle('');
      setDirector('');
      setGenre('');
      setReleaseYear('');
      setDescription('');
    }
  }, [initialMovie]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !director || !genre || !releaseYear) {
      alert('Please fill in all required fields!');
      return;
    }

    onSubmit({
      id: initialMovie?.id,
      title,
      director,
      genre,
      releaseYear: Number(releaseYear),
      description: description || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title*" required />
      <input value={director} onChange={(e) => setDirector(e.target.value)} placeholder="Director*" required />
      <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre*" required />
      <input value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} placeholder="Year*" type="number" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (optional)" />
      
      <button type="submit">{initialMovie ? 'Update Movie' : 'Add Movie'}</button>
      {initialMovie && (
        <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default MovieForm;
