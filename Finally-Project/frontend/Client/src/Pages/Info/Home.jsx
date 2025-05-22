import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const services = [
  { id: 1, title: "Traitement de l'acné", imageUrl: "https://images.pexels.com/photos/6475987/pexels-photo-6475987.jpeg" },
  { id: 2, title: "Gestion de la rosacée", imageUrl: "https://i.pinimg.com/736x/4c/7c/27/4c7c273c75675abb884ab50bc28ea0d4.jpg" },
  { id: 3, title: "Problèmes capillaires", imageUrl: "https://i.pinimg.com/736x/a9/d2/bc/a9d2bc228f0d0194ebce7e301c475a8f.jpg" },
  { id: 4, title: "Anti-âge", imageUrl: "https://i.pinimg.com/736x/0b/fa/b7/0bfab7e18513d7b5997b6415fa78c84b.jpg" },
];

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/doctors')
      .then(res => setDoctors(res.data.slice(0, 4)))  // Load first 4 doctors for preview
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10 lg:pr-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Prenez rendez-vous <br className="hidden md:block" /> avec des médecins de confiance
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Parcourez notre liste complète de médecins qualifiés et planifiez votre rendez-vous en toute simplicité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Découvrir nos services
              </a>
              <Link
                to="doctordetails/:id"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold text-center transition-all duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/header_img.png"
              alt="Dermatologie"
              className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse delay-300"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Nos services</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Nous offrons une gamme complète de services dermatologiques pour répondre à tous vos besoins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <Link
                    to={`/services`}
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium mt-4 transition"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Notre équipe dermatologique</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Rencontrez nos spécialistes hautement qualifiés et expérimentés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map(doc => (
              <div 
                key={doc._id || doc.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-64 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-blue-600">
                    {doc.name ? doc.name.charAt(0) : '?'}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{doc.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">Dermatologue spécialisé</p>
                  <p className="text-gray-600 mb-6 text-sm">{doc.specialization || doc.clinicName || 'Spécialiste Dermatologue'}</p>
                  <button
                    onClick={() => navigate(`doctordetails/:id`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
                  >
                    Prendre rendez-vous
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/doctors"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Voir tous nos médecins
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Des questions sur votre santé cutanée ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nos experts en dermatologie sont là pour répondre à toutes vos questions concernant les soins de la peau.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Contactez-nous
            </Link>
            <Link
              to="/faq"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition duration-300"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
