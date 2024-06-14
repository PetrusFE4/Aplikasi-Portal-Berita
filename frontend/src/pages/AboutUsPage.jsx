import React, { useState, useEffect } from "react";
import {
  FaRegEnvelope,
  FaPhone,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const TentangKamiPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reload the page on the first load
    if (!sessionStorage.getItem("hasReloaded")) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    } else {
      // Set loading to false after a short delay to simulate loading time
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border text-primary" role="status">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-lg p-4 light theme-light mt-20 md:mt-36">
          <h1 className="text-2xl font-bold mb-8">Tentang Kami</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi dan Misi */}
            <div>
              <div className="rounded-lg bg-white p-6 shadow-lg h-full">
                {/* Visi dan Misi content */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Visi Kami</h3>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vitae tortor lacus. Integer sit amet erat sem.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Misi Kami</h3>
                  <ul className="list-disc ml-6">
                    <li className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li className="text-lg">
                      Nulla vitae tortor lacus. Integer sit amet erat sem.
                    </li>
                    <li className="text-lg">
                      Vivamus euismod mi nec lorem consequat, id dignissim metus
                      volutpat.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Kontak */}
            <div>
              <div className="rounded-lg bg-white p-6 shadow-lg h-full">
                {/* Kontak content */}
                <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
                <div className="flex items-center mb-4">
                  <FaRegEnvelope className="text-xl mr-2" />
                  <p className="text-lg">info@portalberita.com</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhone className="text-xl mr-2" />
                  <p className="text-lg">123-456-7890</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaFacebookSquare className="text-xl mr-2" />
                  <p className="text-lg">Info Portal Berita</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaInstagram className="text-xl mr-2" />
                  <p className="text-lg">@portalberita</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaTwitterSquare className="text-xl mr-2" />
                  <p className="text-lg">@portalberita.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Alamat */}
          <div className="mt-12">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              {/* Alamat content */}
              <h2 className="text-2xl font-semibold mb-4">Alamat Kami</h2>
              <p className="text-lg">
                Jalan Portal Berita No. 123, Kota Berita, Provinsi Informasi,
                Indonesia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TentangKamiPage;
