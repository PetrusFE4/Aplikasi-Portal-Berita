import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const [mainNews, setMainNews] = useState(null);
  const [sideNews, setSideNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image URL

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://apiberita.pandekakode.com/api/artikels"
        );
        const articles = response.data.data.sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at)
        );

        setMainNews(articles[0]);
        setSideNews(articles.slice(1, 3));
        setLatestNews(articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const formatDateIndonesian = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div
      className="mx-auto max-w-screen-lg p-4 light theme-light"
      style={{ marginTop: "100px" }}
    >
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
          {mainNews && (
            <div className="md:col-span-4">
              <img
                src={mainNews.image_url || placeholderImage}
                alt={mainNews.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <span className="block text-xs text-gray-600 mt-2">
                {formatDateIndonesian(mainNews.published_at)}
              </span>
              <Link
              to={`/news/${mainNews.id}`}
              >
              <h2 className="text-xl font-bold mt-2  hover:text-gray-600">{mainNews.title}</h2>
              </Link>

              <Link
                to={`/news/${mainNews.id}`}
                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:text-gray-600"
              >
                Read More
              </Link>
            </div>
          )}

          <div className="md:col-span-1 space-y-4">
            {sideNews.map((news, index) => (
              <div className="mb-4" key={index}>
                <img
                  src={news.image_url || placeholderImage}
                  alt={news.title}
                  className="w-full h-54 object-cover rounded-lg shadow-lg"
                />
                <span className="block text-xs text-gray-600 mt-2">
                  {formatDateIndonesian(news.published_at)}
                </span>
                <Link
                  to={`/news/${news.id}`}
                >
                <h3 className="text-sm font-bold mt-2">{mainNews.title}</h3>
                </Link>
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && <hr className="mt-8 border border-black" />}

      {!loading && (
        <div className="mt-1">
          <h2 className="text-2xl font-bold mb-8">Berita Terkini</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {latestNews.length > 0 && (
                <div className="mb-4">
                  <img
                    src={latestNews[0].image_url || placeholderImage}
                    alt={latestNews[0].title}
                    className="w-full h-68 object-cover rounded-lg shadow-lg"
                  />
                  <div className="mt-2">
                    <Link
                      to={`/news/${latestNews[0].id}`}
                    >
                      <h3 className="text-sm font-bold mt-2">
                          {latestNews[0].title}
                      </h3>
                    </Link>
                    <span className="block text-xs text-gray-600 mt-1">
                      {formatDateIndonesian(latestNews[0].published_at)}
                    </span>
                    <p className="mt-1 text-sm">
                      {latestNews[0].description &&
                      latestNews[0].description.length > 150
                        ? latestNews[0].description.substring(0, 150) + "..."
                        : latestNews[0].description}
                    </p>
                    <Link
                      to={`/news/${latestNews[0].id}`}
                      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-0">
              {latestNews.slice(1, 3).map((news, index) => (
                <div className="flex mb-4" key={index}>
                  <img
                    src={news.image_url || placeholderImage}
                    alt={news.title}
                    className="w-48 object-cover flex-shrink-0 rounded-lg shadow-lg"
                  />
                  <div className="ml-4 flex-grow">
                  <Link
                      to={`/news/${news.id}`}
                    >
                    <h3 className="text-sm font-bold mt-2">{news.title}</h3>
                  </Link>
                    <span className="block text-xs text-gray-600 mt-1">
                      {formatDateIndonesian(news.published_at)}
                    </span>
                    <p className="mt-1 text-xs">
                      {news.description && news.description.length > 150
                        ? news.description.substring(0, 150) + "..."
                        : news.description}
                    </p>
                    <Link
                      to={`/news/${news.id}`}
                      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!loading && <hr className="mt-8 border border-black" />}

      <div className="mt-1">
        <h2 className="text-2xl font-bold mb-8">Berita Lainnya</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {latestNews.slice(3, 7).map((news, index) => (
            <div key={index}>
              <img
                src={news.image_url || placeholderImage}
                alt={news.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <span className="block text-xs text-gray-600 mt-1">
                {formatDateIndonesian(news.published_at)}
              </span>
              <div className="mt-2">
              <Link
                  to={`/news/${news.id}`}
                    >
                <h3 className="text-base font-bold mt-2 line-clamp-2">
                  {news.title}
                </h3>
              </Link>
                <p className="mt-1 text-sm line-clamp-4">
                  {news.description && news.description.length > 150
                    ? news.description.substring(0, 150) + "..."
                    : news.description}
                </p>
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
