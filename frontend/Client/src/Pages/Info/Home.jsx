import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const services = [
  {
    id: 1,
    title: "Acne Treatment",
    imageUrl: "https://images.pexels.com/photos/6475987/pexels-photo-6475987.jpeg",
    link: "/acne-treatment",
  },
  {
    id: 2,
    title: "Rosacea Management",
    imageUrl: "https://i.pinimg.com/736x/4c/7c/27/4c7c273c75675abb884ab50bc28ea0d4.jpg",
    link: "/rosacea-treatment",
  },
  {
    id: 3,
    title: "Hair Problems",
    imageUrl: "https://i.pinimg.com/736x/a9/d2/bc/a9d2bc228f0d0194ebce7e301c475a8f.jpg",
    link: "/hair-problems-treatment",
  },
  {
    id: 4,
    title: "Anti-Aging",
    imageUrl: "https://i.pinimg.com/736x/0b/fa/b7/0bfab7e18513d7b5997b6415fa78c84b.jpg",
    link: "/anti-aging-treatments",
  },
];

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setDoctors(res.data.slice(0, 4)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-20 animate-float"
          />
        ))}
      </div>

      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-32 px-4 overflow-hidden">        
        <div className="relative z-10 max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Skin <span className="text-yellow-300">Magically</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Morocco's premier dermatology clinic combining science with a touch of magic for radiant skin
          </p>
          <Link 
            to="/doctors" 
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-100 hover:scale-105"
          >
            Discover Our Doctors
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 text-center relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-fadeInUp">
            Find Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeInUp">
            Our magical solutions for all your skin concerns
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group animate-fadeInUp`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-inner">
                    {service.image}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <Link 
                  to={`DetailsService/${service.id}`}
                    className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center mt-4 transition-colors"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-fadeInUp">
            Our Dermatology
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeInUp">
            Meet our magical dermatology specialists
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 animate-fadeInUp hover:scale-103`}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">Dermatology Specialist</p>
                  <button
                    onClick={() => navigate(`/appointments/${doctor.id}`)}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:shadow-md transition-all hover:scale-105"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 inline-block">
            <Link 
              to="/doctors" 
              className="text-blue-600 hover:text-blue-800 font-medium text-lg inline-flex items-center px-6 py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all hover:translate-x-1"
            >
              Meet All Our Doctors <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

<section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Have Questions About Your Skin Health?
    </h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Our dermatology experts are here to answer all your skin care questions
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link 
        to="/contact" 
        className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all hover:scale-105"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;