import React, { useEffect, useState } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import introImg2 from "../../assets/home/introImgTwo.jpg";
import introImg1 from "../../assets/home/introImgOne.jpg";
import { useTranslation } from "react-i18next";
import "./about.css";

import aim from "../../assets/about/aim.jpg";
import goals from "../../assets/about/goals.jpeg";

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

  const experienceCount = useCounter(20);
  const teamMembersCount = useCounter(15);
  const awardsCount = useCounter(10);

  return (
    <div>
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
          <Col lg={5} xs={12}>
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

            <section id="stats" className="stats section light-background">
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
      </div>
    </div>
  );
}
