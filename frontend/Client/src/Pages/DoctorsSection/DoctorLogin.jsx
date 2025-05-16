import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
  const [doctorCode, setDoctorCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const doctorCodes = {
    'DOC123': 1,
    'DOC456': 2,
    'DOC789': 3
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const matchedId = doctorCodes[doctorCode];

    if (matchedId) {
      // localStorage.setItem('isDoctorAuthenticated', 'true');
      // localStorage.setItem('doctorId', matchedId);
      navigate(`/doctor/${matchedId}`);
    } else {
      setError('Invalid doctor code.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Doctor Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="doctorCode">
              Doctor Access Code
            </label>
            <input
              type="password"
              id="doctorCode"
              value={doctorCode}
              onChange={(e) => setDoctorCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your access code"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;