import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Button } from "react-bootstrap";

import introImg1 from "../../assets/home/introImgOne.jpg";
import { useNavigate, Link } from "react-router-dom";


import "./services.css";
export default function ServiceThree() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  return (
    <div>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">Cleaning and Moving Services:</h3>
          <h5 className="mt-4">“The Best of Both Worlds”</h5>
          <p className="mt-4">
            For those who want the convenience of combining moving and cleaning
            services, we offer a seamless solution that takes care of everything
            in one go. Our integrated cleaning and moving services include:
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
              <b>Pre-Move Cleaning:</b> Before you move out, let us handle the
              cleaning to ensure your old place is left spotless.
            </p>
            <p>
              <b>Post-Move Cleaning:</b> Once you’re settled in, our team will
              give your new home a thorough clean to make it move-in ready.
            </p>
            <p>
              <b>Move-In/Out Packages:</b> : Choose our comprehensive packages
              that cover both moving and cleaning to streamline your transition
              and give you peace of mind.
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
