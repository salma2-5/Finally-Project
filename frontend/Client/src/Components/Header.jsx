import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="bg-white shadow">
      <nav className="px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          GlowDerm Expert
        </Link>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-900 font-medium">
            <li>
              <Link to="/doctors" className="hover:text-blue-600">Doctors</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600">Services</Link>
            </li>
          </ul>

          {user ? (
            <>
              <Link
                to="/myprofile"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium hover:underline ml-2"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/createaccount"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Create Account
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
