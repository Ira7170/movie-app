import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  id: string;
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  description?: string;
}

const initialState: Movie[] = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.push(action.payload);
    },
    updateMovie: (state, action: PayloadAction<Movie>) => {
      const index = state.findIndex(m => m.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteMovie: (state, action: PayloadAction<string>) => {
      return state.filter(m => m.id !== action.payload);
    },
  },
});

export const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;

// ✔️	Feature
// ✅	Clean Movie interface with optional description
// ✅	Proper use of createSlice and PayloadAction
// ✅	Immutable deletion with filter()
// ✅	Proper state[index] = action.payload update
// ✅	Correct export of reducer and actions