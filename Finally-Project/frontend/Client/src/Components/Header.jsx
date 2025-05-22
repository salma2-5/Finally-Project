import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Load user on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Listen for user changes
  useEffect(() => {
    const handleUserChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    window.addEventListener("userChanged", handleUserChange);
    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userChanged")); // Notify header & others
    navigate("/");
    setIsMenuOpen(false); // Close menu on logout
  };

  const getWelcomeMessage = () => {
    if (!user) return null;

    if (user.role === "doctor") {
      return `Bienvenue, Dr. ${user.name || user.email.split("@")[0]}`;
    } else if (user.role === "patient") {
      return `Bienvenue, ${user.name || user.email.split("@")[0]}`;
    }
    return `Bienvenue, ${user.email.split("@")[0]}`;
  };

  return (
    <header className="bg-white shadow">
      <nav className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            PureDerme
          </Link>

          {/* Hamburger button for mobile */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-900 font-medium">
            <li>
              <Link to="doctordetails/:id" className="hover:text-blue-600">
                Médecins
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                À Propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
          </ul>

          {user ? (
            <div className="flex items-center">
              <span className="mr-4 font-semibold text-gray-700">
                {getWelcomeMessage()}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium hover:underline"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <Link
              to="/loginpage"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Connexion
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 px-4 py-2">
            <ul className="flex flex-col space-y-4 text-gray-900 font-medium">
              <li>
                <Link 
                  to="doctordetails/:id" 
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Médecins
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-200">
              {user ? (
                <div className="flex flex-col space-y-4">
                  <span className="font-semibold text-gray-700">
                    {getWelcomeMessage()}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 font-medium hover:underline text-left"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <Link
                  to="/loginpage"
                  className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;