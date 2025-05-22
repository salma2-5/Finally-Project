import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/reviews/${id}`);
        setReviews(res.data);
      } catch {
        setError('Échec du chargement des avis.');
      }
    };
    fetchReviews();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/reviews/${id}`, {
        name: newName,
        comment: newComment,
      });
      setReviews([...reviews, { name: newName, comment: newComment }]);
      setNewName('');
      setNewComment('');
      setShowForm(false);
    } catch {
      setError('Échec de la soumission de l\'avis.');
    }
  };

  const handleCancel = () => {
    setNewName('');
    setNewComment('');
    setShowForm(false);
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Avis pour le Service {id}</h2>

      {error && <p className="text-red-600">{error}</p>}

      {reviews.length === 0 && <p className="text-gray-500">Aucun avis pour le moment. Soyez le premier à donner votre avis.</p>}

      {reviews.map((review, index) => (
        <div key={index} className="bg-white border p-4 mb-3 rounded shadow-sm">
          <p className="font-semibold text-gray-700">{review.name}</p>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      ))}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Écrire un avis
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 bg-gray-50 p-4 rounded border">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Votre nom"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Votre avis"
            className="w-full mb-3 p-2 border rounded"
            rows="4"
            required
          ></textarea>
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Soumettre
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Annuler
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Reviews;