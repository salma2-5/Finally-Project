import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/services/${id}`);
        setService(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service:', error);
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!service) return <div className="text-center py-12">Service not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{service.description}</p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Détails du service</h2>
            <p className="text-gray-700 mb-4">{service.moreInfo}</p>
          </div>
          <Link 
            to="/services" 
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Retour aux services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;