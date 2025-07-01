
import React, { useState, useEffect } from 'react';
import styles from './MovieForm.module.css';

interface MovieFormProps {
  initialMovie?: {
    id?: string;
    title: string;
    director: string;
    genre: string;
    releaseYear: number;
    description?: string;
    posterUrl?: string;
  }| null;
  onSubmit: (movieData: {
    id?: string;
    title: string;
    director: string;
    genre: string;
    releaseYear: number;
    description?: string;
    posterUrl?: string;
  }) => void;
  onCancel?: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialMovie, onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  useEffect(() => {
    if (initialMovie) {
      setTitle(initialMovie.title);
      setDirector(initialMovie.director);
      setGenre(initialMovie.genre);
      setReleaseYear(initialMovie.releaseYear.toString());
      setDescription(initialMovie.description ?? '');
      setPosterUrl(initialMovie.posterUrl ?? '');
    } else {
      setTitle('');
      setDirector('');
      setGenre('');
      setReleaseYear('');
      setDescription('');
      setPosterUrl('');
    }
  }, [initialMovie]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !director || !genre || !releaseYear) {
      alert('Please fill out all required fields');
      return;
    }
    const releaseYearNumber = Number(releaseYear);
    if (isNaN(releaseYearNumber) || releaseYearNumber <= 1800 || releaseYearNumber > new Date().getFullYear()) {
      alert('Please enter a valid release year');
      return;
    }

    onSubmit({
      id: initialMovie?.id,
      title,
      director,
      genre,
      releaseYear: releaseYearNumber,
      description,
      posterUrl,
    });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.inputField}
        required
      />
      <input
        type="text"
        placeholder="Director *"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        className={styles.inputField}
        required
      />
      <input
        type="text"
        placeholder="Genre *"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className={styles.inputField}
        required
      />
      <input
        type="number"
        placeholder="Release Year *"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        className={styles.inputField}
        required
        min="1800"
        max={new Date().getFullYear()}
      />
      <input
        type="text"
        placeholder="Poster Image URL"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        className={styles.inputField}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`${styles.inputField} ${styles.textArea}`}
      />

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitBtn}>
          {initialMovie ? 'Update Movie' : 'Add Movie'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className={styles.cancelBtn}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default MovieForm;

