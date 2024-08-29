import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Button } from "react-bootstrap";

import introImg1 from "../../assets/home/introImgOne.jpg";
import { useNavigate, Link } from "react-router-dom";


import "./services.css";
export default function ServiceTwo() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  return (
    <div>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">Professional Cleaning Services</h3>
          <h5 className="mt-4">“Sparkling Clean, Every Time”</h5>
          <p className="mt-4">
            A clean space is essential for comfort and well-being. Our
            professional cleaning services are designed to meet the highest
            standards, providing a thorough and meticulous cleaning for your
            home or office.
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
              <b>Our services include:</b>
            </h3>
            <p>
              <b>Regular Cleaning:</b> Keep your space consistently clean and
              fresh with our scheduled cleaning services. Perfect for
              maintaining a healthy environment
            </p>
            <p>
              <b>Deep Cleaning:</b> Our in-depth cleaning service targets every
              corner of your property, addressing hard-to-reach areas and
              eliminating grime and allergens
            </p>
            <p>
              From carpet and upholstery to windows and appliances, our
              specialized cleaning services ensure that every part of your
              property is pristine
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
