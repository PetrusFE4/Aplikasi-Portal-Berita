import React, { useState } from "react";
import {
  FaQrcode,
  FaAlignCenter,
  FaRegNewspaper,
  FaAlignLeft,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const NavbarAdmin = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700"
      : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-16">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <FaAlignLeft />
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://cdn.pixabay.com/photo/2016/05/13/13/33/newspaper-1389980_960_720.png"
                  className="h-7 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Live News
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/admin/dashboard"
                className={getNavLinkClass("/admin/dashboard")}
              >
                <FaQrcode />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/kategori"
                className={getNavLinkClass("/admin/kategori")}
              >
                <FaAlignCenter />
                <span className="ms-3">Kategori</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/berita"
                className={getNavLinkClass("/admin/berita")}
              >
                <FaRegNewspaper />
                <span className="ms-3">Berita</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NavbarAdmin;
