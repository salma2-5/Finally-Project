// import React from 'react';
// import { Link } from 'react-router-dom';

// const services = [  {
//     id: 1,
//     title: "Traitement de l'acné",
//     description: "Plans personnalisés adaptés à votre type de peau et condition. Dites adieu à l'acné persistante.",
//     imageUrl: "",
//     moreInfo: "Plans de traitement détaillés, conseils de mode de vie et techniques avancées utilisées par les dermatologues."
//   },
//   {
//     id: 2,
//     title: "Gestion de la rosacée",
//     description: "Soins complets pour réduire efficacement les rougeurs, inflammations et poussées de rosacée.",
//     imageUrl: "https://i.pinimg.com/736x/4c/7c/27/4c7c273c75675abb884ab50bc28ea0d4.jpg",
//     moreInfo: "Nous proposons des plans de traitement personnalisés, médicaments et conseils pour gérer les symptômes."
//   },
//   {
//     id: 3,
//     title: "Traitement des problèmes capillaires",
//     description: "Solutions expertes pour la perte de cheveux, pellicules et problèmes de cuir chevelu.",
//     imageUrl: "https://i.pinimg.com/736x/a9/d2/bc/a9d2bc228f0d0194ebce7e301c475a8f.jpg",
//     moreInfo: "Diagnostics et traitements pour l'amincissement des cheveux, alopécie, pellicules et autres affections."
//   },
//   {
//     id: 4,
//     title: "Soins pour eczéma et dermatite",
//     description: "Soulagement des peaux sèches, démangeaisons et inflammations avec des traitements sur mesure.",
//     imageUrl: "https://tse2.mm.bing.net/th?id=OIP.6SG83HhpmtXHWnj901k5YwHaHa&pid=Api&P=0&h=180",
//     moreInfo: "Gestion de l'eczéma par traitements sur ordonnance, routines de soins et tests d'allergènes."
//   },
//   {
//     id: 5,
//     title: "Traitement du psoriasis",
//     description: "Solutions efficaces contre desquamation, inflammation et contrôle des poussées.",
//     imageUrl: "https://tse3.mm.bing.net/th?id=OIP.ClwmYoIoCgY87tjA92fM5gHaE8&pid=Api&P=0&h=180",
//     moreInfo: "Thérapies topiques, photothérapie et médicaments biologiques pour réduire les symptômes."
//   },
//   {
//     id: 6,
//     title: "Tests d'allergie cutanée",
//     description: "Identification et traitement des réactions allergiques causées par produits ou facteurs environnementaux.",
//     imageUrl: "https://tse2.mm.bing.net/th?id=OIP.t50D-M8ceIjhlUHunKtODQHaE8&pid=Api&P=0&h=180",
//     moreInfo: "Tests épicutanés et consultations pour identifier les allergènes et établir des plans de gestion."
//   },
//   {
//     id: 7,
//     title: "Retrait des grains de beauté et acrochordons",
//     description: "Retrait sûr et indolore avec cicatrices minimales.",
//     imageUrl: "https://tse1.mm.bing.net/th?id=OIP.baaUwxQpSqAkcEQsjwLJ5QHaE8&pid=Api&P=0&h=180",
//     moreInfo: "Cryothérapie, électrochirurgie et excision pour éliminer les lésions cutanées bénignes."
//   },
//   {
//     id: 8,
//     title: "Traitement de l'hyperpigmentation",
//     description: "Uniformisation du teint pour atténuer taches brunes, mélasma et décolorations.",
//     imageUrl: "https://tse4.mm.bing.net/th?id=OIP.q5FilTKW1ShpHI57WhkmXQHaEK&pid=Api&P=0&h=180",
//     moreInfo: "Peels chimiques, laser et soins médicaux pour traiter les problèmes de pigmentation."
//   },
//   {
//     id: 9,
//     title: "Soins anti-âge et rides",
//     description: "Réduction des rides et ridules avec nos traitements de rajeunissement avancés.",
//     imageUrl: "https://i.pinimg.com/736x/0b/fa/b7/0bfab7e18513d7b5997b6415fa78c84b.jpg",
//     moreInfo: "Botox, combleurs, microneedling et routines de soins pour une peau jeune et éclatante."
//   },
//  ];

// const ServicesList = () => (
//   <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//     {services.map(service => (
//       <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover"/>
//         <div className="p-6">
//           <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//           <p className="text-gray-600 mb-4">{service.description}</p>
//           <Link 
//             to={`/services/${service.id}`}  
//             className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//           >
//             En savoir plus
//           </Link>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// export default ServicesList;
