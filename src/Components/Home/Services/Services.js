import React from "react";
import fluoride from "../../image/fluoride.png";
import cavity from "../../image/cavity.png";
import whitening from "../../image/whitening.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";



const serviceData = [
  {
    name: "Fluoride Treatment",
    img: fluoride
  },
  {
    name: "Cavity Filling",
    img: cavity
  },
  {
    name: "Teeth Whitening",
    img: whitening
  }
];
const Services = () => {
  return (
    <section className="service-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1"}}>Our services</h5>
        <h2 style={{ color: "#3E4659"}}>Services we provide</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {
           serviceData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
