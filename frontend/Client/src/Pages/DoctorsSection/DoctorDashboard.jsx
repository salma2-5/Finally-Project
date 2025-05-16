import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DoctorDashboard = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [selectedTab, setSelectedTab] = useState('appointments');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);
  const navigate = useNavigate();

 const doctorsData = {
  1: {
    id: 1,
    name: "Dr. Leanne Graham",
    specialization: "Dermatology",
    email: "dr.leanne@example.com",
    clinic: "Skin Care Clinic",
    experience: "10 years",
    photo: "",
    appointments: [
      {
        id: 1,
        patientName: "Yasmine El Amrani",
        patientId: 101,
        patientPhoto: "",
        date: "2025-05-15",
        time: "10:00 AM",
        status: "pending",
        reason: "Hair loss consultation",
        contact: "yasmine.elamrani@example.com"
      },
      {
        id: 2,
        patientName: "Mehdi Benjelloun",
        patientId: 102,
        patientPhoto: "",
        date: "2025-05-16",
        time: "02:30 PM",
        status: "pending",
        reason: "Acne treatment follow-up",
        contact: "mehdi.benjelloun@example.com"
      },
      {
        id: 3,
        patientName: "Fatima Zahra Alaoui",
        patientId: 103,
        patientPhoto: "",
        date: "2025-05-17",
        time: "09:00 AM",
        status: "confirmed",
        reason: "Rosacea consultation",
        contact: "fatimaz.alaoui@example.com"
      },
      {
        id: 4,
        patientName: "Omar El Fassi",
        patientId: 104,
        patientPhoto: "",
        date: "2025-05-17",
        time: "11:00 AM",
        status: "cancelled",
        reason: "Skin allergy test",
        contact: "omar.elfassi@example.com",
        cancellationReason: "Patient rescheduled"
      },
      {
        id: 5,
        patientName: "Amina Belhaj",
        patientId: 105,
        patientPhoto: "",
        date: "2025-05-18",
        time: "01:00 PM",
        status: "pending",
        reason: "Eczema evaluation",
        contact: "amina.belhaj@example.com"
      },
      {
        id: 6,
        patientName: "Karim Chraibi",
        patientId: 106,
        patientPhoto: "",
        date: "2025-05-18",
        time: "03:30 PM",
        status: "confirmed",
        reason: "Laser treatment consultation",
        contact: "karim.chraibi@example.com"
      },
      {
        id: 7,
        patientName: "Noura Mansouri",
        patientId: 107,
        patientPhoto: "",
        date: "2025-05-19",
        time: "10:45 AM",
        status: "pending",
        reason: "Hyperpigmentation check-up",
        contact: "noura.mansouri@example.com"
      },
      {
        id: 8,
        patientName: "Hicham Berrada",
        patientId: 108,
        patientPhoto: "",
        date: "2025-05-20",
        time: "12:00 PM",
        status: "confirmed",
        reason: "Botox consultation",
        contact: "hicham.berrada@example.com"
      }
    ],
    messages: [
      {
        id: 1,
        patientId: 101,
        patientName: "Yasmine El Amrani",
        content: "Bonjour Docteur, je voulais confirmer mon rendez-vous pour la consultation sur la perte de cheveux",
        timestamp: "2025-05-10T09:30:00",
        sender: "patient"
      },
      {
        id: 2,
        patientId: 101,
        patientName: "Yasmine El Amrani",
        content: "Oui, votre rendez-vous est confirmé pour le 15 mai à 10h. Merci d'arriver 15 minutes à l'avance.",
        timestamp: "2025-05-10T10:15:00",
        sender: "doctor"
      },
      {
        id: 3,
        patientId: 103,
        patientName: "Fatima Zahra Alaoui",
        content: "Dois-je arrêter d'utiliser mes produits de soins actuels avant la consultation sur la rosacée?",
        timestamp: "2025-05-12T14:20:00",
        sender: "patient"
      }
    ]
  },
  2: {
    id: 2,
    name: "Dr. Michael Smith",
    specialization: "Cardiology",
    email: "dr.smith@example.com",
    clinic: "Heart Care Center",
    experience: "15 years",
    photo: "",
    appointments: [
      {
        id: 9,
        patientName: "Issam Wardi",
        patientId: 201,
        patientPhoto: "",
        date: "2025-05-17",
        time: "09:00 AM",
        status: "confirmed",
        reason: "Heart checkup",
        contact: "issam.wardi@example.com"
      },
      {
        id: 10,
        patientName: "Jana Dakki",
        patientId: 202,
        patientPhoto: "",
        date: "2025-05-18",
        time: "11:30 AM",
        status: "pending",
        reason: "Blood pressure consultation",
        contact: "jana.dakki@example.com"
      },
      {
        id: 11,
        patientName: "Khalid Amrani",
        patientId: 203,
        patientPhoto: "",
        date: "2025-05-20",
        time: "03:00 PM",
        status: "pending",
        reason: "Chest pain evaluation",
        contact: "khalid.amrani@example.com"
      },
      {
        id: 12,
        patientName: "Salma Idrissi",
        patientId: 204,
        patientPhoto: "",
        date: "2025-05-21",
        time: "09:30 AM",
        status: "cancelled",
        reason: "Annual cardiac screening",
        contact: "salma.idrissi@example.com",
        cancellationReason: "Travel plans changed"
      },
      {
        id: 13,
        patientName: "Omar Chennoufi",
        patientId: 205,
        patientPhoto: "",
        date: "2025-05-22",
        time: "02:15 PM",
        status: "confirmed",
        reason: "ECG results review",
        contact: "omar.chennoufi@example.com"
      },
      {
        id: 14,
        patientName: "Leila Benjelloun",
        patientId: 206,
        patientPhoto: "",
        date: "2025-05-23",
        time: "10:45 AM",
        status: "pending",
        reason: "Palpitations consultation",
        contact: "leila.benjelloun@example.com"
      }
    ],
    messages: [
      {
        id: 4,
        patientId: 201,
        patientName: "Issam Wardi",
        content: "Docteur, concernant mes résultats de test de la semaine dernière...",
        timestamp: "2025-05-11T14:15:00",
        sender: "patient"
      },
      {
        id: 5,
        patientId: 201,
        patientName: "Issam Wardi",
        content: "Vos résultats semblent normaux mais nous devons en discuter en personne lors de votre rendez-vous",
        timestamp: "2025-05-11T16:30:00",
        sender: "doctor"
      },
      {
        id: 6,
        patientId: 204,
        patientName: "Salma Idrissi",
        content: "Je dois annuler mon rendez-vous car je serai en voyage",
        timestamp: "2025-05-13T11:20:00",
        sender: "patient"
      },
      {
        id: 7,
        patientId: 205,
        patientName: "Omar Chennoufi",
        content: "Dois-je prendre mes médicaments avant l'examen ECG?",
        timestamp: "2025-05-15T08:45:00",
        sender: "patient"
      }
    ]
  },
  3: {
    id: 3,
    name: "Dr. Clementine Bauch",
    specialization: "Pediatrics",
    email: "dr.bauch@example.com",
    clinic: "Little Stars Clinic",
    experience: "8 years",
    photo: "",
    appointments: [
      {
        id: 15,
        patientName: "Adam Belkhayat",
        patientId: 301,
        patientPhoto: "",
        date: "2025-05-16",
        time: "09:30 AM",
        status: "confirmed",
        reason: "Vaccination",
        contact: "adam.belkhayat@example.com"
      },
      {
        id: 16,
        patientName: "Sofia El Kettani",
        patientId: 302,
        patientPhoto: "",
        date: "2025-05-17",
        time: "11:00 AM",
        status: "confirmed",
        reason: "Fever consultation",
        contact: "sofia.elkettani@example.com"
      },
      {
        id: 17,
        patientName: "Youssef Bennis",
        patientId: 303,
        patientPhoto: "",
        date: "2025-05-18",
        time: "02:00 PM",
        status: "pending",
        reason: "Growth check-up",
        contact: "youssef.bennis@example.com"
      },
      {
        id: 18,
        patientName: "Lina El Fassi",
        patientId: 304,
        patientPhoto: "",
        date: "2025-05-19",
        time: "10:15 AM",
        status: "confirmed",
        reason: "Allergy test",
        contact: "lina.elfassi@example.com"
      },
      {
        id: 19,
        patientName: "Mehdi El Omari",
        patientId: 305,
        patientPhoto: "",
        date: "2025-05-20",
        time: "03:30 PM",
        status: "pending",
        reason: "Asthma follow-up",
        contact: "mehdi.elomari@example.com"
      }
    ],
    messages: [
      {
        id: 8,
        patientId: 301,
        patientName: "Adam Belkhayat",
        content: "Bonjour Docteur, est-ce que mon fils peut manger avant la vaccination?",
        timestamp: "2025-05-14T08:20:00",
        sender: "patient"
      },
      {
        id: 9,
        patientId: 302,
        patientName: "Sofia El Kettani",
        content: "Ma fille a une forte fièvre depuis hier soir, que dois-je faire?",
        timestamp: "2025-05-15T19:45:00",
        sender: "patient"
      },
      {
        id: 10,
        patientId: 302,
        patientName: "Sofia El Kettani",
        content: "Donnez-lui du paracétamol et amenez-la demain à la consultation",
        timestamp: "2025-05-15T20:15:00",
        sender: "doctor"
      }
    ]
  }
};


  useEffect(() => {
    setTimeout(() => {
      const doctorData = doctorsData[doctorId];
      if (doctorData) {
        setDoctor({
          id: doctorData.id,
          name: doctorData.name,
          specialization: doctorData.specialization,
          email: doctorData.email,
          clinic: doctorData.clinic,
          experience: doctorData.experience,
          photo: doctorData.photo
        });
        setAppointments(doctorData.appointments || []);
        setMessages(doctorData.messages || []);
      } else {
        navigate('/doctors');
      }
    }, 500);
  },);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedPatient) {
      const newMsg = {
        id: messages.length + 1,
        patientId: selectedPatient.patientId,
        patientName: selectedPatient.patientName,
        content: newMessage,
        timestamp: new Date().toISOString(),
        sender: "doctor"
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const handleSelectAppointment = (id) => {
    setSelectedAppointments(prev =>
      prev.includes(id)
        ? prev.filter(appId => appId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedAppointments(appointments.map(app => app.id));
    } else {
      setSelectedAppointments([]);
    }
  };

  const confirmAppointments = () => {
    setAppointments(prev =>
      prev.map(app =>
        selectedAppointments.includes(app.id)
          ? { ...app, status: 'confirmed' }
          : app
      )
    );
    setSelectedAppointments([]);
  };

  const rejectAppointments = () => {
    const updatedAppointments = appointments.map(app =>
      selectedAppointments.includes(app.id)
        ? {
            ...app,
            status: 'rejected',
            rejectionReason: rejectionReason
          }
        : app
    );

    const rejectionMessages = appointments
      .filter(app => selectedAppointments.includes(app.id))
      .map(appointment => ({
        id: messages.length + 1,
        patientId: appointment.patientId,
        patientName: appointment.patientName,
        content: `Your appointment on ${appointment.date} at ${appointment.time} has been rejected. Reason: ${rejectionReason}`,
        timestamp: new Date().toISOString(),
        sender: "doctor"
      }));

    setAppointments(updatedAppointments);
    setMessages([...messages, ...rejectionMessages]);
    setSelectedAppointments([]);
    setRejectionReason('');
    setShowRejectModal(false);
  };

  const deleteAppointments = () => {
    setAppointments(prev =>
      prev.filter(app => !selectedAppointments.includes(app.id))
    );
    setSelectedAppointments([]);
  };

  const getPatientMessages = (patientId) => {
    return messages.filter(msg => msg.patientId === patientId)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  if (!doctor) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Rejection Reason</h3>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Please explain the reason for rejection..."
              className="w-full p-3 border border-gray-300 rounded mb-4 h-32"
              required
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowRejectModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={rejectAppointments}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                disabled={!rejectionReason.trim()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Doctor Portal - {doctor.name}</h1>
          <button
            onClick={() => navigate('/')}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-5 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {doctor.photo ? (
                <img src={doctor.photo} alt="Doctor" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-2xl">DR</span>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialization}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {doctor.experience} experience
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  {doctor.clinic}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{doctor.email}</p>
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setSelectedTab('appointments')}
            className={`px-4 py-2 font-medium text-sm ${selectedTab === 'appointments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Appointments
          </button>
          <button
            onClick={() => setSelectedTab('patients')}
            className={`px-4 py-2 font-medium text-sm ${selectedTab === 'patients' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Patients
          </button>
          <button
            onClick={() => setSelectedTab('messages')}
            className={`px-4 py-2 font-medium text-sm ${selectedTab === 'messages' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Messages
          </button>
        </div>

        {selectedTab === 'appointments' && (
          <div className="space-y-4">
            {selectedAppointments.length > 0 && (
              <div className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                <span className="text-sm text-blue-800">
                  {selectedAppointments.length} selected
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={confirmAppointments}
                    className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowRejectModal(true)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                  >
                    Reject
                  </button>
                  <button
                    onClick={deleteAppointments}
                    className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                          type="checkbox"
                          onChange={handleSelectAll}
                          checked={selectedAppointments.length === appointments.length && appointments.length > 0}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reason
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.length > 0 ? (
                      appointments.map((appointment) => (
                        <tr key={appointment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              checked={selectedAppointments.includes(appointment.id)}
                              onChange={() => handleSelectAppointment(appointment.id)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                {appointment.patientPhoto ? (
                                  <img src={appointment.patientPhoto} alt={appointment.patientName} className="h-full w-full object-cover" />
                                ) : (
                                  <span className="text-gray-400 text-sm">P</span>
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {appointment.patientName}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {appointment.contact}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {formatDate(appointment.date)}
                            </div>
                            <div className="text-xs text-gray-500">
                              {appointment.time}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 max-w-xs truncate">
                              {appointment.reason}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {appointment.status === 'confirmed' && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                Confirmed
                              </span>
                            )}
                            {appointment.status === 'pending' && (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                Pending
                              </span>
                            )}
                            {appointment.status === 'rejected' && (
                              <div>
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                                  Rejected
                                </span>
                                {appointment.rejectionReason && (
                                  <div className="text-xs text-gray-500 mt-1 max-w-xs">
                                    {appointment.rejectionReason}
                                  </div>
                                )}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex space-x-2">
                              {appointment.status === 'pending' && (
                                <>
                                  <button
                                    onClick={() => {
                                      setSelectedAppointments([appointment.id]);
                                      confirmAppointments();
                                    }}
                                    className="text-green-600 hover:text-green-800 text-sm"
                                  >
                                    Confirm
                                  </button>
                                  <button
                                    onClick={() => {
                                      setSelectedAppointments([appointment.id]);
                                      setShowRejectModal(true);
                                    }}
                                    className="text-red-600 hover:text-red-800 text-sm"
                                  >
                                    Reject
                                  </button>
                                </>
                              )}
                              <button
                                onClick={() => {
                                  setSelectedAppointments([appointment.id]);
                                  deleteAppointments();
                                }}
                                className="text-gray-600 hover:text-gray-800 text-sm"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                          No appointments found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'messages' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex flex-col md:flex-row h-[500px]">
              <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r">
                <div className="p-3 border-b bg-gray-50">
                  <h3 className="font-medium text-sm">Patients</h3>
                </div>
                <div className="overflow-y-auto">
                  {appointments.filter(a => a.status === 'confirmed').map(appointment => (
                    <div
                      key={appointment.patientId}
                      className={`p-3 border-b cursor-pointer ${selectedPatient?.patientId === appointment.patientId ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                      onClick={() => setSelectedPatient({
                        patientId: appointment.patientId,
                        patientName: appointment.patientName,
                        patientPhoto: appointment.patientPhoto
                      })}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mr-3">
                          {appointment.patientPhoto ? (
                            <img src={appointment.patientPhoto} alt={appointment.patientName} className="h-full w-full object-cover" />
                          ) : (
                            <span className="text-gray-400 text-sm">P</span>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{appointment.patientName}</p>
                          <p className="text-xs text-gray-500">
                            Last: {formatDate(appointment.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                {selectedPatient ? (
                  <>
                    <div className="p-3 border-b bg-gray-50 flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mr-2">
                        {selectedPatient.patientPhoto ? (
                          <img src={selectedPatient.patientPhoto} alt={selectedPatient.patientName} className="h-full w-full object-cover" />
                        ) : (
                          <span className="text-gray-400 text-xs">P</span>
                        )}
                      </div>
                      <h3 className="font-medium text-sm">{selectedPatient.patientName}</h3>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                      {getPatientMessages(selectedPatient.patientId).map(message => (
                        <div
                          key={message.id}
                          className={`mb-3 ${message.sender === 'doctor' ? 'text-right' : 'text-left'}`}
                        >
                          <div
                            className={`inline-block p-3 rounded-lg max-w-xs text-sm ${message.sender === 'doctor'
                              ? 'bg-blue-500 text-white'
                              : 'bg-white border border-gray-200'}`}
                          >
                            <p>{message.content}</p>
                            <p className={`text-xs mt-1 ${message.sender === 'doctor' ? 'text-blue-100' : 'text-gray-500'}`}>
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 border-t bg-white">
                      <div className="flex">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type a message..."
                          className="flex-1 border rounded-l-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button
                          onClick={handleSendMessage}
                          className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 text-sm"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                    Select a patient to start messaging
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'patients' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Appointment
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.filter(a => a.status === 'confirmed').map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            {appointment.patientPhoto ? (
                              <img src={appointment.patientPhoto} alt={appointment.patientName} className="h-full w-full object-cover" />
                            ) : (
                              <span className="text-gray-400 text-sm">P</span>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {appointment.patientName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatDate(appointment.date)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {appointment.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {appointment.contact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => {
                            setSelectedPatient({
                              patientId: appointment.patientId,
                              patientName: appointment.patientName,
                              patientPhoto: appointment.patientPhoto
                            });
                            setSelectedTab('messages');
                          }}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Message
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorDashboard;