import React from "react";
import { useTranslation } from "react-i18next";
import {Container, Col, Row, Button } from "react-bootstrap";

import img4 from "../../assets/services/img4.jpeg";

import { useNavigate } from "react-router-dom";

import "./services.css";
import { Helmet } from "react-helmet";
export default function ServiceFour() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cleaning and Moving - Move N Pack</title>
        <link rel="canonical" href="https://movenpack.ch/cleaning-and-moving" />

        {/* Meta Description */}
        {/* <meta
          name="description"
          content="Move N Pack offers professional moving services. Trusted by thousands, movenpack is here to handle all your move needs."
        /> */}

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Cleaning and Moving Move N Pack, Cleaning and Moving movenpack, Cleaning and Moving moven pack, Cleaning and Moving move npack, Cleaning and Moving moving services, Cleaning and Moving professional movers, Cleaning and Moving relocation services"
        />
      </Helmet>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">{t("serviceFour.title")}</h3>
          <h5 className="mt-4">{t("serviceFour.quote")}</h5>
          <p className="mt-4">{t("serviceFour.description")}</p>
        </div>

        <Row className="serviceOne">
          <Col lg={4} xs={12}>
            <img
              className="introImg1 m-3 img-fluid"
              src={img4}
              alt="introImage"
            />
          </Col>
          <Col className="contents ms-lg-5 mt-4" lg={5} xs={12}>
            <h3>
              <b>{t("serviceFour.pointHeader")}</b>
            </h3>
            <p>
              <b>{t("serviceFour.Servoneheader")}</b> {t("serviceFour.ServOne")}
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
      <div className="callToAction">
        <section id="callToAct" className="callToAct section">
          <Container>
            <Row
              className="justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Col xl={10}>
                <div className="getReady text-center">
                  <h3>{t("home.readyToMove")}</h3>
                  <p>{t("home.readyToMoveCont")}</p>
                  <Button
                    className="getStartedBtn col-lg-5 col-12 mb-3"
                    onClick={handleButtonClick}
                  >
                    {t("home.getStarted")}
                  </Button>
                  <p>Or</p>
                  <p>{t("about.call")}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}
