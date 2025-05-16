import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Appointments = () => {
  const { id } = useParams() // Get doctor ID from the URL parameters
  const [doctor, setDoctor] = useState(null)
  const [bookedAppointments, setBookedAppointments] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [confirmationMessage, setConfirmationMessage] = useState('')

  // Fetch doctor details from your backend
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        // Replace with actual API URL for doctor details
        const res = await axios.get(`http://localhost:3000/api/doctor/${id}`)
        setDoctor(res.data)
      } catch (error) {
        console.error('Failed to fetch doctor:', error)
      }
    }

    const fetchAppointments = async () => {
      try {
        // Replace with actual API URL for booked appointments
        const res = await axios.get(`http://localhost:3000/api/appointments/doctor/${id}`)
        setBookedAppointments(res.data)
      } catch (error) {
        console.error('Failed to fetch appointments:', error)
      }
    }

    fetchDoctor()
    fetchAppointments()
  }, [id])

  // Function to generate the next 7 days for selecting dates
  const getNext7Days = () => {
    const days = []
    const today = new Date()
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push(date)
    }
    return days
  }

  // Function to generate time slots between 9 AM and 5 PM
  const generateTimeSlots = () => {
    const times = []
    for (let hour = 9; hour <= 17; hour++) {
      times.push(`${hour.toString().padStart(2, '0')}:00`)
    }
    return times
  }

  // Check if a slot is already booked
  const isSlotBooked = (date, time) => {
    const dateStr = date.toISOString().split('T')[0]
    return bookedAppointments.some(app => app.date === dateStr && app.time === time)
  }

  // Handle the selection of date and time
  const handleAppointmentSelection = (date, time) => {
    if (isSlotBooked(date, time)) return
    setSelectedDate(date)
    setSelectedTime(time)
  }

  // Handle the booking of the appointment
  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return

    try {
      const formattedDate = selectedDate.toISOString().split('T')[0]
      const res = await axios.post('http://localhost:3000/api/appointments', {
        doctorId: id,
        patientName: 'Patient Name', // Replace with actual user info if available
        date: formattedDate,
        time: selectedTime
      })

      setConfirmationMessage('Appointment booked successfully!')
      setBookedAppointments(prev => [...prev, res.data.appointment])
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to book appointment'
      setConfirmationMessage(`Error: ${message}`)
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      {doctor && (
        <>
          <div className="flex items-start gap-6 mb-8">
            <img
              src={doctor.photo || '/default-doctor-photo.jpg'} // Use default image if none available
              alt="Doctor"
              className="w-32 h-32 rounded-full object-cover border-2 border-blue-300"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Dr. {doctor.name}
              </h1>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Experience:</span> {doctor.experience || 'N/A'} years
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Fee:</span> ${doctor.fee || 'N/A'}
              </p>
              <p className="text-gray-700 mt-2 max-w-xl">{doctor.description || 'Doctor information is unavailable.'}</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-gray-700">Available Booking Slots</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {getNext7Days().map((day, idx) => {
              const isSelected = selectedDate?.toDateString() === day.toDateString()
              const dayString = day.toDateString().slice(0, 3)
              const dateString = day.getDate()

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedDate(day)}
                  className={`p-3 rounded-full border text-center w-24 transition
                    ${isSelected ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-blue-100'}`}
                >
                  <div className="font-medium">{dayString}</div>
                  <div className="text-sm">{dateString}</div>
                </button>
              )
            })}
          </div>

          {selectedDate && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {generateTimeSlots().map((time, idx) => {
                const isBooked = isSlotBooked(selectedDate, time)
                const isSelected = selectedTime === time
                return (
                  <button
                    key={idx}
                    onClick={() => handleAppointmentSelection(selectedDate, time)}
                    disabled={isBooked}
                    className={`p-2 rounded-full border text-center transition
                      ${isBooked
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : isSelected
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-gray-800 hover:bg-green-100'}`}
                  >
                    {time}
                  </button>
                )
              })}
            </div>
          )}

          {selectedDate && selectedTime && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
              <h3 className="text-blue-800 font-semibold mb-1">Appointment Summary</h3>
              <p className="text-gray-700 mb-3">
                {selectedDate.toDateString().slice(0, 3)} {selectedDate.getDate()} at <strong>{selectedTime}</strong>
              </p>
              <button
                onClick={handleBooking}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm Appointment
              </button>
            </div>
          )}

          {confirmationMessage && (
            <div className="mt-6 p-4 bg-gray-100 border rounded text-center text-green-700 font-semibold">
              {confirmationMessage}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Appointments
