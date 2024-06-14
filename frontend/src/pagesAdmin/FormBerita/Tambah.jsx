import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Tambah = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image_url: null,
    kategori_id: "",
  });

  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image_url: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("image_url", formData.image_url);
    formDataToSend.append("kategori_id", formData.kategori_id);

    try {
      const response = await axios.post(
        "https://apiberita.pandekakode.com/api/artikels",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setFormData({
        title: "",
        description: "",
        content: "",
        image_url: null,
        kategori_id: "",
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Artikel berhasil ditambahkan!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/admin/berita"); // Redirect to the specified route
      });
    } catch (error) {
      console.error("Error adding article: ", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal menambahkan artikel.",
      });
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://apiberita.pandekakode.com/api/kategori"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Tambah Artikel</h2>
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
          <label className="block">Image:</label>{" "}
          <span className="text-red-500">*</span>
          <input
            type="file"
            name="image_url"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block">Kategori:</label>{" "}
          <span className="text-red-500">*</span>
          <select
            name="kategori_id"
            value={formData.kategori_id}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Pilih Kategori</option>{" "}
            <span className="text-red-500">*</span>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.nama}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Tambah Artikel
        </button>
      </form>
    </div>
  );
};

export default Tambah;
