import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://apiberita.pandekakode.com/api/artikels/${id}`);
        setNews(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

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
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-3/4 bg-white p-8 shadow-lg rounded-l-lg">
        {news.image_url && (
          <img src={news.image_url} alt="Cover" className="w-full h-64 object-cover rounded" />
        )}
        <h1 className="text-3xl font-bold mt-4">{news.title}</h1>
        <p className="mt-4 text-justify">{news.content}</p>
      </div>
      <div className="w-1/4 p-8">
        <div className="bg-white p-4 shadow-lg rounded-r-lg">
          <h2 className="text-xl font-semibold">Berita Terkait</h2>
          <ul className="mt-4 space-y-2">
            <li className="text-blue-600 hover:underline">{news.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
