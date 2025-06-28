import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetail from './Pages/MovieDetail';
import MovieDashboard  from './Pages/MovieDashboard/MovieDashboard';
import { Header } from './Components/Header'
import { LoginForm } from './Pages/LoginForm'
import { RegisterForm } from './Pages/RegisterForm'
import { RootState } from './App/store';
import { useSelector } from 'react-redux';
import './styles/App.css'

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" replace /> : <LoginForm />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/dashboard" replace /> : <RegisterForm />}
          />
          <Route 
            path="/dashboard"
            element={user ? <MovieDashboard/> : <Navigate to="/login" replace />} 
          /> 
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;