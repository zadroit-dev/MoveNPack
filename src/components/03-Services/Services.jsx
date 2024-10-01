import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Row, Col, Container, Card } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import img1 from "../../assets/services/img1.jpeg";
import img2 from "../../assets/services/service2.jpg";
import img3 from "../../assets/services/img3.png";
import img4 from "../../assets/services/img4.jpeg";
import img5 from "../../assets/services/img5.jpg";
import img6 from "../../assets/services/service6.jpg";
import img7 from "../../assets/services/service7.jpg";
import img8 from "../../assets/services/service8.jpg";

import "./services.css";
import { Helmet } from "react-helmet";

export default function Services() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  const posts = [
    {
      img: img1,
      titleKey: "services.one.key",
      value: "services.one.value",
      delay: 100,
    },
    {
      img: img2,
      titleKey: "services.two.key",
      value: "services.two.value",
      delay: 200,
    },
    {
      img: img3,
      titleKey: "services.three.key",
      value: "services.three.value",
      delay: 300,
    },
    {
      img: img4,
      titleKey: "services.four.key",
      value: "services.four.value",
      delay: 400,
    },
    {
      img: img5,
      titleKey: "services.five.key",
      value: "services.five.value",
      delay: 500,
    },
    {
      img: img6,
      titleKey: "services.six.key",
      value: "services.six.value",
      delay: 600,
    },
    {
      img: img7,
      titleKey: "services.seven.key",
      value: "services.seven.value",
      delay: 700,
    },
    {
      img: img8,
      titleKey: "services.eight.key",
      value: "services.eight.value",
      delay: 800,
    },
  ];

  return (
    <div className="serviceContents">
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
      <div className="services">
        <div className="contactUsHeader">
          <h3>{t("services.tailoredMovingSoln")}</h3>
          <p>{t("services.tailoredCont")}</p>
        </div>

        <Container className="mt-5 service">
          <Row className="gy-4">
            <Col lg={4} md={6} xs={12} data-aos="fade-up" data-aos-delay="100">
              <Card className="service-item position-relative">
                <Card.Body>
                  <div className="icon">
                    <p>01.</p>
                  </div>
                  <Card.Title>{t("home.reasonOneHeader")}</Card.Title>
                  <Card.Text>{t("home.reasonOne")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} data-aos="fade-up" data-aos-delay="200">
              <Card className="service-item position-relative">
                <Card.Body>
                  <div className="icon">
                    <p>02.</p>
                  </div>
                  <Card.Title>{t("home.reasonTwoHeader")}</Card.Title>
                  <Card.Text>{t("home.reasonTwo")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} data-aos="fade-up" data-aos-delay="300">
              <Card className="service-item position-relative">
                <Card.Body>
                  <div className="icon">
                    <p>03.</p>
                  </div>
                  <Card.Title>{t("home.reasonThreeHeader")}</Card.Title>
                  <Card.Text>{t("home.reasonThree")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <section id="recent-posts" className="recent-posts section mt-5 mb-5">
            <div className="section-title mt-5" data-aos="fade-up">
              <h2>{t("services.title")}</h2>
            </div>

            <Row className="mt-5 justify-content-start">
              {posts.map((post, index) => (
                <Col
                  xl={4}
                  md={6}
                  className="mt-5"
                  data-aos="fade-up"
                  data-aos-delay={post.delay}
                  key={index}
                >
                  <Card className="post-card service-item p-0">
                    <Card.Img
                      variant="top"
                      className="serviceImages"
                      src={post.img}
                    />
                    <Card.Body>
                      <Card.Title>{t(post.titleKey)}</Card.Title>
                      <div className="d-flex align-items-center mt-2 mb-3">
                        <div className="post-meta mt-3">
                          <span className="post-value">{t(post.value)}</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>

        <div className="callToAction mt-5">
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
    </div>
  );
}
