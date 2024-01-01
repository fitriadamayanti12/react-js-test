import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="container bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <h3 style={{ fontWeight: "bold" }}>ERP</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <CustomScrollLink to="about-section" smooth={true} duration={500}>
              ABOUT
            </CustomScrollLink>
            <CustomScrollLink to="pricing-section" smooth={true} duration={500}>
              PRICING
            </CustomScrollLink>
            <CustomScrollLink to="contact-section" smooth={true} duration={500}>
              CONTACT
            </CustomScrollLink>
          </Nav>
          <Link to={"/login"}>
            <Button style={{ backgroundColor: "#1b3260" }}>Login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const CustomScrollLink = styled(ScrollLink)`
  margin: 0 10px;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export default NavScrollExample;
