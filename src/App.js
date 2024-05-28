import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './pages/HomeContent';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;