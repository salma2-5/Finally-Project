import React from 'react';
import { Link } from 'react-router-dom';

const HairProblems = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Hair Problems Treatment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.pexels.com/photos/973402/pexels-photo-973402.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Hair Problems Treatment"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Say Goodbye to Hair Loss & Dandruff</h2>
          <p className="text-gray-600 mb-4">
            Hair issues such as thinning, hair fall, dandruff, and scalp infections can be distressing. We offer
            personalized treatment solutions for all hair-related concerns, using both medical and holistic approaches.
          </p>
          <p className="text-gray-600 mb-4">
            Our experts perform a detailed scalp analysis to understand the root cause of your condition and design a
            customized plan. From prescription treatments to laser therapy and nutritional guidance, we are here to
            restore your confidence and hair health.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Why Choose Our Hair Treatment?</h3>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Tailored treatments for hair fall, dandruff, and scalp issues.</li>
            <li>Advanced diagnostic tools and treatment technologies.</li>
            <li>Experienced trichologists and dermatologists.</li>
            <li>Supportive care and long-term follow-up plans.</li>
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

export default HairProblems;
