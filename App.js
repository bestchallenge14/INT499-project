import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StreamList from './pages/StreamList';
import Movies from './pages/Movies';
import Cart from './pages/Cart';
import About from './pages/About';
import MovieSearch from './pages/MovieSearch'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<MovieSearch />} />
            
            <Route path="*" element={<div style={{padding: '2rem', textAlign: 'center'}}><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;