import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./quote.css";
import quoteBg from "../../assets/images/quote-bg.jpg";

export default function Quote() {
  const { t } = useTranslation("global");

  return (
    <div className="getAQuote">
      <section id="get-a-quote" className="get-a-quote section">
        <Container>
          <Row className="g-0" data-aos="fade-up" data-aos-delay="100">
            <Col
              lg={5}
              className="quote-bg"
              style={{ backgroundImage: `url(${quoteBg})` }}
            ></Col>

            <Col lg={7} data-aos="fade-up" data-aos-delay="200">
              <Form className="emailForm">
                <h3>Get a quote</h3>
                <p>
                  Request a detailed quote in few minutes. Provide accurate
                  details for a personalized, free, and no-obligation offer.
                  Every detail matters to help us create the perfect quote for
                  you. We’ll respond quickly.
                </p>

                <Row className="gy-4 mt-3">
                  <Col lg={12}>
                    <h4>Details</h4>
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="First Name"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Last Name"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </Col>

                  <Col lg={12}>
                    <h4>Address</h4>
                  </Col>

                  <h4>From</h4>

                  <Col md={3}>
                    <Form.Control
                      type="text"
                      name="street"
                      placeholder="Street / No."
                      required
                    />
                  </Col>

                  <Col md={3}>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="Postcode / City"
                      required
                    />
                  </Col>

                  <Col md={3}>
                    <Form.Control
                      type="text"
                      name="rooms"
                      placeholder="Number of Rooms"
                      required
                    />
                  </Col>

                  <Col md={3}>
                    <Form.Select
                      name="floor"
                      required
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("quote.floor")}
                      </option>
                      {Object.keys(
                        t("quoteOptions", { returnObjects: true })
                      ).map((key) => (
                        <option key={key} value={key}>
                          {t(`quoteOptions.${key}`)}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <h4>To</h4>

                  <Col md={3}>
                    <Form.Control
                      type="text"
                      name="street"
                      placeholder="Street / No."
                      required
                    />
                  </Col>

                  <Col md={3}>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="Postcode / City"
                      required
                    />
                  </Col>

                  <Col md={3}>
                    <Form.Control
                      type="text"
                      name="rooms"
                      placeholder="Number of Rooms"
                      required
                    />
                  </Col>

                  <Col md={3}>
                    <Form.Select
                      name="floor"
                      required
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("quote.floor")}
                      </option>
                      {Object.keys(
                        t("quoteOptions", { returnObjects: true })
                      ).map((key) => (
                        <option key={key} value={key}>
                          {t(`quoteOptions.${key}`)}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>

                  <Col md={4}>
                    <Form.Select
                      name="driver"
                      required
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("quote.driver")}
                      </option>
                      {Object.keys(t("quoteOpt", { returnObjects: true })).map(
                        (key) => (
                          <option key={key} value={key}>
                            {t(`quoteOpt.${key}`)}
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Col>

                  <Col md={4}>
                    <Form.Select
                      name="additional"
                      required
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("quote.additional")}
                      </option>
                      {Object.keys(t("quoteOpt", { returnObjects: true })).map(
                        (key) => (
                          <option key={key} value={key}>
                            {t(`quoteOpt.${key}`)}
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Col>

                  <Col md={4}>
                    <Form.Select
                      name="materials"
                      required
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("quote.materials")}
                      </option>
                      {Object.keys(t("quoteOpt", { returnObjects: true })).map(
                        (key) => (
                          <option key={key} value={key}>
                            {t(`quoteOpt.${key}`)}
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Col>

                  <Col md={6}>
                    <h4>From Date of Services</h4>
                    <Form.Control
                    className="mt-4"
                      type="datetime-local"
                      name="fromDate"
                      placeholder="Select date and time"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <h4>To Date of Services</h4>
                    <Form.Control
                    className="mt-4"
                      type="datetime-local"
                      name="toDate"
                      placeholder="Select date and time"
                      required
                    />
                  </Col>

                  <Col lg={12}>
                    <h4>Your Message</h4>
                  </Col>
                  <Col xs={12}>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    />
                  </Col>

                  <Col xs={12} className="text-center">
                    <Button className="getStartedBtn" lg={5}>
                      Get A Quote
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
