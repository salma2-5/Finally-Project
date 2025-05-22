import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State to hold error message
  const navigate = useNavigate();

  // Password strength check using regex
  const validatePassword = (password) => {
    // Password must have at least one uppercase letter, one lowercase letter, one number, and at least 8 characters
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate password strength
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters, including an uppercase letter, a lowercase letter, and a number.");
      return;
    } else {
      setPasswordError(""); // Clear error if password is valid
    }

    try {
      // Send login request
      const response = await fetch("http://localhost:3000/api/users/login", { // Ensure correct URL for your backend API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Check if the response is successful
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Invalid credentials");
      }

      const data = await response.json();
      const { token, user } = data;

      // Check user role
      if (user.role !== "admin") {
        alert("Access denied. Admins only.");
        return;
      }

      // Store token and user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate to the admin dashboard
      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.message);  // Show specific error message from backend or generic error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-md"
          required
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} {/* Show error message */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
