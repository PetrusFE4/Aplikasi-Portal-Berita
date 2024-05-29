import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './pages/HomeContent';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><HomeContent /><Footer /></>} />
        <Route path="/category/:categoryName" element={<><Navbar /><CategoryPage /><Footer /></>} />
        <Route path="/news/:id" element={<><Navbar /><NewsPage /><Footer /></>} />
        <Route path="/about-us" element={<><Navbar /><AboutUsPage /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
