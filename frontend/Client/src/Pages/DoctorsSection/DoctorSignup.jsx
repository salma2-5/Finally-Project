import React, { useState } from 'react';
// import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";

const DoctorSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [experience, setExperience] = useState('');
  const [certificate, setCertificate] = useState(null);

  const handleCertificateChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!certificate) {
      alert("Please upload your medical certificate.");
      return;
    }

    console.log("Doctor Signup:", {
      email,
      password,
      specialization,
      clinicName,
      experience,
      certificate,
    });

    alert("Doctor Signed up successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
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
          <label htmlFor="specialization" className="block text-gray-700 font-medium mb-2">Specialization:</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Dermatology, Cardiology, etc."
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="clinicName" className="block text-gray-700 font-medium mb-2">
            <FaStethoscope className="inline-block mr-2 text-blue-500" /> Clinic Name:
          </label>
          <input
            type="text"
            id="clinicName"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your clinic name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Years of Experience:</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="e.g. 5"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="certificate" className="block text-gray-700 font-medium mb-2">Medical Certificate (PDF/Image):</label>
          <input
            type="file"
            id="certificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleCertificateChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
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

export default DoctorSignup;
