import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Favorities from './pages/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favorities />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
