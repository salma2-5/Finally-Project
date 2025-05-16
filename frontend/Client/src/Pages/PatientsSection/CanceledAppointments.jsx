import React, { useState, useEffect } from 'react';

const CanceledAppointments = () => {
  const [canceledAppointments, setCanceledAppointments] = useState([]);

  useEffect(() => {
    const fetchedCanceled = [
      {
        id: 1,
        name: 'Dr. Amina El Idrissi',
        speciality: 'Dermatologist',
        date: '25 July 2024',
        time: '9:00 PM',
        address: {
          line1: '123 Main St',
          line2: 'Agadir, Morocco'
        },
        image: 'https://via.placeholder.com/150'
      }
    ];

    setCanceledAppointments(fetchedCanceled);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Canceled Appointments</h2>
      {canceledAppointments.length === 0 ? (
        <p className="text-gray-600">No canceled appointments.</p>
      ) : (
        <div className="space-y-4">
          {canceledAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex border border-red-300 p-4 rounded-lg shadow-md bg-red-50"
            >
              <img
                src={appointment.image}
                alt={appointment.name}
                className="w-24 h-24 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-lg text-red-700">{appointment.name}</p>
                <p>{appointment.speciality}</p>
                <p className="mt-2 text-sm text-gray-700">
                  {appointment.address.line1}, {appointment.address.line2}
                </p>
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {appointment.date} | {appointment.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CanceledAppointments;
