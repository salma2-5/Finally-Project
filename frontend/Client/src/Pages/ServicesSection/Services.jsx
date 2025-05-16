import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Acne Treatment",
    description: "Personalized plans tailored to your skin type and condition. Say goodbye to stubborn acne.",
    imageUrl: "https://images.pexels.com/photos/6475987/pexels-photo-6475987.jpeg",
    moreInfo: "Detailed acne treatment plans, lifestyle advice, and advanced techniques used by dermatologists.",
    link: "/acne-treatment"
  },
  {
    id: 2,
    title: "Rosacea Management",
    description: "Comprehensive care for rosacea to reduce redness, inflammation, and flare-ups effectively.",
    imageUrl: "https://i.pinimg.com/736x/4c/7c/27/4c7c273c75675abb884ab50bc28ea0d4.jpg",
    moreInfo: "We offer personalized treatment plans, medication, and lifestyle guidance to manage and control rosacea symptoms.",
    link: "/rosacea-treatment"
  },
  {
    id: 3,
    title: "Hair Problems Treatment",
    description: "Expert solutions for hair loss, dandruff, and scalp issues using modern dermatological care.",
    imageUrl: "https://i.pinimg.com/736x/a9/d2/bc/a9d2bc228f0d0194ebce7e301c475a8f.jpg",
    moreInfo: "We provide diagnosis and treatments for hair thinning, alopecia, dandruff, and other scalp conditions using medications, PRP therapy, and nutritional plans.",
    link: "/hair-problems-treatment"
  },
  // Add more services if needed
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleToggle = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Our Dermatology Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleToggle(service.id)}
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 mb-4 group-hover:opacity-80 transition-opacity duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>

            {selectedService === service.id && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300 w-full text-center">
                <p className="text-gray-700 mb-3">{service.moreInfo}</p>
                <Link
                  to={`/details-service/${service.id}`} // Update the link to include the service id
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
