import React from "react";
import styled from "styled-components";
import { contacts } from "../utils/constants";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className="container section-center">
          <article className="header">
            <h3>
              CONTACT US <br />
              RIGHT NOW!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
              modi quaerat deserunt quam odit nostrum amet blanditiis sed nisi
              neque!
            </p>
          </article>
          <div className="services-center">
            {contacts.map((contact) => {
              const { id, icon, title, address, phone } = contact;
              return (
                <article key={id} className="service">
                  <span className="icon">{icon}</span>
                  <h4>{title}</h4>
                  <p>{address}</p>
                  <p>{phone}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Wrapper>
      <Mail>
        <div className="container section-center">
          <h3>Join out newsletter and get 25% off</h3>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              necessitatibus ex, aliquam et veritatis placeat totam debitis rem,
              blanditiis harum, esse laborum impedit mollitia fuga velit maiores
              voluptatibus sunt dicta.
            </p>
            <form method="POST" className="contact-form">
              <input
                type="email"
                name="_replyto"
                placeholder="enter email"
                className="form-input"
              />
              <button type="submit" className="submit-btn">
                subscribe
              </button>
            </form>
          </div>
          <div
            className="section-center"
            style={{
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
              marginTop: "50px",
            }}
          ></div>
        </div>
      </Mail>
    </>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: hsl(217, 28%, 21%);
    font-weight: bold;
  }
  padding: 5rem 0;

  background: #b4cfe6;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: hsl(217, 28%, 37%);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: hsl(217, 31%, 67%);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 0.25rem;
    p {
      color: hsl(217, 28%, 29%);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: hsl(217, 31%, 88%);
    color: hsl(217, 28%, 21%);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

const Mail = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: hsl(210, 22%, 49%);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid black;
  }
  .form-input {
    border-right: none;
    border-top-left-radius: 0.25rem
    border-bottom-left-radius: 0.25rem
  }
  .submit-btn {
    border-top-right-radius: 0.25rem
    border-bottom-right-radius: 0.25rem
  }
  .form-input::placeholder {
    color: black
    text-transform: capitalize;
  }
  .submit-btn {
    background: hsl(217, 31%, 52%);
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    color:  black;
  }
  .submit-btn:hover {
    color: #ffff;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0 5rem 0;
  }
`;

export default Contact;
