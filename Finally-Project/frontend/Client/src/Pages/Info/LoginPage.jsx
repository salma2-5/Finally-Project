import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userType: "patient",
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate authentication success
    const doctorId = "123"; // Simulated doctor ID

    const loggedInUser = {
      role: formData.userType,
      name: formData.name || null,
      email: formData.email,
      doctorId: formData.userType === "doctor" ? doctorId : null,
    };

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    // Dispatch event so Header updates immediately
    window.dispatchEvent(new Event("userChanged"));

    // Redirect user based on role
    if (formData.userType === "doctor") {
      navigate(`/doctor/${doctorId}`);
    } else {
      navigate(`/myappointments`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Je suis un(e) :
          </label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="patient">Patient(e)</option>
            <option value="doctor">Médecin</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Entrez votre email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Entrez votre nom"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
        >
          Connexion
        </button>
      </form>

      {/* Show sign-up link only for patients */}
      {formData.userType === "patient" && (
        <p className="mt-6 text-center text-gray-700">
          Pas encore de compte ?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Inscrivez-vous ici
          </Link>
        </p>
      )}
    </div>
  );
};

export default LoginPage;
