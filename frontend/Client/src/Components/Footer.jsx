import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-800 to-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Dermatology Clinic</h3>
          <p className="text-blue-100 mb-4">
            Professional skin care with a touch of magic for your radiant transformation.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { name: "Our Services", path: "/services" },
              { name: "About Us", path: "about" },
              { name: "Creat Your Account", path: "createaccount" },
              { name: "Our Doctors", path: "/doctors" }
            ].map((item, index) => (
              <li key={index}>
                <a 
                  href={item.path} 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
          <div className="space-y-3 text-blue-100">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
              <p>Skin City</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <p>+212 675431120</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <p>contact@dermclinic.com</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-blue-700 text-center text-blue-300">
        <p>
          © {new Date().getFullYear()} Dermatology Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;