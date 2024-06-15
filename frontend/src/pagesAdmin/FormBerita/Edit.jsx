import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  const { id } = useParams(); // Ambil ID berita dari URL
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    id_category: "",
    id_user: "",
    published_at: "",
  });
  const [loading, setLoading] = useState(true); // State untuk loading
  const navigate = useNavigate();

  // Ambil token dari sessionStorage
  const token = sessionStorage.getItem("token") || "";
  console.log("Token: ", token);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        console.log(`Fetching data for ID: ${id}`);
        const response = await axios.get(`http://localhost:5050/news/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetched article data:", response.data);

        const { title, description, content, image, id_category, id_user, published_at } = response.data;
        setFormData({
          title,
          description,
          content,
          image,
          id_category: id_category.toString(), // Pastikan id_category berupa string
          id_user: id_user.toString(), // Pastikan id_user berupa string
          published_at, // Pastikan published_at dalam format yang benar
        });
        setLoading(false); // Set loading ke false setelah data diambil
      } catch (error) {
        console.error("Error fetching article: ", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch article data.",
        });
        setLoading(false); // Set loading ke false jika terjadi error
      }
    };

    fetchArticle();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting form data: ", formData);
      const response = await axios.put(`http://localhost:5050/news/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Update response:", response.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Article updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/admin/berita");
    } catch (error) {
      console.error("Error updating article: ", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update article.",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Tampilan loading
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Edit Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title:</label>{" "}
          <span className="text-red-500">*</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block">Description:</label>{" "}
          <span className="text-red-500">*</span>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block">Content:</label>{" "}
          <span className="text-red-500">*</span>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label className="block">Image URL:</label>{" "}
          <span className="text-red-500">*</span>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block">Category:</label>{" "}
          <span className="text-red-500">*</span>
          <input
            type="text"
            name="id_category"
            value={formData.id_category}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Article
        </button>
      </form>
    </div>
  );
};

export default Edit;
