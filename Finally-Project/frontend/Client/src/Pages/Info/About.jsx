import React, { useState } from 'react';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "EXPERTISE DERMATOLOGIQUE",
      description: "Des spécialistes hautement qualifiés pour diagnostiquer et traiter une large gamme de problèmes de peau."
    },
    {
      title: "TECHNOLOGIE AVANCÉE",
      description: "Utilisation d’outils modernes pour garantir un diagnostic précis et des traitements efficaces."
    },
    {
      title: "SUIVI PERSONNALISÉ",
      description: "Un accompagnement sur mesure pour chaque patient, avec des conseils adaptés à votre type de peau."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* En-tête À propos */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-light text-gray-500'>
          À <span className='text-gray-700 font-medium'>PROPOS</span> DE <span className='text-primary font-semibold'>NOUS</span>
        </h2>
      </div>

      {/* Contenu À propos */}
      <div className='flex flex-col md:flex-row gap-12 items-center mb-16'>
        <div className='w-full md:w-1/2 lg:w-2/5'>
          <img 
            className='w-full h-auto rounded-lg shadow-lg object-cover'
            src='about_image.png' 
            alt="À propos de Nous" 
          />
        </div>
        
        <div className='w-full md:w-1/2 lg:w-3/5 space-y-6 text-gray-600'>
          <p className='text-base md:text-lg leading-relaxed'>
            Bienvenue chez <strong>PureDerme</strong>, votre référence en soins dermatologiques modernes. Notre mission est de rendre les soins de la peau accessibles, professionnels et personnalisés pour tous.
          </p>
          
          <p className='text-base md:text-lg leading-relaxed'>
            Nous combinons l’expertise médicale avec les technologies les plus récentes pour offrir une expérience de soin unique, qu’il s’agisse d’acné, d’eczéma, de vieillissement cutané ou d’autres affections dermatologiques. Notre réseau de dermatologues certifiés est à votre service, prêt à vous accompagner à chaque étape de votre parcours dermatologique.
          </p>
          
          <h3 className='text-xl font-semibold text-gray-800 mt-8'>Notre Engagement</h3>
          <p className='text-base md:text-lg leading-relaxed'>
            Chez PureDerme, nous croyons que chaque peau mérite une attention particulière. C’est pourquoi nous nous engageons à vous offrir un service empathique, efficace et de haute qualité, dans un environnement respectueux et professionnel.
          </p>
        </div>
      </div>

      {/* Valeurs ajoutées */}
      <div className='mb-8'>
        <h2 className='text-2xl md:text-3xl font-light'>
          NOS <span className='text-gray-700 font-semibold'>VALEURS</span>
        </h2>
      </div>

      {/* Cartes caractéristiques */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`border rounded-xl p-8 md:p-10 flex flex-col gap-4 transition-all duration-300 cursor-pointer
              ${hoveredCard === index ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-100'}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <b className={`text-lg font-semibold ${hoveredCard === index ? 'text-white' : 'text-blue-700'}`}>
              {feature.title}
            </b>
            <p className='text-sm md:text-base'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
