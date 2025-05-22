import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/services');
        setServices(res.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleToggle = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Nos Services de Dermatologie</h2>
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
                  to={`/services/${service.id}`} 
                  className="text-blue-600 font-medium hover:underline"
                  onClick={(e) => e.stopPropagation()}  
                >
                  En savoir plus →
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