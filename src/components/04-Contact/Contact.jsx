import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact.css";
import { useTranslation } from "react-i18next";

import "../01-Home/home.css";

export default function Contact() {
  const { t } = useTranslation("global");

  const [formHeight, setFormHeight] = useState(0);

  useEffect(() => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      setFormHeight(formElement.clientHeight);
    }
  }, []);

  return (
    <div className="contactUs">
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
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="">
                  <i className="bi bi-youtube"></i>
                </a>
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
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Row className="gy-4 mt-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="pb-2">{t("contactUs.name")}</Form.Label>
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
                    <Form.Label className="pb-2">{t("contactUs.email")}</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="email-field"
                      required
                    />
                  </Form.Group>
                </Col>

                {/* <Col md={12}>
                  <Form.Group>
                    <Form.Label className="pb-2">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      id="subject-field"
                      required
                    />
                  </Form.Group>
                </Col> */}

                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="pb-2">{t("contactUs.message")}</Form.Label>
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
                  <Button className="getStartedBtn col-lg-5">{t("contactUs.submit")}</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
