import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Button } from "react-bootstrap";

import introImg1 from "../../assets/home/introImgOne.jpg";

import { useNavigate, Link } from "react-router-dom";

import "./services.css";
export default function ServiceFour() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  return (
    <div>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">Service content for Transport Services:</h3>
          <h5 className="mt-4">
            “Your Trusted Partner in Transport Services ”
          </h5>
          <p className="mt-4">
            At MoveNpack, we specialize in providing top-tier transportation
            solutions tailored to meet the diverse needs of our clients. Whether
            you're looking to move goods, people or anything in between our
            comprehensive services ensure that your journey is smooth, safe and
            efficient.
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
              <b>Ready to experience hassle-free transport services? :</b>{" "}
              Contact us today to book your service or learn more about what we
              offer.
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
