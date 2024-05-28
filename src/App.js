import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './pages/HomeContent';
import TentangKami from './pages/TentangKami';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/tentangkami" element={<TentangKami />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
