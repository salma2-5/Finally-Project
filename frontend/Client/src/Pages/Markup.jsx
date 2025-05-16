import { Routes, Route } from 'react-router-dom';
import About from './Info/About';
import Contact from './Info/Contact';
import Layout from '../Components/Layout';
import Services from '../Pages/ServicesSection/Services';
import Doctors from '../Pages/DoctorsSection/Doctors';
import Appointments from '../Pages/DoctorsSection/Appointments';
import DoctorSignup from '../Pages/DoctorsSection/DoctorSignup';
import PatientSignup from '../Pages/PatientsSection/PatientSignup';
import Reviews from './DoctorsSection/Reviews';
import AcneTreatment from '../Pages/ServicesSection/AcneTreatment';
import RosaceaTreatment from '../Pages/ServicesSection/RosaceaTreatment';
import CreateAccount from './Info/CreateAccount';
import MyProfile from '../Pages/PatientsSection/MyProfile';
import PatientAppointments from '../Pages/PatientsSection/PatientAppointments';
import HairProblems from '../Pages/ServicesSection/HairProblems';
import CanceledAppointments from '../Pages/PatientsSection/CanceledAppointments';
// import PA2 from '../Pages/PatientsSection/PA2';
// import MyP2 from '../Pages/PatientsSection/MyP2';
import DoctorDashboard from '../Pages/DoctorsSection/DoctorDashboard';
import Home from './Info/Home';
import DoctorLogin from './DoctorsSection/DoctorLogin';
import DetailsService from './ServicesSection/DetailsService';

const Markup = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home and Info Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="createaccount" element={<CreateAccount />} />
        
        {/* Services Section */}
        <Route path="services" element={<Services />} />
        <Route path="acne-treatment" element={<AcneTreatment />} />
        <Route path="rosacea-treatment" element={<RosaceaTreatment />} />
        <Route path="hair-problems-treatment" element={<HairProblems />} />
        <Route path="details-service/:id" element={<DetailsService />} /> {/* Dynamic service details */}

        {/* Doctor and Appointment Pages */}
        <Route path="doctors" element={<Doctors />} />
        <Route path="appointments/:id" element={<Appointments />} />
        <Route path="doctor-login" element={<DoctorLogin />} />
        <Route path="doctor/:doctorId" element={<DoctorDashboard />} />
        <Route path="signupdoctor" element={<DoctorSignup />} />
        
        {/* Patient Pages */}
        <Route path="signup" element={<PatientSignup />} />
        <Route path="myprofile/:id" element={<MyProfile />} />
        <Route path="myappointments" element={<PatientAppointments />} />
        <Route path="canceled-appointments" element={<CanceledAppointments />} />

        {/* Reviews */}
        <Route path="reviews/:id" element={<Reviews />} />
      </Route>
      
      {/* 404 Page */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default Markup;
