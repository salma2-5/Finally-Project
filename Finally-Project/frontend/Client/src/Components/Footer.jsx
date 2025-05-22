import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: "Nos Services", path: "/services" },
    { name: "À Propos", path: "/about" },
    { name: "Connexion", path: "/loginpage" },
    { name: "Nos Médecins", path: "/doctors" }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedin />, url: "#" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "123 Rue de la Peau, Ville de la Peau" },
    { icon: <FaPhone />, text: "+212 675431120" },
    { icon: <FaEnvelope />, text: "contact@cliniquederm.com" }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-800 to-indigo-900 text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-bold mb-4 text-white">Clinique de Dermatologie</h3>
          <p className="text-blue-100 mb-4">
            Soins professionnels de la peau avec une touche de magie pour votre transformation radieuse.
          </p>
        </div>

        {/* Section 2: Liens rapides */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Liens Rapides</h4>
          <ul className="space-y-3">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.path} 
                  className="text-blue-200 hover:text-white transition-colors duration-300 flex items-start"
                >
                  <span className="hover:underline">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contactez-Nous</h4>
          <div className="space-y-3 text-blue-100">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="mt-1 mr-2 flex-shrink-0">{item.icon}</span>
                <p className="break-words">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Réseaux sociaux */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Suivez-Nous</h4>
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                className="text-blue-200 hover:text-white text-xl transition-colors duration-300 hover:scale-110"
                aria-label={`Lien vers ${item.icon.type.name}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-blue-700 text-center text-blue-300">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Clinique de Dermatologie. Tous droits réservés.
          <span className="block sm:inline mt-1 sm:mt-0 sm:ml-2">| Développé avec passion</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;