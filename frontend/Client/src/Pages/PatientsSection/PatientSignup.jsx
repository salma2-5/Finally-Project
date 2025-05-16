import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

const PatientSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
 const navigate = useNavigate()
  const dermatologyConditions = [
    'Acne',
    'Eczema',
    'Psoriasis',
    'Rosacea',
    'Skin Allergies',
    'Fungal Infections',
    'Hair Loss',
    'Skin Cancer',
    'Warts',
    'Vitiligo'
  ];

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Patient Signup:", { email, password, age, selectedCondition });
    alert("Patient Signed up successfully!");
    navigate("/")
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">SignUp</h2>
      <form onSubmit={handleSignup}>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="condition" className="block text-gray-700 font-medium mb-2">
            Dermatology Condition:
          </label>
          <select
            id="condition"
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a condition</option>
            {dermatologyConditions.map((condition, index) => (
              <option key={index} value={condition}>{condition}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-200">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default PatientSignup;
