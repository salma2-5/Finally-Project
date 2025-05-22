import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Comment prendre rendez-vous avec un dermatologue ?",
      answer: "Vous pouvez prendre rendez-vous directement en ligne en sélectionnant un médecin dans notre liste de professionnels et en choisissant un créneau disponible. Vous pouvez également nous appeler au 06 02 34 56 98 du lundi au vendredi de 9h à 18h."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, CB), les chèques, ainsi que les paiements en espèces. Les paiements en ligne sécurisés sont disponibles pour les consultations à distance."
    },
    {
      question: "La consultation est-elle remboursée par la Sécurité Sociale ?",
      answer: "Oui, les consultations chez un dermatologue conventionné sont remboursées à 70% par l'Assurance Maladie. Le reste à charge peut être pris en charge par votre mutuelle selon votre contrat."
    },
    {
      question: "Comment se déroule une consultation en ligne ?",
      answer: "Après avoir pris rendez-vous, vous recevrez un lien pour rejoindre la visioconférence. Assurez-vous d'avoir une bonne connexion internet, une webcam et un microphone. Préparez vos questions et vos antécédents médicaux à l'avance."
    },
    {
      question: "Que faire en cas d'urgence dermatologique ?",
      answer: "En cas d'urgence (réaction allergique grave, infection sévère, etc.), composez le 15 ou rendez-vous aux urgences les plus proches. Pour les problèmes moins urgents, nos dermatologues peuvent vous proposer un rendez-vous en téléconsultation dans la journée."
    },
    {
      question: "Faut-il une ordonnance pour consulter un dermatologue ?",
      answer: "Non, vous pouvez consulter un dermatologue sans ordonnance. Cependant, pour bénéficier du remboursement optimal, il est recommandé de passer par votre médecin traitant qui pourra vous orienter si nécessaire."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Foire Aux Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus fréquentes concernant nos services dermatologiques.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Questions fréquentes</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Vous ne trouvez pas la réponse à votre question ? <Link to="/contact" className="text-blue-500 hover:text-blue-700 font-medium">Contactez-nous</Link>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-blue-500 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-5 pt-0 transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Besoin d'aide supplémentaire ?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions concernant nos services dermatologiques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition duration-300"
            >
              Nous contacter
            </Link>
            <a
              href="tel:+33123456789"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-medium transition duration-300"
            >
              Appeler le 06 02 34 56 98
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;