import React from "react";
import "../styles/Login.css";
import logo from "../assets/login.svg";
import { Col, Container, Form, Row } from "react-bootstrap";

function Login() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="bg-color d-flex justify-content-center align-items-center">
          <img
            src={logo}
            alt="logo"
            fluid
            style={{
              width: "500px",
              height: "500px",
              top: "301px",
              left: "85px",
            }}
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="w-75">
            <h3 className="fw-bold">Login</h3>
            <Form className="mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div class="d-flex justify-content-between">
                  <Form.Label>Email/No Telepon</Form.Label>
                </div>
                <Form.Control
                  type="email"
                  placeholder="Contoh: johndoe@gmail.com"
                  style={{ height: "50px" }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                </div>
                <div className="position-relative">
                  <Form.Control
                    placeholder="Masukkan password"
                    style={{ height: "50px" }}
                    required
                  />
                  <span
                    className=" position-absolute translate-middle-y"
                    style={{
                      // height: "30px",
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      right: "16px",
                      top: "50%",
                    }}
                  ></span>
                </div>
              </Form.Group>
              <button type="submit" className="w-100 login-button">
                Login
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
