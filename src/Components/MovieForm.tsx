import React, { useState } from 'react';
import { Movie } from '../Types/Movie';

interface MovieFormProps {
  initialData?: Movie;
  onSubmit: (movie: Omit<Movie, 'id'>) => void;
  submitText: string;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialData, onSubmit, submitText }) => {
  const [formData, setFormData] = useState<Omit<Movie, 'id'>>({
    title: initialData?.title || '',
    director: initialData?.director || '',
    genre: initialData?.genre || '',
    releaseYear: initialData?.releaseYear || new Date().getFullYear(),
    description: initialData?.description || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'releaseYear' ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="w-full border px-3 py-2"
      />
      <input
        name="director"
        value={formData.director}
        onChange={handleChange}
        placeholder="Director"
        required
        className="w-full border px-3 py-2"
      />
      <input
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Genre"
        required
        className="w-full border px-3 py-2"
      />
      <input
        type="number"
        name="releaseYear"
        value={formData.releaseYear}
        onChange={handleChange}
        placeholder="Release Year"
        required
        className="w-full border px-3 py-2"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border px-3 py-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {submitText}
      </button>
    </form>
  );
};

export default MovieForm;