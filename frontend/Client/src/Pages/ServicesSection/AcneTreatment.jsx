import React from 'react';
import { Link } from 'react-router-dom';

const AcneTreatment = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Acne Treatment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://i.pinimg.com/736x/d6/45/ac/d645ac940e08565ce9e76917c1868b7e.jpg"
            alt="Acne Treatment"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Effective Acne Solutions</h2>
          <p className="text-gray-600 mb-4">
            Acne can affect people of all ages and is a common skin condition. Our personalized acne treatment
            plans are tailored to your unique skin type and condition. Whether you're dealing with hormonal acne,
            cystic acne, or blackheads, we have solutions that can help.
          </p>
          <p className="text-gray-600 mb-4">
            Our dermatologists utilize a combination of topical treatments, oral medications, and advanced skin
            care to help you achieve clear, healthy skin. We work closely with each patient to develop a plan
            that addresses their specific needs and lifestyle.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Why Choose Our Acne Treatment?</h3>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Customized treatment plans for different types of acne.</li>
            <li>Experienced dermatologists with advanced acne treatments.</li>
            <li>Use of the latest skincare technologies and methods.</li>
            <li>Comprehensive aftercare and follow-up services.</li>
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

export default AcneTreatment;
