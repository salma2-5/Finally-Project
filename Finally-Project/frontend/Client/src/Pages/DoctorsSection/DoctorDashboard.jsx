import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TableauDeBordMedecin = () => {
  const navigate = useNavigate();
  const [medecin, setMedecin] = useState(null);
  const [rendezVous, setRendezVous] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [nouveauRendezVous, setNouveauRendezVous] = useState({
    patient: "",
    date: "",
    heure: "",
    motif: ""
  });
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté et est un médecin
    const utilisateur = JSON.parse(localStorage.getItem("user"));
    if (!utilisateur || utilisateur.role !== "doctor") {
      navigate("/connexion");
      return;
    }

    // Simulation de récupération des données
    const chargerDonnees = () => {
      setTimeout(() => {
        // Trouver le médecin par nom (en réalité, on utiliserait l'ID)
        const medecinTrouve = donneesMedecins.find(m => 
          m.name.toLowerCase().includes(utilisateur.name.toLowerCase()))
          || donneesMedecins[0]; // fallback au premier médecin
        
        setMedecin(medecinTrouve);
        
        // Simulation de rendez-vous
        const rendezVousDemo = [
  { id: 1, patient: "Patient 1", date: "2023-06-15", heure: "10:00", statut: "confirmé", motif: "Consultation générale" },
  { id: 2, patient: "Patient 2", date: "2023-06-15", heure: "11:30", statut: "confirmé", motif: "Suivi traitement" },
  { id: 3, patient: "Patient 3", date: "2023-06-16", heure: "09:00", statut: "en attente", motif: "Première visite" },
  { id: 4, patient: "Patient 4", date: "2023-06-16", heure: "14:00", statut: "annulé", motif: "Douleurs abdominales" },
  { id: 5, patient: "Patient 5", date: "2023-06-17", heure: "08:30", statut: "confirmé", motif: "Vaccination" },
  { id: 6, patient: "Patient 6", date: "2023-06-17", heure: "10:15", statut: "en attente", motif: "Résultats d’analyse" }

        ];
        setRendezVous(rendezVousDemo);
        setChargement(false);
      }, 1000);
    };

    chargerDonnees();
  }, [navigate]);

  const gererChangementFormulaire = (e) => {
    const { name, value } = e.target;
    setNouveauRendezVous(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const ajouterRendezVous = (e) => {
    e.preventDefault();
    const nouveauRDV = {
      id: rendezVous.length + 1,
      patient: nouveauRendezVous.patient,
      date: nouveauRendezVous.date,
      heure: nouveauRendezVous.heure,
      statut: "confirmé",
      motif: nouveauRendezVous.motif
    };

    setRendezVous([...rendezVous, nouveauRDV]);
    setNouveauRendezVous({ patient: "", date: "", heure: "", motif: "" });
    setAfficherFormulaire(false);
    // Ici, vous devriez normalement envoyer les données à votre API
  };

  if (chargement) {
    return <div className="text-center py-10">Chargement du tableau de bord...</div>;
  }

  if (!medecin) {
    return <div className="text-center py-10">Médecin non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profil du Médecin */}
        <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              {medecin.photo ? (
                <img src={medecin.photo} alt={medecin.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                <span className="text-4xl text-gray-500">👨‍⚕️</span>
              )}
            </div>
            <h2 className="text-2xl font-bold">{medecin.name}</h2>
            <p className="text-blue-600">{medecin.specialization}</p>
            <p className="text-gray-600">{medecin.clinic}, {medecin.city}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">À propos</h3>
              <p>{medecin.bio}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Services</h3>
              <ul className="space-y-2">
                {medecin.services.map((service, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{service.name}</span>
                    <span>{service.price} DH</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Heures de travail</h3>
              <ul className="space-y-1">
                {Object.entries(medecin.workingHours).map(([jour, heures]) => (
                  <li key={jour} className="flex justify-between">
                    <span>{jour}:</span>
                    <span>{heures}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gestion des Rendez-vous */}
        <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Vos Rendez-vous</h2>
            <button 
              onClick={() => setAfficherFormulaire(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Ajouter un Rendez-vous
            </button>
          </div>

          {/* Formulaire d'ajout */}
          {afficherFormulaire && (
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Nouveau Rendez-vous</h3>
              <form onSubmit={ajouterRendezVous}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Nom du Patient</label>
                    <input
                      type="text"
                      name="patient"
                      value={nouveauRendezVous.patient}
                      onChange={gererChangementFormulaire}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={nouveauRendezVous.date}
                      onChange={gererChangementFormulaire}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Heure</label>
                    <input
                      type="time"
                      name="heure"
                      value={nouveauRendezVous.heure}
                      onChange={gererChangementFormulaire}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Motif</label>
                    <input
                      type="text"
                      name="motif"
                      value={nouveauRendezVous.motif}
                      onChange={gererChangementFormulaire}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setAfficherFormulaire(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Confirmer
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Liste des rendez-vous */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motif</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rendezVous.map((rdv) => (
                  <tr key={rdv.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{rdv.patient}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{rdv.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{rdv.heure}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{rdv.motif}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        rdv.statut === 'confirmé' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {rdv.statut}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">Voir</button>
                      <button className="text-red-600 hover:text-red-800">Annuler</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Statistiques */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Rendez-vous Totaux</h3>
              <p className="text-3xl font-bold">{rendezVous.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Confirmés</h3>
              <p className="text-3xl font-bold">{rendezVous.filter(rdv => rdv.statut === 'confirmé').length}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">En Attente</h3>
              <p className="text-3xl font-bold">{rendezVous.filter(rdv => rdv.statut === 'en attente').length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Données des médecins (à importer depuis un autre fichier)
const donneesMedecins  = [
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

export default TableauDeBordMedecin;