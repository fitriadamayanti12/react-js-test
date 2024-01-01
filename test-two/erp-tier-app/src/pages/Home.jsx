import React from "react";
import NavScrollExample from "../components/Navbar";
import Pricing from "../components/Pricing";
import About from "../components/About";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg from "../assets/home.svg";
import { Element } from "react-scroll";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavScrollExample />
      <Session className="container section-center">
        <article className="content">
          <h1 style={{ fontWeight: "bold" }}>ERP</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis praesentium, inventore iste sit est sapiente rem facere
            eius incidunt fugiat.
          </p>
          <Link to="/" className="btn hero-btn">
            CHOOSE NOW
          </Link>
        </article>
        <article className="img-container">
          <img src={heroBcg} alt="nice table" className="main-img" />
        </article>
      </Session>
      <Element name="about-section">
        <About />
      </Element>
      <Element name="pricing-section">
        <Pricing />
      </Element>
      <Element name="contact-section">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}
const Session = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: #808080;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      background-color: #1b3260;
      color: #fff;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: 5px;
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: 5px;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: #b4cfe6;
      bottom: 0%;
      left: -8%;
      border-radius: 5px;
    }
  }
`;

export default Home;
