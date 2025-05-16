import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Reviews = () => {
  const { id } = useParams()
  const [reviews, setReviews] = useState({
    1: [
        { name: 'Sarah', comment: 'Helped me a lot with my hair loss problem. Very knowledgeable and friendly.' },
        { name: 'Ziyad', comment: 'I struggled with dandruff for years. Dr. helped me get rid of it.' }
    ],
    2: [
      { name: 'Nadia', comment: 'Caring and thorough dermatologist.' }
    ],
    3: [
        {name: 'Salma' , comment:'good doctor'}
    ],
    4: [],
    5: []
  })

  const [showForm, setShowForm] = useState(false)
  const [newName, setNewName] = useState('')
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedReviews = {
      ...reviews,
      [id]: [...(reviews[id] || []), { name: newName, comment: newComment }]
    }

    setReviews(updatedReviews)
    setNewName('')
    setNewComment('')
    setShowForm(false)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reviews for Doctor {id}</h2>

      {(reviews[id] || []).map((review, index) => (
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
          Write a Review
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 bg-gray-50 p-4 rounded border">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Your name"
            className="w-full mb-3 p-2 border rounded"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Your review"
            className="w-full mb-3 p-2 border rounded"
            rows="4"
          ></textarea>
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Reviews
