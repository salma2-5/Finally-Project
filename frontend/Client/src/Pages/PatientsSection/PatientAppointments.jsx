import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PatientAppointments = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchedDoctors = [
      {
        id: 1,
        name: 'Dr. Amina El Idrissi',
        speciality: 'Dermatologist',
        image: 'https://via.placeholder.com/150',
        address: {
          line1: '123 Main St',
          line2: 'Agadir, Morocco'
        }
      },
      {
        id: 2,
        name: 'Dr. Karim Lahcen',
        speciality: 'Skin Specialist',
        image: 'https://via.placeholder.com/150',
        address: {
          line1: '456 Secondary St',
          line2: 'Casablanca, Morocco'
        }
      }
    ];

    setDoctors(fetchedDoctors);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      <div className="space-y-4">
        {doctors.map((item, index) => (
          <div key={index} className="flex border p-4 rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full object-cover mr-4" />
            <div className="flex-1">
              <p className="font-semibold text-lg">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="mt-2 text-sm text-gray-600">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className="mt-2 font-medium">
                <span className="font-semibold">Date & Time:</span> 25 July 2024 | 9:00 PM
              </p>
            </div>
            <div className="flex items-center ml-4">
              <Link
                to="/canceled-appointments"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientAppointments;
