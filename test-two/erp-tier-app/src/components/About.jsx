import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
      <Wrapper className="container page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title text-center">
            <h2 style={{fontWeight:"bold"}}>Our Company</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus sequi sunt, fugit vitae quibusdam fuga! Dolor nam sint
            ex neque iusto excepturi, magnam est sequi dolore mollitia vitae
            magni libero velit consectetur nostrum quidem ut, a ad! Pariatur
            recusandae consequuntur aliquam, libero facere reprehenderit optio
            culpa. Minima deleniti praesentium eos.
          </p>
        </article>
      </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: #1b3260;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default About;
