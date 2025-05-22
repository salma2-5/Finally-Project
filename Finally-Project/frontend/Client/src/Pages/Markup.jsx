import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "../Components/Layout";
import { ToastContainer } from "react-toastify";

// Info Pages
import Home from "./Info/Home";
import About from "./Info/About";
import Contact from "./Info/Contact";
import LoginPage from "./Info/LoginPage";
import Faq from "./Info/Faq";

// Services
import Services from "../Pages/ServicesSection/Services";
// import ServicesList from "./ServicesSection/ServicesList";
import DetailsService from "./ServicesSection/DetailsService";

// Doctors
import Doctors from "../Pages/DoctorsSection/Doctors";
import DoctorDetails from "./DoctorsSection/DoctorDetails";
import Appointments from "../Pages/DoctorsSection/Appointments";
import DoctorDashboard from "../Pages/DoctorsSection/DoctorDashboard";
import Reviews from "./DoctorsSection/Reviews";

// Patients
import PatientSignup from "../Pages/PatientsSection/PatientSignup";
import PatientAppointments from "../Pages/PatientsSection/PatientAppointments";

const Markup = () => {
  return (
    <>
      <ToastContainer position="bottom-right" />

      <Routes>
        {/* Main Public Layout */}
        <Route path="/" element={<Layout />}>
          {/* Info Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="faq" element={<Faq />} />

          {/* Services */}
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<DetailsService />} />
          {/* <Route path="services-list" element={<ServicesList />} /> */}

          {/* Doctors */}
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctordetails/:id" element={<DoctorDetails />} />
          <Route path="appointments/:doctorId" element={<Appointments />} />
          <Route path="doctor/:doctorId" element={<DoctorDashboard />} />

          {/* Patients */}
          <Route path="signup" element={<PatientSignup />} />
          <Route path="myappointments" element={<PatientAppointments />} />

          {/* Reviews */}
          <Route path="reviews/:id" element={<Reviews />} />
        </Route>

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="text-center text-xl mt-20">404 - Page Not Found</div>
          }
        />
      </Routes>
    </>
  );
};

export default Markup;
