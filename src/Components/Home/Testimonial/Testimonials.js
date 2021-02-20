import React from "react";
import wilson from "../../image/Wilson Harry.png";
import ema from '../../image/Ema Gomez.png';
import aliza from '../../image/Aliza Farari.png';
import './Testimonials.css';
import Testimonial from "../Testimonials/Testimonial";




const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: wilson,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: ema,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: aliza,
  },
];

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials my-5 py-5">
        <div className="container">
          <div className="section-header">
            <h5 className="text-primary text-uppercase">Testimonial</h5>
            <h1>
              What Our Patients <br /> Says{" "}
            </h1>
          </div>
          <div className="card-deck mt-5">
            {testimonialData.map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
