import React, { useState } from 'react';
import contactImg from '../../../public/contact_image.png'; // adjust path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    location: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: '', email: '', address: '', location: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      alert(result.message || 'Erreur lors de l\'envoi');
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Une erreur est survenue lors de l\'envoi du message.');
  }
};


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-md rounded-lg flex flex-col lg:flex-row gap-8">
        {/* Image and paragraph */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <img src={contactImg} alt="Contact" className="rounded-md shadow-md mb-4" />
          <p className="text-gray-600 text-center px-4">
            Pour toute question ou demande spécifique, n'hésitez pas à nous contacter via ce formulaire. Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        {/* Form - untouched */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contactez-nous</h2>

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded border border-green-300 text-center">
              Message envoyé avec succès !
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="vous@exemple.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rue, Ville"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Localisation</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="ex. Casablanca, Maroc"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
