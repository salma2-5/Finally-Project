import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  FaSearch, 
  FaUserMd, 
  FaCalendarAlt, 
  FaStar, 
  FaClinicMedical,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Get logged-in user info
  const loggedInDoctorId = localStorage.getItem('doctorId');
  const isPatient = localStorage.getItem('role') === 'patient';

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3000/api/doctors', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setDoctors(response.data);
        setFilteredDoctors(response.data);
      } catch (err) {
        const errorMsg = err.response?.data?.message || 'Failed to fetch doctors';
        setError(errorMsg);
        toast.error(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const results = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.clinicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.city?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(results);
  }, [searchTerm, doctors]);

  const handleBookAppointment = () => {
    if (!localStorage.getItem('token')) {
      toast.info('Please login to book an appointment');
      navigate('/login');
      return;
    }
    navigate(`/appointments`);
  };

  const handleViewReviews = () => {
    navigate(`reviews/:id`);
  };

  const handleDoctorDashboard = () => {
    navigate('/doctor/dashboard');
  };

  const handleViewProfile = () => {
    navigate(`/doctors`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-lg">Loading doctors...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="text-red-500 text-xl mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
            <FaUserMd className="inline mr-2" />
            Moroccan Dermatology Specialists
          </h1>
          <p className="mt-2 text-gray-600">
            Find and book appointments with certified dermatologists
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, specialization, clinic or city..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor._id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div 
                    className="flex items-center mb-4 cursor-pointer"
                    onClick={() => handleViewProfile(doctor._id)}
                  >
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden mr-4 border-2 border-blue-200">
                      {doctor.photo ? (
                        <img 
                          src={doctor.photo} 
                          alt={doctor.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.parentElement.innerHTML = '<FaUserMd className="text-blue-500 text-3xl" />';
                          }}
                        />
                      ) : (
                        <FaUserMd className="text-blue-500 text-3xl" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                        Dr. {doctor.name}
                      </h3>
                      <p className="text-blue-600">{doctor.specialization}</p>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span>{doctor.averageRating || 'New'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <p className="flex items-center text-gray-600">
                      <FaClinicMedical className="mr-2 text-blue-500" />
                      {doctor.clinicName}
                    </p>
                    {doctor.city && (
                      <p className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2 text-red-500" />
                        {doctor.city}
                      </p>
                    )}
                    {doctor.phone && (
                      <p className="flex items-center text-gray-600">
                        <FaPhone className="mr-2 text-green-500" />
                        {doctor.phone}
                      </p>
                    )}
                    <p className="text-gray-600">
                      {doctor.experience} years of experience
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <button
  onClick={() => navigate(`/doctordetails/${doctor._id}`)}
  className= "flex-1 pointer bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
>
  View Details & Book
</button>

                    {isPatient && (
                      <>
                        <button
                          onClick={() => handleBookAppointment(doctor._id)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <FaCalendarAlt className="mr-2" />
                          Book
                        </button>
                        <button
                          onClick={() => handleViewReviews(doctor._id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <FaStar className="mr-2" />
                          Reviews
                        </button>
                      </>
                    )}
                    {loggedInDoctorId === doctor._id && (
                      <button
                        onClick={handleDoctorDashboard}
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
                      >
                        Dashboard
                      </button>
                    )}
                    {!isPatient && !loggedInDoctorId && (
                      <button
                        onClick={() => navigate('/login')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                      >
                        Login to Book Appointment
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-gray-500 text-xl mb-4">No doctors found matching your search</div>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;