import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const PatientSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    age: '',
    condition: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const dermatologyConditions = [
    'Acné', 'Eczéma', 'Psoriasis', 'Rosacée', 'Allergies cutanées',
    'Infections fongiques', 'Perte de cheveux', 'Cancer de la peau', 'Verrues', 'Vitiligo'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Échec de l\'inscription');
      }

      alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      navigate("/loginpage");
    } catch (err) {
      setError(err.message);
      console.error('Erreur d\'inscription:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Inscription Patient</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Entrez votre email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Entrez votre mot de passe (min 6 caractères)"
            minLength="6"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Âge :
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Entrez votre âge"
            min="1"
            max="120"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="condition" className="block text-gray-700 font-medium mb-2">
            Problème dermatologique :
          </label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Sélectionnez un problème</option>
            {dermatologyConditions.map((condition, index) => (
              <option key={index} value={condition}>{condition}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          {loading ? 'Traitement en cours...' : 'Créer un compte'}
        </button>
      </form>

      <p className="text-center mt-4 text-gray-600">
        Vous avez déjà un compte ?{' '}
        <button
          onClick={() => navigate('/loginpage')}
          className="text-blue-500 hover:underline"
        >
          Connectez-vous ici
        </button>
      </p>
    </div>
  );
};

export default PatientSignup;