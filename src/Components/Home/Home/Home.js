import React from "react";
import Blogs from "../Blogs/Blogs";
import ContactForm from "../ContactForm/ContactForm";
import Doctors from "../Doctors/Doctors";
import FeaturedService from "../FeaturedService/FeaturedService";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Doctors></Doctors>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
