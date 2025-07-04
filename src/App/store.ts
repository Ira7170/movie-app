import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../Features/moviesSlice'; 
import authReducer from '../Features/authSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


