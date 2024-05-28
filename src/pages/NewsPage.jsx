import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { IoShareSocial } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";

const NewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments] = useState([]); // State untuk menyimpan komentar
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://apiberita.pandekakode.com/api/artikels/${id}`
        );
        setNews(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news:", error);
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      // Implementasi pengambilan data komentar dari API
    };

    const fetchLatestNews = async () => {
      try {
        const response = await axios.get(
          "https://apiberita.pandekakode.com/api/artikels"
        );
        setLatestNews(response.data.data);
      } catch (error) {
        console.error("Error fetching latest news:", error);
      }
    };

    fetchNews();
    fetchComments();
    fetchLatestNews();
  }, [id]);

  const formatDateIndonesian = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!news) {
    return <div>News not found.</div>;
  }

  return (
    <div className="mx-auto max-w-screen-lg p-4 light theme-light mt-20 md:mt-36">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-4">
          <div className="mt-1 mb-2 flex items-center">
            <p className="text-xs text-gray-500 mr-2">Home &gt; {news.category}</p>
          </div>
          <h2 className="text-2xl font-bold mt-1 mb-2">{news.title}</h2>
          <div className="flex gap-2 mt-3 mb-3">
            <IoShareSocial className="text-lg text-gray-500 cursor-pointer hover:text-black" />
            <FaBookmark className="text-lg text-gray-500 cursor-pointer hover:text-black" />
          </div>
          <img
            src={news.image_url}
            alt="Cover"
            className="w-full h-96 md:w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/10" }}
          />
          <p className="text-sm text-gray-500 mt-2">
            {formatDateIndonesian(news.published_at)}
          </p>
          <hr className="my-4 border-t border-gray-300" />
          <h3 className="text-sm font-bold mt-1 mb-2">{news.title}</h3>
          <div className="text-justify">{news.content}</div>
          <hr className="my-4 border-t border-gray-300" />
          <div>
            <h3 className="text-lg font-semibold">Komentar</h3>
            <ul className="mt-4">
              {comments.map((comment) => (
                <li key={comment.id} className="mb-2">
                  {comment.content}
                </li>
              ))}
            </ul>
            <textarea
              className="w-full p-2 border rounded mt-4"
              rows="4"
              placeholder="Tulis komentar anda..."
            ></textarea>
          </div>
        </div>
        <div className="md:col-span-1">
          {/* Konten samping */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Iklan</h3>
            <p>Mie Sedap</p>
          </div>
        </div>
      </div>

      {/* Daftar Berita Lainnya */}
      <div className="mt-1">
        <h2 className="text-2xl font-bold mb-8">Berita Lainnya</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {latestNews.slice(3, 7).map((newsItem, index) => (
            <div key={index}>
              <img
                src={newsItem.image_url}
                alt={newsItem.title}
                className="w-full md:w-11/12 h-64 object-cover rounded-lg shadow-lg"
              />
              <span className="block text-xs text-gray-600 mt-1">
                {formatDateIndonesian(newsItem.published_at)}
              </span>
              <div className="mt-2">
                <Link to={`/news/${newsItem.id}`}>
                  <h3 className="text-base font-bold mt-2 line-clamp-2 hover:text-gray-500">
                    {newsItem.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
