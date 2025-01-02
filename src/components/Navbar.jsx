import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-100 text-black shadow-md sticky top-0 z-50 ">
      <div className="container py-4">
        <div className="flex justify-between items-center font-primaryRegular text-xl">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-14 object-contain" />
          </Link>
          <ul className="flex items-center justify-evenly gap-4 ">
            <Link
              className="hover:text-gray-600"
              to={"/"}
              onClick={() => scrollToSection("how-it-work")}
            >
              How it Work
            </Link>
            <Link
              className="hover:text-gray-600"
              to={"/"}
              onClick={() => scrollToSection("categories")}
            >
              Categories
            </Link>
            {isLoggedIn ? (
              <>
                <Link className="hover:text-gray-600" to={"/dashboard"}>
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-all"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
