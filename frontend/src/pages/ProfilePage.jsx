import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [favoriteNews, setFavoriteNews] = useState([]);
  const [favoriteArticles, setFavoriteArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null); // State untuk menyimpan artikel yang dipilih

  useEffect(() => {
    const fetchUserData = async () => {
      const id = sessionStorage.getItem("id");
      const token = sessionStorage.getItem("token");
      if (!id || !token) {
        console.error("User ID or token not found in sessionStorage");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5050/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
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
        const response = await axios.get("http://localhost:5050/favorites", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
          }
        });
        setFavoriteNews(response.data); // Assuming response.data is an array of favorite news objects
      } catch (error) {
        console.error("Error fetching favorite news:", error);
      } finally {
        setLoading(false); // Update loading state after fetching favorite news
      }
    };

    fetchFavoriteNews();
  }, []);

  useEffect(() => {
    const fetchFavoriteArticles = async () => {
      try {
        const newsIds = favoriteNews.map((fav) => fav.id_news);
        const articleRequests = newsIds.map((newsId) =>
          axios.get(`http://localhost:5050/news/${newsId}`)
        );
        const articleResponses = await Promise.all(articleRequests);
        const articlesData = articleResponses.map((response) => response.data);
        setFavoriteArticles(articlesData);
      } catch (error) {
        console.error("Error fetching favorite articles:", error);
      }
    };

    fetchFavoriteArticles();
  }, [favoriteNews]);

  const handleNavigateToChangePassword = () => {
    navigate(`/changepassword`);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article); // Set artikel yang dipilih ke state

    // Navigasi ke halaman detail berita dengan membawa ID artikel
    navigate(`/news/${article.id_news}`);
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
                          src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
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
        onClick={handleNavigateToChangePassword}
        className="text-gray-600 hover:text-black text-sm py-2 font-bold transition-colors duration-300"
      >
        Ganti Password
      </button>
                      
                    </div>
                  </div>
                </div>
            
              </>
            )}
          </div>
          {/* Edit Favorites */}
          <div className="mt-12 flex justify-center">
            
          </div>

          {/* Favorite Articles */}
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
  {favoriteArticles.map((article, index) => (
    <div
      key={index} // Menggunakan indeks sebagai kunci
      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
      onClick={() => handleArticleClick(article)}
    >
      <img className="w-full h-48 object-cover" src={article.image} alt={article.title} />
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">{article.title}</p>
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
