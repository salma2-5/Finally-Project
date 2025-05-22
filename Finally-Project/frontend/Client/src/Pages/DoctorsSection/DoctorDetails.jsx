import React, { useState } from 'react';
import { 
  FaUserMd, 
  FaStar, 
  FaClinicMedical,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaCalendarCheck,
  FaSearch,
  FaCheckCircle
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Mock data for all doctors
const doctorsData = [
  {
    id: 1,
    name: 'Dr.Karim Benjelloun',
    specialization: 'Dermatologie',
    clinic: 'Clinique Dermatologique Casablanca',
    experience: 12,
    photo: '',
    bio: 'Dr. Karim Benjelloun est un dermatologue expérimenté spécialisé dans les maladies de la peau.',
    averageRating: 4.8,
    city: 'Casablanca',
    services: [
      { name: 'Consultation', price: 300 },
      { name: 'Biopsie cutanée', price: 500 },
      { name: 'Traitement acné', price: 400 }
    ],
    workingHours: {
      Monday: '9:00 AM - 5:00 PM',
      Tuesday: '9:00 AM - 5:00 PM',
      Wednesday: '10:00 AM - 3:00 PM',
      Thursday: '9:00 AM - 5:00 PM',
      Friday: '9:00 AM - 2:00 PM',
      Saturday: 'Closed',
      Sunday: 'Closed'
    }
  },
  {
    id: 2,
    name: 'Dr.Sofia El Idrissi',
    specialization: 'Dermatologie Pédiatrique',
    clinic: 'Clinique Dermatologique Marrakech',
    experience: 7,
    photo: '',
    bio: 'Dr. Sofia El Idrissi se spécialise dans les problèmes dermatologiques chez les enfants.',
    averageRating: 4.9,
    city: 'Marrakech',
    services: [
      { name: 'Consultation pédiatrique', price: 350 },
      { name: 'Traitement eczéma', price: 450 }
    ],
    workingHours: {
      Monday: '8:00 AM - 4:00 PM',
      Tuesday: '8:00 AM - 4:00 PM',
      Wednesday: '8:00 AM - 12:00 PM',
      Thursday: '8:00 AM - 4:00 PM',
      Friday: '8:00 AM - 12:00 PM',
      Saturday: 'Closed',
      Sunday: 'Closed'
    }
  },
  {
    id: 3,
    name: 'Dr.Rachid Benkirane',
    specialization: 'Dermatologie Chirurgicale',
    clinic: 'Clinique du Visage Rabat',
    experience: 13,
    photo: '',
    bio: 'Dr. Rachid Benkirane est spécialisé en chirurgie dermatologique et reconstruction cutanée.',
    averageRating: 4.7,
    city: 'Rabat',
    services: [
      { name: 'Consultation chirurgicale', price: 400 },
      { name: 'Excision de lésion', price: 800 }
    ],
    workingHours: {
      Monday: '10:00 AM - 6:00 PM',
      Tuesday: '10:00 AM - 6:00 PM',
      Wednesday: 'Closed',
      Thursday: '10:00 AM - 6:00 PM',
      Friday: '10:00 AM - 2:00 PM',
      Saturday: '9:00 AM - 1:00 PM',
      Sunday: 'Closed'
    }
  },
  {
    id: 4,
    name: 'Dr.Mohammed Fassi',
    specialization: 'Dermatologie Infectieuse',
    clinic: 'Centre Dermatologique Essaouira',
    experience: 15,
    photo: '',
    bio: 'Dr. Mohammed Fassi est expert en dermatologie infectieuse et maladies tropicales de la peau.',
    averageRating: 4.6,
    city: 'Essaouira',
    services: [
      { name: 'Consultation spécialisée', price: 350 },
      { name: 'Traitement infections cutanées', price: 550 }
    ],
    workingHours: {
      Monday: '8:30 AM - 5:30 PM',
      Tuesday: '8:30 AM - 5:30 PM',
      Wednesday: '8:30 AM - 12:30 PM',
      Thursday: '8:30 AM - 5:30 PM',
      Friday: '8:30 AM - 12:30 PM',
      Saturday: 'Closed',
      Sunday: 'Closed'
    }
  },
  {
    id: 5,
    name: 'Dr.Salma Idrissi',
    specialization: 'Dermatologie Cosmétique',
    clinic: 'Polyclinique Mohammedia',
    experience: 8,
    photo: '',
    bio: 'Dr. Salma Idrissi se concentre sur les traitements cosmétiques et le rajeunissement de la peau.',
    averageRating: 4.9,
    city: 'Mohammedia',
    services: [
      { name: 'Consultation cosmétique', price: 400 },
      { name: 'Botox', price: 1200 },
      { name: 'Remplissage cutané', price: 1500 }
    ],
    workingHours: {
      Monday: '9:00 AM - 7:00 PM',
      Tuesday: '9:00 AM - 7:00 PM',
      Wednesday: '9:00 AM - 2:00 PM',
      Thursday: '9:00 AM - 7:00 PM',
      Friday: '9:00 AM - 2:00 PM',
      Saturday: '10:00 AM - 4:00 PM',
      Sunday: 'Closed'
    }
  },
  {
    id: 6,
    name: 'Dr.Othmane Khalfi',
    specialization: 'Dermatologie Générale',
    clinic: 'Clinique Spécialisée Agadir',
    experience: 12,
    photo: '',
    bio: 'Dr. Othmane Khalfi propose des soins complets pour toutes les affections dermatologiques.',
    averageRating: 4.5,
    city: 'Agadir',
    services: [
      { name: 'Consultation générale', price: 300 },
      { name: 'Cryothérapie', price: 450 }
    ],
    workingHours: {
      Monday: '8:00 AM - 6:00 PM',
      Tuesday: '8:00 AM - 6:00 PM',
      Wednesday: '8:00 AM - 1:00 PM',
      Thursday: '8:00 AM - 6:00 PM',
      Friday: '8:00 AM - 1:00 PM',
      Saturday: 'Closed',
      Sunday: 'Closed'
    }
  },
  {
    id: 7,
    name: 'Dr.Leila Bensalem',
    specialization: 'Dermatologie Allergologique',
    clinic: 'Centre Médical Tanger',
    experience: 10,
    photo: '',
    bio: 'Dr. Leila Bensalem est spécialiste des allergies cutanées et des tests d\'allergie.',
    averageRating: 4.7,
    city: 'Tanger',
    services: [
      { name: 'Consultation allergologie', price: 350 },
      { name: 'Tests allergologiques', price: 600 }
    ],
    workingHours: {
      Monday: '9:00 AM - 5:00 PM',
      Tuesday: '9:00 AM - 5:00 PM',
      Wednesday: '9:00 AM - 12:00 PM',
      Thursday: '9:00 AM - 5:00 PM',
      Friday: '9:00 AM - 12:00 PM',
      Saturday: 'Closed',
      Sunday: 'Closed'
    }
  },
  {
    id: 8,
    name: 'Dr.Adil Moukhtar',
    specialization: 'Dermatologie Oncologique',
    clinic: 'Institut Dermatologique Fès',
    experience: 14,
    photo: '',
    bio: 'Dr. Adil Moukhtar est expert dans le diagnostic et le traitement des cancers de la peau.',
    averageRating: 4.8,
    city: 'Fès',
    services: [
      { name: 'Consultation oncologique', price: 450 },
      { name: 'Dermatoscopie', price: 500 }
    ],
    workingHours: {
      Monday: '8:00 AM - 4:00 PM',
      Tuesday: '8:00 AM - 4:00 PM',
      Wednesday: '8:00 AM - 12:00 PM',
      Thursday: '8:00 AM - 4:00 PM',
      Friday: '8:00 AM - 12:00 PM',
      Saturday: 'Closed',
      Sunday: 'Closed'
    }
  },
  {
    id: 9,
    name: 'Dr.Najat Bouziane',
    specialization: 'Dermatologie Esthétique',
    clinic: 'Clinique de la Peau Rabat',
    experience: 9,
    photo: '',
    bio: 'Dr. Najat Bouziane se spécialise en dermatologie esthétique et médecine anti-âge.',
    averageRating: 4.9,
    city: 'Rabat',
    services: [
      { name: 'Consultation esthétique', price: 400 },
      { name: 'Laser cutané', price: 1200 },
      { name: 'Peeling chimique', price: 800 }
    ],
    workingHours: {
      Monday: '10:00 AM - 7:00 PM',
      Tuesday: '10:00 AM - 7:00 PM',
      Wednesday: '10:00 AM - 2:00 PM',
      Thursday: '10:00 AM - 7:00 PM',
      Friday: '10:00 AM - 2:00 PM',
      Saturday: '10:00 AM - 4:00 PM',
      Sunday: 'Closed'
    }
  }
];

// French translations for days
const frenchDaysMap = {
  Monday: 'Lundi',
  Tuesday: 'Mardi',
  Wednesday: 'Mercredi',
  Thursday: 'Jeudi',
  Friday: 'Vendredi',
  Saturday: 'Samedi',
  Sunday: 'Dimanche'
};

// Format working hours in French
const formatWorkingHours = (workingHours) => {
  return Object.entries(workingHours).map(([day, hours]) => ({
    day: frenchDaysMap[day] || day,
    hours
  }));
};

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-gray-200 rounded-full p-3">
            <FaUserMd className="text-gray-600 text-2xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-blue-600">{doctor.specialization}</p>
            <div className="flex items-center mt-1">
              <FaStar className="text-yellow-400" />
              <span className="ml-1 text-gray-700">{doctor.averageRating}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-gray-600">{doctor.experience} ans expérience</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-gray-600">
          <FaClinicMedical className="mr-2" />
          <span>{doctor.clinic}</span>
        </div>
        
        <div className="mt-2 flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          <span>{doctor.city}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between">
            <span className="text-gray-600">Prix consultation:</span>
            <span className="font-medium text-blue-600">
              {doctor.services[0]?.price ? `${doctor.services[0].price} DH` : 'Sur demande'}
            </span>
          </div>
        </div>
        
        <button 
          className="mt-4 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <FaCalendarCheck className="inline mr-2" />
          Prendre rendez-vous
        </button>
      </div>
    </div>
  );
};

