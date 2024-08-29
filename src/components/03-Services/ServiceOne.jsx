import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Button } from "react-bootstrap";

import introImg1 from "../../assets/home/introImgOne.jpg";

import { useNavigate, Link } from "react-router-dom";

import "./services.css";
export default function ServiceOne() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };
  return (
    <div>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">Moving and Packing</h3>
          <h5 className="mt-4">“Smooth Transitions, Every Time”</h5>
          <p className="mt-4">
            Moving can be a stressful experience, but with our expert moving and
            packing services, you can relax and leave the heavy lifting to us.
            Our team is dedicated to ensure your belongings are handled with
            care and arrive at your new location safely.
          </p>
        </div>

        <Row className="serviceOne">
          <Col lg={4} xs={12}>
            <img
              className="introImg1 m-3 img-fluid"
              src={introImg1}
              alt="introImage"
            />
          </Col>
          <Col className="contents ms-lg-5 mt-4" lg={5} xs={12}>
            <h3>
              <b>Our Specialization:</b>
            </h3>
            <p>
              <b>Comprehensive Packing Services:</b> Our professional packers
              use high-quality materials to protect your items.
            </p>
            <p>
              <b>Efficient Moving Solutions:</b> Whether it's a local move or a
              long-distance relocation, our experienced movers will manage every
              aspect of your move efficiently and precisely.
            </p>
            <p>
              <b>Secure Transportation:</b> Our modern trucks are equipped to
              transport your belongings safely and securely, minimizing any risk
              of damage.
            </p>
            <Button
              className="getStartedBtn col-lg-5 col-12 mb-3"
              onClick={handleButtonClick}
            >
              {t("home.getStarted")}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
