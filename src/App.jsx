import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Favorities from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourites" element={<Favorities />}></Route>
      </Routes>
    </MovieProvider>
  );
}

export default App
