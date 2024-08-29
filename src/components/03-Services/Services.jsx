import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container, Card } from "react-bootstrap";

import img1 from "../../assets/services/img1.jpeg";
import img2 from "../../assets/services/img2.jpeg";
import img3 from "../../assets/services/img3.png";
import img4 from "../../assets/services/img4.jpeg";
import img5 from "../../assets/services/img5.jpg";
import img6 from "../../assets/services/img6.jpg";
import img7 from "../../assets/services/img7.jpg";
import img8 from "../../assets/services/img8.jpg";


import "./services.css";

export default function Services() {
  const { t } = useTranslation("global");



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
            <div className="section-title" data-aos="fade-up">
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
                  <Card className="post-card">
                    <Card.Img variant="top" src={post.img} />
                    <Card.Body>
                      <Card.Title>{t(post.titleKey)}</Card.Title>
                      <div className="d-flex align-items-center mt-2">
                        <div className="post-meta ms-2">
                          <p className="post-value">{t(post.value)}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
      </div>
    </div>
  );
}
