import React from 'react';
import { useParams } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Acne Treatment",
    description: "Personalized plans tailored to your skin type and condition. Say goodbye to stubborn acne.",
    imageUrl: "https://images.pexels.com/photos/6475987/pexels-photo-6475987.jpeg",
    moreInfo: "Detailed acne treatment plans, lifestyle advice, and advanced techniques used by dermatologists."
  },
  {
    id: 2,
    title: "Rosacea Management",
    description: "Comprehensive care for rosacea to reduce redness, inflammation, and flare-ups effectively.",
    imageUrl: "https://i.pinimg.com/736x/4c/7c/27/4c7c273c75675abb884ab50bc28ea0d4.jpg",
    moreInfo: "We offer personalized treatment plans, medication, and lifestyle guidance to manage and control rosacea symptoms."
  },
  {
    id: 3,
    title: "Hair Problems Treatment",
    description: "Expert solutions for hair loss, dandruff, and scalp issues using modern dermatological care.",
    imageUrl: "https://i.pinimg.com/736x/a9/d2/bc/a9d2bc228f0d0194ebce7e301c475a8f.jpg",
    moreInfo: "We provide diagnosis and treatments for hair thinning, alopecia, dandruff, and other scalp conditions using medications, PRP therapy, and nutritional plans."
  },
  // Add more services if needed
];

const DetailsService = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const service = services.find((service) => service.id === parseInt(id)); // Find the service based on the id

  if (!service) {
    return <div>Service not found</div>; // Handle the case where the service doesn't exist
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">{service.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={service.imageUrl}
            alt={service.title}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Say Goodbye to Hair Loss & Dandruff</h2>
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>
          <p className="text-gray-600 mb-4">
            {service.moreInfo}
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
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default DetailsService;
