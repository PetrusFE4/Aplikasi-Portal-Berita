import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Tambah = () => {
  const [nama, setNama] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "https://apiberita.pandekakode.com/api/kategori",
        { nama }
      );
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setNama("");
          navigate("/admin/kategori");
        });
      }
    } catch (error) {
      let errorMessage = "Error adding category";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Tambah Kategori</h2>
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
      </form>
    </div>
  );
};

export default Tambah;
