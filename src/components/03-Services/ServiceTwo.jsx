import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Col, Row, Button } from "react-bootstrap";

import img2 from "../../assets/services/img3.png";

import { useNavigate } from "react-router-dom";

import "./services.css";
import { Helmet } from "react-helmet";
export default function ServiceTwo() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Professional Cleaning - Move N Pack</title>
        <link rel="canonical" href="https://movenpack.ch/professional-cleaning" />

        {/* Meta Description */}
        {/* <meta
          name="description"
          content="Move N Pack offers professional moving services. Trusted by thousands, movenpack is here to handle all your move needs."
        /> */}

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Professional Cleaning Move N Pack, Professional Cleaning movenpack, Professional Cleaning moven pack, Professional Cleaning move npack, Professional Cleaning moving services, Professional Cleaning professional movers, Professional Cleaning relocation services"
        />
      </Helmet>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">{t("serviceTwo.title")}</h3>
          <h5 className="mt-4">{t("serviceTwo.quote")}</h5>
          <p className="mt-4">{t("serviceTwo.description")}</p>
        </div>

        <Row className="serviceOne">
          <Col lg={4} xs={12}>
            <img
              className="introImg1 m-3 img-fluid"
              src={img2}
              alt="introImage"
            />
          </Col>
          <Col className="contents ms-lg-5 mt-4" lg={5} xs={12}>
            <h3>
              <b>{t("serviceTwo.pointHeader")}</b>
            </h3>
            <p>
              <b>{t("serviceTwo.Servoneheader")}</b> {t("serviceTwo.ServOne")}
            </p>
            <p>
              <b>{t("serviceTwo.ServTwoHeader")}</b> {t("serviceTwo.ServTwo")}
            </p>
            <p>
              <b>{t("serviceTwo.ServThreeHeader")}</b>{" "}
              {t("serviceTwo.ServThree")}
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
