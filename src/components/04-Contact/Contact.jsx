import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./contact.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../01-Home/home.css";
import { Helmet } from "react-helmet";

export default function Contact() {
  const { t } = useTranslation("global");
  const [formHeight, setFormHeight] = useState(0);

  useEffect(() => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      setFormHeight(formElement.clientHeight);
    }
  }, []);

  const socialMediaLinks = [
    { name: "Facebook", iconClass: "bi bi-facebook", url: "#" },
    { name: "Twitter", iconClass: "bi bi-twitter-x", url: "#" },
    { name: "Instagram", iconClass: "bi bi-instagram", url: "#" },
    { name: "LinkedIn", iconClass: "bi bi-linkedin", url: "#" },
    { name: "YouTube", iconClass: "bi bi-youtube", url: "#" },
  ];

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const mailtoLink = `mailto:info@movenpack.ch?subject=Contact Request from ${data.name}&body=
    Dear Movenpack Team,%0D%0A%0D%0A
    I would like to get in touch with you regarding the following:%0D%0A%0D%0A
    Name: ${data.name}%0D%0A
    Email: ${data.email}%0D%0A%0D%0A
    Message:%0D%0A
    ${data.message}%0D%0A%0D%0A
    Please feel free to reach out to me at your earliest convenience.%0D%0A%0D%0A
    Best regards,%0D%0A
    ${data.name}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contactUs">
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
      <div className="contactUsHeader">
        <h3>{t("contactUs.getInTouch")}</h3>
        <p>{t("contactUs.quote")}</p>
      </div>

      <Container className="contactDetails">
        <Row className="gy-4">
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <h3>{t("contactUs.email")}</h3>
              <p>{t("contactUs.query")}</p>
              <h5>{t("contactUs.mailId")}</h5>
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <h3>{t("contactUs.address")}</h3>
              <p>{t("contactUs.workingHrs")}</p>
              <h5>{t("contactUs.workTime")}</h5>
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <h3>{t("contactUs.phone")}</h3>
              <p>{t("contactUs.phoneQ")}</p>
              <h5>{t("contactUs.mobile")}</h5>
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <h3>{t("contactUs.follow")}</h3>
              <div className="social-links d-flex mt-4">
                {socialMediaLinks.map((link, index) => (
                  <OverlayTrigger
                    key={index}
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-${index}`}>{link.name}</Tooltip>
                    }
                  >
                    <a href={link.url}>
                      <i className={link.iconClass}></i>
                    </a>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="contactForm"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Row className="gy-4">
          <Col lg={5}>
            <div className="info-wrap">
              <div className="contactUsForm">
                <h3>{t("contactUs.contactUs")}</h3>
                <p>{t("contactUs.contQuote")}</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d86427.89297594185!2d8.692273!3d47.394937000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa25549505a67%3A0xb239a0b539900189!2sVolketswil%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1724910960759!5m2!1sen!2sin"
                style={{ border: "0", width: "100%", height: formHeight }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          <Col lg={7}>
            <Form
              id="contact-form"
              className="emailForm"
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Row className="gy-4 mt-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="pb-2">
                      {t("contactUs.name")}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      id="name-field"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="pb-2">
                      {t("contactUs.email")}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="email-field"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="pb-2">
                      {t("contactUs.message")}
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={10}
                      id="message-field"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={12} className="text-center">
                  <Button className="getStartedBtn col-lg-5" type="submit">
                    {t("contactUs.submit")}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      <div className="callToAction mt-5 mb-5">
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
