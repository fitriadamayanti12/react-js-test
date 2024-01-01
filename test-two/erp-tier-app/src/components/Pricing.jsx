import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <h1>Choose Your Right Plan!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est
        saepe incidunt magnam sit iusto neque nam sed ratione? Dolores incidunt
        ullam hic soluta iusto veritatis minus quidem eum voluptas. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Repellendus est saepe
        incidunt magnam sit iusto neque nam sed ratione? Dolores incidunt ullam
        hic soluta iusto veritatis minus quidem eum voluptas.
      </p>
      <div>
        <Row>
          <Col md={4}>
            <Card
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "10px",
                backgroundColor: "#B4CFE6",
                height: "90%",
              }}
            >
              <Card.Body className="card-content">
                <Card.Title className="card-title text-center">
                  <h4>Basic Plan</h4>
                </Card.Title>
                <h2>Rp.399.000/month</h2>
                <p>What benefits do you get?</p>
                <ul
                  className="checklist"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Record incoming goods
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Record outgoing goods
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Record profit results
                  </li>
                </ul>
                <div style={{ marginTop: "120px" }}>
                  <Button style={{ color: "#fff", backgroundColor: "#1b3260" }}>
                    Choose Package
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "10px",
                backgroundColor: "#B4CFE6",
                height: "90%",
              }}
            >
              <Card.Body className="card-content">
                <Card.Title className="card-title text-center">
                  <h4>Business Plan</h4>
                </Card.Title>
                <h2>Rp.499.000/month</h2>
                <p>What benefits do you get?</p>

                <ul
                  className="checklist"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Record incoming and outgoing goods
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Record profit results
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Can analyze sales results with CHART
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Support 7x24 Hours
                  </li>
                </ul>
                <div style={{ marginTop: "95px" }}>
                  <Button style={{ color: "#fff", backgroundColor: "#1b3260" }}>
                    Choose Package
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "10px",
                backgroundColor: "#B4CFE6",
                height: "90%",
                borderColor: "#3341EC",
                border: "3px solid #3341EC",
              }}
            >
              <Card.Body className="card-content">
                <Card.Title className="card-title text-center">
                  <h4>Enterpreneur Plan</h4>
                </Card.Title>
                <h2 style={{ color: "#3341EC", fontWeight: "bold" }}>
                  Rp.549.000/month
                </h2>
                <p>What benefits do you get?</p>
                <ul
                  className="checklist"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Record incoming and outgoing goods
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Record profit results
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Can analyze sales results with CHART
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Support 7x24 Hours
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> Export data to Excel
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <FaCheckCircle /> AI Earning prediction
                  </li>
                </ul>
                <div style={{ marginTop: "45px" }}>
                  <Button style={{ color: "#fff", backgroundColor: "#1b3260" }}>
                    Choose Package
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Pricing;
