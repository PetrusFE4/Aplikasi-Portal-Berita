import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [favoriteNews, setFavoriteNews] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Mock user data
        const mockUserData = {
          profilePicture: null, // Assume no profile picture is set
          username: "john_doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          gender: "Male",
          birthdate: "1990-01-01",
          address: "123 Main Street, Anytown, USA",
          job: "Software Developer",
        };
        setUser(mockUserData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchFavoriteNews = async () => {
      try {
        // Mock favorite news data
        const mockFavoriteNews = [
          { id: 1, title: "Berita Favorit 1", cover: "cover1.jpg" },
          { id: 2, title: "Berita Favorit 2", cover: "cover2.jpg" },
          { id: 3, title: "Berita Favorit 3", cover: "cover3.jpg" },
          { id: 4, title: "Berita Favorit 4", cover: "cover4.jpg" },
          { id: 5, title: "Berita Favorit 5", cover: "cover5.jpg" },
          { id: 6, title: "Berita Favorit 6", cover: "cover6.jpg" },
        ];
        setFavoriteNews(mockFavoriteNews);
      } catch (error) {
        console.error("Error fetching favorite news:", error);
      }
    };

    fetchFavoriteNews();
  }, []);

  const handleChangePassword = () => {
    alert("Change Password feature is under construction.");
  };

  const handleEditProfile = () => {
    alert("Edit Profile feature is under construction.");
  };

  const handleCompleteData = () => {
    alert("Complete Data feature is under construction.");
  };

  const handleEditFavorites = () => {
    alert("Edit Favorites feature is under construction.");
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border text-primary" role="status">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto max-w-screen-lg p-4 mt-20 md:mt-36">
          <h1 className="text-2xl font-bold mb-8 text-center">Profil Pengguna</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {user && (
              <>
                {/* Profile Section */}
                <div className="flex justify-center">
                  <div className="rounded-lg bg-white p-6 shadow-lg w-full md:w-3/4">
                    {/* Profile Picture and Basic Info */}
                    <div className="flex flex-col items-center">
                      <img
                        src="../../../assets/profile.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4"
                      />
                      <h2 className="text-2xl font-semibold mb-2">{user.username}</h2>
                      <div className="flex items-center mb-2">
                        <p className="text-lg">{user.email}</p>
                      </div>
                    </div>
                    {/* Edit Profile and Change Password */}
                    <div className="mt-4 flex flex-col items-center">
                      <button
                        onClick={handleEditProfile}
                        className="text-gray-600 hover:text-black text-sm py-2 font-bold transition-colors duration-300"
                      >
                        Ubah Profil
                      </button>
                      <button
                        onClick={handleChangePassword}
                        className="text-gray-600 hover:text-black text-sm py-2 font-bold transition-colors duration-300"
                      >
                        Ganti Password
                      </button>
                    </div>
                  </div>
                </div>
                {/* Additional Info */}
                <div className="flex justify-center">
                  <div className="rounded-lg bg-white p-6 shadow-lg w-full md:w-3/4">
                  <div className="mb-4 flex items-center">
                      <p className="text-lg">
                        <span className="font-semibold">Telepon:</span> {user.phone}
                      </p>
                    </div>
                    <div className="mb-4 flex items-center">
                      <p className="text-lg font-semibold">Alamat:</p>
                      <p className="ml-2">{user.address}</p>
                    </div>
                    <div className="mb-4 flex items-center">
                      <p className="text-lg font-semibold">Pekerjaan:</p>
                      <p className="ml-2">{user.job}</p>
                    </div>
                    <div className="mb-4 flex items-center">
                      <p className="text-lg font-semibold">Gender:</p>
                      <p className="ml-2">{user.gender}</p>
                    </div>
                    <div className="mb-4 flex items-center">
                      <p className="text-lg font-semibold">Tanggal Lahir:</p>
                      <p className="ml-2">{user.birthdate}</p>
                    </div>
                    <button
                      onClick={handleCompleteData}
                      className="text-gray-600 hover:text-black text-sm py-2 font-bold transition-colors duration-300"
                    >
                      Lengkapi Data
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Edit Favorites */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleEditFavorites}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center"
            >
              Edit Berita Favorit
            </button>
          </div>
          {/* Favorite News */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {favoriteNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img className="w-full h-48 object-cover" src={news.cover} alt={news.title} />
                <div className="p-4">
                  <p className="text-lg font-semibold mb-2">{news.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
