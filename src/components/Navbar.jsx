import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-700 text-white sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex justify-between">
          <Link to={"/"}>Trivia</Link>
          <ul className="flex">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
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