const DoctorDetail = ({ doctor, onBack }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  // const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  // Generate available times
  const availableTimes = [
    '09:00', '10:30', '11:00', '14:00', '15:30', '16:00'
  ];

  // Format working hours for display
  const formattedWorkingHours = formatWorkingHours(doctor.workingHours);

  const handleConfirmBooking = () => {
    if (!selectedTime) {
      toast.error('Veuillez sélectionner une heure');
      return;
    }

    // Here you would normally send the booking to your backend
    const appointment = {
      doctor: doctor.name,
      date: selectedDate.toLocaleDateString('fr-FR'),
      time: selectedTime,
      notes: bookingNotes
    };

    console.log('Appointment booked:', appointment);
    
    // Show success message
    toast.success(
      <div>
        <FaCheckCircle className="inline mr-2 text-green-500" />
        <span>Rendez-vous confirmé avec Dr. {doctor.name} le {selectedDate.toLocaleDateString('fr-FR')} à {selectedTime}</span>
      </div>,
      {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      }
    );

    // setIsBookingConfirmed(true);
    setShowBookingForm(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" />
            Retour à la liste
          </button>
        </div>
        
        {/* Doctor Profile */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                <div className="bg-gray-200 rounded-full p-4 w-32 h-32 flex items-center justify-center">
                  <FaUserMd className="text-gray-600 text-5xl" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
                    <p className="text-blue-600 text-lg">{doctor.specialization}</p>
                    <div className="flex items-center mt-2">
                      <FaStar className="text-yellow-400" />
                      <span className="ml-1 text-gray-700">{doctor.averageRating}</span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-gray-600">{doctor.experience} ans expérience</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <button 
                      onClick={() => setShowBookingForm(!showBookingForm)}
                      className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      <FaCalendarCheck className="mr-2" />
                      {showBookingForm ? 'Masquer le formulaire' : 'Prendre rendez-vous'}
                    </button>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaClinicMedical className="mr-2" />
                    <span>{doctor.clinic}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{doctor.city}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-t border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('about')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'about' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                À propos
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'services' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Services & Tarifs
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Avis
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Doctor Info */}
          <div className="md:w-2/3 p-6 md:p-8 bg-white rounded-lg shadow-md">
            {/* About Tab */}
            {activeTab === 'about' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">À propos</h3>
                <p className="text-gray-600 mb-6">{doctor.bio}</p>
                
                <h4 className="font-medium text-gray-800 mb-2">Expérience professionnelle</h4>
                <p className="text-gray-600 mb-6">{doctor.experience} ans d'expérience en {doctor.specialization.toLowerCase()}</p>
                
                <h4 className="font-medium text-gray-800 mb-2">Formation</h4>
                <p className="text-gray-600">Diplôme en médecine spécialisée en dermatologie</p>
              </div>
            )}

            {/* Services & Fees Tab */}
            {activeTab === 'services' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Services & Tarifs</h3>
                
                <div className="space-y-4">
                  {doctor.services.map((service, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">{service.name}</h4>
                        </div>
                        <div className="text-blue-600 font-medium">
                          {service.price ? `${service.price} DH` : 'Sur demande'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-2">Horaires de consultation</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formattedWorkingHours.map(({day, hours}) => (
                      <div key={day} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-700">{day}</div>
                        <div className="text-gray-600">
                          {hours === 'Closed' ? (
                            <span className="text-red-500">Fermé</span>
                          ) : (
                            hours
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Avis des patients</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar 
                            key={star} 
                            className={`${star <= Math.floor(doctor.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-700">{doctor.averageRating} (24 avis)</span>
                    </div>
                    <p className="text-gray-600 italic">"Excellent médecin, très professionnel et à l'écoute."</p>
                    <p className="text-gray-500 text-sm mt-2">- Patient anonyme</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar 
                            key={star} 
                            className={`${star <= Math.floor(4) ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-700">4 (18 avis)</span>
                    </div>
                    <p className="text-gray-600 italic">"Très bon diagnostic et traitement efficace."</p>
                    <p className="text-gray-500 text-sm mt-2">- Patient anonyme</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Booking Form */}
          {showBookingForm && (
            <div className="md:w-1/3 bg-white p-6 md:p-8 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Prendre rendez-vous</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date: {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </label>
                  <input
                    type="date"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Heure disponible</label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-md text-sm ${selectedTime === time ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:border-blue-500'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (optionnel)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Décrivez brièvement votre problème..."
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    onClick={handleConfirmBooking}
                    disabled={!selectedTime}
                    className={`w-full py-3 px-4 rounded-md font-medium ${!selectedTime ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    Confirmer le rendez-vous
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DoctorsList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBackToList = () => {
    setSelectedDoctor(null);
  };

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedDoctor) {
    return <DoctorDetail doctor={selectedDoctor} onBack={handleBackToList} />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
                  <FaUserMd className="inline mr-2" />
                  Spécialistes en dermatologie au Maroc
                </h1>
                <p className="mt-2 text-gray-600">
                  Trouvez et réservez des rendez-vous avec des dermatologues certifiés.
                </p>
              </div>
      
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Rechercher par nom, spécialité ou ville..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onClick={() => handleDoctorClick(doctor)} 
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-8 text-gray-500">
            Aucun médecin trouvé pour votre recherche.
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;