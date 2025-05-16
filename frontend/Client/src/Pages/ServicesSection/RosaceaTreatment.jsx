import React from 'react';
import { Link } from 'react-router-dom';

const RosaceaTreatment = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Rosacea Treatment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://i.pinimg.com/736x/27/b6/b5/27b6b5aca59218fdb93d14a6d3eda708.jpg"
            alt="Rosacea Treatment"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Effective Rosacea Solutions</h2>
          <p className="text-gray-600 mb-4">
            Rosacea is a common skin condition that causes redness and visible blood vessels in your face. 
            It can be triggered by various factors such as stress, hot drinks, spicy foods, and more. Our dermatologists
            provide personalized treatment plans to help reduce flare-ups and manage the condition effectively.
          </p>
          <p className="text-gray-600 mb-4">
            We offer a range of treatments including topical creams, oral medications, and advanced therapies to
            help you control rosacea symptoms and prevent future flare-ups. Our goal is to restore your skin's natural
            appearance and help you feel confident again.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Why Choose Our Rosacea Treatment?</h3>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Customized treatment plans to control rosacea flare-ups.</li>
            <li>Expert dermatologists with years of experience treating rosacea.</li>
            <li>Advanced therapies and medications to reduce redness and irritation.</li>
            <li>Long-term management strategies to prevent future flare-ups.</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link
          to="/doctors"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Book Your Consultation
        </Link>
      </div>
    </div>
  );
};

export default RosaceaTreatment;
