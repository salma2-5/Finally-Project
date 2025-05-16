import React, { useState } from 'react';
import { FaUser, FaStethoscope } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    userType: 'patient',
    name: '',
    password: '',
    clinicName: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Created:', formData);
    if (formData.userType === 'doctor') {
      navigate('/doctor-login');
    } else if (formData.name === 'AHMMED BENALI') {
      navigate('/myp2', { state: formData });
    } else {
      navigate('/myprofile', { state: formData });
    }
    
    
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Welcome</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">I am a:</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            <FaUser className="inline-block mr-2 text-blue-500" /> Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            <MdPassword className="inline-block mr-2 text-blue-500" /> Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>

        {formData.userType === 'doctor' && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              <FaStethoscope className="inline-block mr-2 text-blue-500" /> Clinic Name
            </label>
            <input
              type="text"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your clinic name"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
        >
          LogIn
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Already have an account?{' '}
        <Link
          to={formData.userType === 'doctor' ? "/signupdoctor" : "/signup"}
          className="text-blue-500 hover:underline"
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default CreateAccount;
