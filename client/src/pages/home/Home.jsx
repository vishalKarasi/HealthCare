import { Link } from "react-router-dom";
import "./home.css";
import home from "@assets/images/home/home.svg";
import pfp from "@assets/images/home/pfp.jpeg";
import TestimonialCard from "@components/testimonialCard/TestimonialCard";
import Carousel from "@components/carousel/Carousel";

function Home() {
  const testimonials = [
    {
      image: pfp,
      name: "Vishal Karasi",
      location: "Maharastra, Pune",
      testimonial:
        "After my cancer diagnosis, I was overwhelmed, but they gave me incredible support and care. The doctors explained everything clearly, and the staff was always there for me. I’m so grateful for their expertise and compassionit made all the difference during a difficult time",
    },
    {
      image: pfp,
      name: "Vishal Karasi",
      location: "Maharastra, Pune",
      testimonial:
        "After my cancer diagnosis, I was overwhelmed, but they gave me incredible support and care. The doctors explained everything clearly, and the staff was always there for me. I’m so grateful for their expertise and compassionit made all the difference during a difficult time",
    },
    {
      image: pfp,
      name: "Vishal Karasi",
      location: "Maharastra, Pune",
      testimonial:
        "After my cancer diagnosis, I was overwhelmed, but they gave me incredible support and care. The doctors explained everything clearly, and the staff was always there for me. I’m so grateful for their expertise and compassionit made all the difference during a difficult time",
    },
    {
      image: pfp,
      name: "Vishal Karasi",
      location: "Maharastra, Pune",
      testimonial:
        "After my cancer diagnosis, I was overwhelmed, but they gave me incredible support and care. The doctors explained everything clearly, and the staff was always there for me. I’m so grateful for their expertise and compassionit made all the difference during a difficult time",
    },
    {
      image: pfp,
      name: "Vishal Karasi",
      location: "Maharastra, Pune",
      testimonial:
        "After my cancer diagnosis, I was overwhelmed, but they gave me incredible support and care. The doctors explained everything clearly, and the staff was always there for me. I’m so grateful for their expertise and compassionit made all the difference during a difficult time",
    },
  ];
  return (
    <main className="home">
      <section className="homeContent">
        <img src={home} alt="home banner" loading="lazy" />
        <div className="homeText">
          <h1>Your Health is our priority!</h1>
          <i>Comprehensive Healthcare, Right at Your Fingertips</i>
          <div className="wrapper">
            <a href="#footer" className="btn btnPrimary">
              Book an appointment
            </a>
            <Link to="/services" className="btn btnSecondary">
              Explore our service
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h2>Life we succed in saving !</h2>
        <Carousel>
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </Carousel>
      </section>
    </main>
  );
}

export default Home;
