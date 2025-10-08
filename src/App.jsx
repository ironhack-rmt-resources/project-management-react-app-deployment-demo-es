import './App.css'
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {

  const [movies, setMovies] = useState();

  return (
    <div className="App">
      
      <Navbar />

      {movies.map(movie => {
        return <p>this is a movie</p>
      })}

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />        
      </Routes>
      
    </div>
  );
}

export default App;