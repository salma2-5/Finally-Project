import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Doctors = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [allDoctors, setAllDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const doctorsWithSpecialData = res.data.map(doctor => ({
          ...doctor,
          specialization: "Dermatology",
          clinic: "Skin Care Clinic",
          experience: `${Math.floor(Math.random() * 15) + 5} years`,
          photo: ""
        }));
        setAllDoctors(doctorsWithSpecialData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = allDoctors.filter((doc) =>
    doc.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
    (citySearch === '' || doc.address?.city.toLowerCase().includes(citySearch.toLowerCase()))
  );

  const handleBook = (id) => {
    navigate(`/appointments/${id}`);
  };

  const handleReview = (id) => {
    navigate(`/reviews/${id}`);
  };

  // const handleDashboard = (doctorId) => {
  //   navigate(`/doctor/${doctorId}`);
  // };

  return (
    <div className="flex min-h-screen">

      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">Our Dermatologists in Morocco</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            placeholder="Search by name..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          />
          <input
            type="text"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
            placeholder="Search by city..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto rounded-full mb-4 bg-gray-200 flex items-center justify-center overflow-hidden">
                  {doctor.photo ? (
                    <img src={doctor.photo} alt={`Dr. ${doctor.name}`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400 text-xl">DR</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Dr. {doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialization}</p>
                {/* <p className="text-sm text-gray-500 mt-1">{doctor.clinic}</p>
                <p className="text-sm text-gray-500">{doctor.address?.city}</p>
                <p className="text-xs text-gray-400 mt-2">{doctor.experience} experience</p> */}

                <div className="mt-4 flex justify-center space-x-2">
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => handleBook(doctor.id)}
                  >
                    Book Appointment
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={() => handleReview(doctor.id)}
                  >
                    Reviews
                  </button>
                <button
  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
  onClick={() => navigate(`/doctor-login?doctorId=${doctor.id}`)}
>
  Dashboard
</button>

                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No dermatologists found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;