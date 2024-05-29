import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tambah = () => {
  const [nama, setNama] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "https://apiberita.pandekakode.com/api/kategori",
        { nama }
      );
      if (response.data.success) {
        setSuccess(response.data.message);
        setNama("");
        navigate("/admin/kategori");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Error adding category");
      } else {
        setError("Error adding category");
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Tambah Kategori</h2>{" "}
      <span className="text-red-500">*</span>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Nama Kategori"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Tambah
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
        {success && <p className="mt-2 text-green-500">{success}</p>}
      </form>
    </div>
  );
};

export default Tambah;
