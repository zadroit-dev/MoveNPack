import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./about.css";

import { useNavigate } from "react-router-dom";

import introImg2 from "../../assets/home/introImageOne.jpg";

import aim from "../../assets/about/aim.jpg";
import goals from "../../assets/about/goals.jpeg";
import { Helmet } from "react-helmet";

export default function About() {
  const { t } = useTranslation("global");

  const useCounter = (endValue) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / endValue));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);

        if (start === endValue) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [endValue]);

    return count;
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  const experienceCount = useCounter(20);
  const teamMembersCount = useCounter(15);
  const awardsCount = useCounter(10);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About us - Move N Pack</title>
        <link rel="canonical" href="https://movenpack.ch/about" />

        {/* Meta Description */}
        {/* <meta
          name="description"
          content="Move N Pack offers professional moving services. Trusted by thousands, movenpack is here to handle all your move needs."
        /> */}

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="About Us Move N Pack, About Us movenpack, About Us moven pack, About Us move npack, About Us moving services, About Us professional movers, About Us relocation services"
        />
      </Helmet>

      <div className="aboutUs">
        <div className="contactUsHeader">
          <h3>{t("about.talioredSolutions")}</h3>
          <p>{t("about.description")}</p>
        </div>

        <Row
          className="whoWeAre aboutCont"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Col lg={5} xs={12} className="d-flex justify-content-center">
            <Image
              className="introImg1 img-fluid"
              src={introImg2}
              alt="introImage"
              rounded
            />
          </Col>
          <Col className="contents ms-lg-5" lg={5} xs={12}>
            <h1 className="text-align-center aboutTexts mt-5">
              {t("about.title")}
            </h1>
            <p>{t("about.aboutUsDesc")}</p>

            <section id="stats" className="stats section">
              <Container>
                <Row className="gy-4">
                  <Col lg={3} md={6}>
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-briefcase color-blue flex-shrink-0"></i>
                      <div>
                        <span className="counter me-3">{experienceCount}+</span>
                        <p>{t("about.yearsOfExp")}</p>
                      </div>
                    </div>
                  </Col>

                  <Col lg={3} md={6}>
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-people color-orange flex-shrink-0"></i>
                      <div>
                        <span className="counter me-3">
                          {teamMembersCount}+
                        </span>
                        <p>{t("about.teamMembers")}</p>
                      </div>
                    </div>
                  </Col>

                  <Col lg={3} md={6}>
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-trophy color-green flex-shrink-0"></i>
                      <div>
                        <span className="counter me-3">{awardsCount}+</span>
                        <p>{t("about.awardsOwn")}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>

        <section id="about" className="about section">
          <Container>
            <Row className="gy-4">
              <Col
                lg={5}
                className="aboutTexts text-align-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image src={aim} className="img-fluid rounded-4 mb-5" alt="" />
                <h3>{t("about.aim")}</h3>
                <span>{t("about.mission")}</span>
                <p>{t("about.missionDesc")}</p>
              </Col>
              <Col
                lg={5}
                className="content text-align-center"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="content ps-0 ps-lg-5 mt-5">
                  <h3>{t("about.ourGoals")}</h3>
                  <span>{t("about.companyGoals")}</span>
                  <p>{t("about.goalsDesc")}</p>

                  <div className="position-relative mt-5">
                    <Image src={goals} className="img-fluid rounded-4" alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

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
    </div>
  );
}
