import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleCategoryClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://apiberita.pandekakode.com/api/artikels"
        );

        // Extract categories and remove duplicates
        const uniqueCategories = [
          ...new Set(response.data.data.map((article) => article.categories)),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <FaSearch className="icon" />
        </div>
        <div className="navbar-center">
          <Link to="/" className="logo-link">
            <img src="../../../assets/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/login">
            {" "}
            <FaUserCircle className="icon" />
          </Link>

          <FaBars className="icon hamburger" onClick={toggleMenu} />
        </div>
      </nav>
      <hr className="separator " />
      <div className="categories">
        <Link
          to="/"
          className={`category-link ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <div className="category">Home</div>
        </Link>
        {categories.map((category, index) => (
          <Link
            to={`/category/${category}`}
            key={index}
            className={`category-link ${
              location.pathname === `/category/${category}` ? "active" : ""
            }`}
          >
            <div className="category">{category}</div>
          </Link>
        ))}
        {/* Tambahkan link ke AboutUsPage */}
        <Link to="/about-us" className="category-link">
          <div className="category">Tentang Kami</div>
        </Link>
      </div>
      <div
        className={`dropdown-menu ${showMenu ? "show" : ""}`}
        ref={dropdownRef}
      >
        <ul>
          <li>
            <Link
              to="/"
              className={`dropdown-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={handleCategoryClick}
            >
              Home
            </Link>
          </li>
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/category/${category}`}
                className={`dropdown-link ${
                  location.pathname === `/category/${category}` ? "active" : ""
                }`}
                onClick={handleCategoryClick}
              >
                {category}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/about-us"
              className={`dropdown-link ${
                location.pathname === "/about-us" ? "active" : ""
              }`}
              onClick={handleCategoryClick}
            >
              Tentang Kami
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
