import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row, Button } from "react-bootstrap";

import img1 from "../../assets/services/img2.jpeg";

import { useNavigate } from "react-router-dom";

import "./services.css";
import { Helmet } from "react-helmet";
export default function ServiceOne() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MoveNpack: Trusted Professional Cleaning in Switzerland</title>
        <link rel="canonical" href="https://movenpack.ch/about" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover Movenpack's professional cleaning services, seamless residential moves, and expert furniture assembly in Zurich, Switzerland. Your move made easy!"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="moving services, professional movers, relocation services, professional cleaning services, residential moves, Zurich Switzerland, furniture assembly"
        />
      </Helmet>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">{t("serviceOne.title")}</h3>
          <h5 className="mt-4">{t("serviceOne.quote")}</h5>
          <p className="mt-4">{t("serviceOne.description")}</p>
        </div>

        <Row className="serviceOne">
          <Col lg={4} xs={12}>
            <img
              className="introImg1 m-3 img-fluid"
              src={img1}
              alt="introImage"
            />
          </Col>
          <Col className="contents ms-lg-5 mt-4" lg={5} xs={12}>
            <h3>
              <b>{t("serviceOne.pointHeader")}</b>
            </h3>
            <p>
              <b>{t("serviceOne.ServOneHeader")}</b> {t("serviceOne.ServOne")}
            </p>
            <p>
              <b>{t("serviceOne.ServTwoHeader")}</b> {t("serviceOne.ServTwo")}
            </p>{" "}
            <p>
              <b>{t("serviceOne.ServThreeHeader")}</b>{" "}
              {t("serviceOne.ServThree")}
            </p>{" "}
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
