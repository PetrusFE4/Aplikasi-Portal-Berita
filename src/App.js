import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './pages/HomeContent';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';
import AboutUsPage from './pages/AboutUsPage';

// AUTH
import Login from "./Auth/Login";
// AUTH


// ADMIN
import MainLayout from './componentsAdmin/MainLayout';
import AdminDashboard from './pagesAdmin/Dashboad';
import AdminKategori from './pagesAdmin/Kategori';
import AdminBerita from './pagesAdmin/Berita';
// ADMIN

// ADMIN FORM
import KategoriTambah from './pagesAdmin/FormKategori/Tambah';
import BeritaTambah from './pagesAdmin/FormBerita/Tambah';
// ADMIN FORM

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><HomeContent /><Footer /></>} />
        <Route path="/category/:categoryName" element={<><Navbar /><CategoryPage /><Footer /></>} />
        <Route path="/news/:id" element={<><Navbar /><NewsPage /><Footer /></>} />

        <Route path="/about-us" element={<><Navbar /><AboutUsPage /><Footer /></>} />
        {/* AUTH */}
        <Route path="/login" element={<><Login /><Footer /></>} />
        {/* AUTH */}

        {/* ADMIN */}
        <Route path="/admin/*" element={
          <MainLayout>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />

              {/* KATEGORI */}
              <Route path="kategori" element={<AdminKategori />} />
              <Route path="kategori/tambah" element={<KategoriTambah />} />
              {/* KATEGORI */}

              {/* BERITA */}
              <Route path="berita" element={<AdminBerita />} />
              <Route path="berita/tambah" element={<BeritaTambah />} />
              {/* BERITA */}

            </Routes>
          </MainLayout>
        } />
        {/* ADMIN */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;