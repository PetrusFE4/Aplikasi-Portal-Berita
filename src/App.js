import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './pages/HomeContent';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';
import AboutUsPage from './pages/AboutUsPage';

// ADMIN
import MainLayout from './componentsAdmin/MainLayout';
import AdminDashboard from './pagesAdmin/Dashboad';
import AdminKategori from './pagesAdmin/Kategori';
import AdminBerita from './pagesAdmin/Berita';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><HomeContent /><Footer /></>} />
        <Route path="/category/:categoryName" element={<><Navbar /><CategoryPage /><Footer /></>} />
        <Route path="/news/:id" element={<><Navbar /><NewsPage /><Footer /></>} />
        <Route path="/about-us" element={<><Navbar /><AboutUsPage /><Footer /></>} />
        <Route path="/admin/*" element={
          <MainLayout>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="kategori" element={<AdminKategori />} />
              <Route path="berita" element={<AdminBerita />} />
              {/* Tambahkan route admin lainnya di sini */}
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
