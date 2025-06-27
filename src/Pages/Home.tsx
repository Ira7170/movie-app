import React from 'react';
import MovieDashboard from '../Components/UserUI/MovieDashboard/MovieDashboard';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Movie App</h1>
      <MovieDashboard />
    </div>
  );
};

export default Home;
