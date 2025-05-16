import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12 transition-all hover:text-blue-700">
        About Us
      </h1>

      <section className="bg-gradient-to-br from-blue-50 to-white shadow-2xl rounded-2xl p-12 mb-16 transition-all hover:shadow-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="picone.webp"
            alt="Mission"
            className="w-full md:w-1/2 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-lg text-gray-700 leading-relaxed md:w-1/2">
            Our mission is to redefine healthcare by connecting people with the right professionals, simplifying access
            to care, and empowering patients with technology. From online consultations to real-time communication with
            doctors, our goal is to make healthcare accessible, transparent, and efficient—anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-2xl p-12 mb-16 transition-all hover:shadow-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <p className="text-lg text-gray-700 leading-relaxed md:w-1/2">
            We envision a world where distance and barriers no longer prevent anyone from receiving quality healthcare.
            By embracing innovation, we strive to create a global network where patients can connect with the best
            healthcare providers regardless of location—transforming lives and communities through better health.
          </p>
          <img
            src="pictwo.webp"
            alt="Vision"
            className="w-full md:w-1/2 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      <section className="bg-white shadow-2xl rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
        <ul className="grid md:grid-cols-3 gap-8 text-gray-700 text-lg list-disc pl-6">
          <li className="transition-all hover:text-blue-500 hover:scale-105">Empowering Patients Through Knowledge</li>
          <li className="transition-all hover:text-blue-500 hover:scale-105">Innovative Dermatological Solutions</li>
          <li className="transition-all hover:text-blue-500 hover:scale-105">Integrity, Ethics, and Compassion</li>
          <li className="transition-all hover:text-blue-500 hover:scale-105">Accessible Care for All Communities</li>
          <li className="transition-all hover:text-blue-500 hover:scale-105">Collaborative and Transparent Practices</li>
          <li className="transition-all hover:text-blue-500 hover:scale-105">Lifelong Learning and Improvement</li>
        </ul>
      </section>

      <section className="bg-gradient-to-tr from-blue-100 to-white shadow-2xl rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Technology</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p>
              At DermaCare, we utilize the latest in artificial intelligence and machine learning to provide accurate,
              real-time skin condition assessments. Our telemedicine platform connects patients with dermatologists
              through high-quality video calls, ensuring that skin care is accessible from the comfort of your home.
            </p>
            <p className="mt-4">
              With an easy-to-use interface, AI-powered diagnostic tools, and a network of top professionals, we are
              committed to improving skin health management for everyone.
            </p>
          </div>
          <img
            src="picthree.jpeg"
            alt="Technology"
            className="w-full md:w-1/2 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      <section className="bg-gradient-to-tr from-blue-100 to-white shadow-2xl rounded-2xl p-12 mb-16 transition-all hover:shadow-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What Drives Us</h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <p>
              At DermaCare, we believe in a world where skin health is a right, not a privilege. We are passionate about
              using cutting-edge technology to connect patients with dermatology professionals faster, safer, and more affordably.
            </p>
            <p className="mt-4">
              Our mission is rooted in empathy and innovation—making quality dermatological care accessible regardless of location or economic background.
            </p>
          </div>
          <div>
            <p>
              From AI-powered diagnostics to remote consultations and educational resources, our platform is built to serve people—not just patients.
            </p>
            <p className="mt-4">
              Our strength lies in a unified purpose: to redefine how people understand and manage their skin health with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-4">
          Have any questions or want to learn more?{' '}
          <a href="/contact" className="text-blue-600 font-semibold hover:underline transition-all hover:text-blue-800">
            Contact our team
          </a>.
        </p>
      </div>
    </div>
  );
};

export default About;
