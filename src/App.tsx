
import Home from "./Pages/Home";
import AddMovie from "./Pages/AddMovie";
import EditMovie from "./Pages/EditMovie";
import MovieDetails from "./Pages/MovieDetail";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Route } from "react-router-dom";

<Route>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route
    path="/"
    element={<PrivateRoute><Home /></PrivateRoute>}
  />
  <Route
    path="/add"
    element={<PrivateRoute><AddMovie /></PrivateRoute>}
  />
  <Route
    path="/edit/:id"
    element={<PrivateRoute><EditMovie /></PrivateRoute>}
  />
  <Route
    path="/movie/:id"
    element={<PrivateRoute><MovieDetails /></PrivateRoute>}
  />
</Route>


//  import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { Route, Routes } from "react-router-dom";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Home from "./Pages/Home";
// import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Route>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
