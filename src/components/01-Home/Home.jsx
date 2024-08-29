import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Card, Button, Form, Container } from "react-bootstrap";

import { useNavigate, Link } from "react-router-dom";

import introImg1 from "../../assets/home/introImgOne.jpg";
import introImg2 from "../../assets/home/introImgTwo.jpg";
import profile from "../../assets/images/images/userImg.jpg";

import "./home.css";

export default function Home() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  const testimonials = [
    {
      key: "home.testimonialOne",
      author: "Eric Johnson",
      profileImg: profile,
    },
    {
      key: "home.testimonialTwo",
      author: "Anna Smith",
      profileImg: profile,
    },
  ];

  return (
    <Container fluid className="introContents">
      <Row className="intro">
        <Col className="contents" lg={5} xs={12}>
          <h3>{t("home.welcomeMessage")}</h3>
          <h5>{t("home.welcomeMessageSub")}</h5>
          <Button
            className="getStartedBtn col-lg-5 col-12"
            onClick={handleButtonClick}
          >
            {t("home.getStarted")}
          </Button>
        </Col>
        <Col lg={4} xs={12} className="introImages">
          <img
            className="introImg1 mt-4 img-fluid"
            src={introImg1}
            alt="introImage"
          />
        </Col>
      </Row>

      <Row className="whoWeAre">
        <Col lg={4} xs={12}>
          <img
            className="introImg1 m-3 img-fluid"
            src={introImg2}
            alt="introImage"
          />
        </Col>
        <Col className="contents ms-lg-5 mt-4" lg={5} xs={12}>
          <h1>{t("home.whoWeAre")}</h1>
          <p>{t("home.aboutWhoWeAreOne")}</p>
          <p>
            <b>{t("home.aboutWhoWeAreTwo")}</b>
          </p>
          <p>{t("home.aboutWhoWeAreThree")}</p>
          <p>{t("home.aboutWhoWeAreFour")}</p>
        </Col>
      </Row>

      <Row className="services">
        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>{t("home.ourServices")}</h2>
            <p className="mb-5 mt-3">{t("home.aboutOurServices")}</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <Row className="gy-5">
              <Col
                xl={5}
                md={6}
                xs={11}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="service-item">
                  <div className="img">
                    <img src={introImg1} className="img-fluid m-3" alt="img" />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardOneHeader")}</h3>
                    <p>{t("home.ourServicesCardOneCont")}</p>
                    <Link to="/services">
                      <h5 className="mt-3">{t("home.readmore")}</h5>
                    </Link>{" "}
                  </div>
                </div>
              </Col>

              <Col
                xl={5}
                md={6}
                xs={11}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="service-item">
                  <div className="img">
                    <img src={introImg1} className="img-fluid m-3" alt="img" />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardTwoHeader")}</h3>
                    <p>{t("home.ourServicesCardTwoCont")}</p>
                    <Link to="/services">
                      <h5 className="mt-3">{t("home.readmore")}</h5>
                    </Link>{" "}
                  </div>
                </div>
              </Col>

              <Col
                xl={5}
                md={6}
                xs={11}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="service-item">
                  <div className="img">
                    <img src={introImg1} className="img-fluid m-3" alt="img" />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardThreeHeader")}</h3>
                    <p>{t("home.ourServicesCardThreeCont")}</p>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                      <h5 className="mt-3">{t("home.readmore")}</h5>
                    </Link>{" "}
                  </div>
                </div>
              </Col>

              <Col
                xl={5}
                md={6}
                xs={11}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="service-item">
                  <div className="img">
                    <img src={introImg1} className="img-fluid m-3" alt="img" />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardFourHeader")}</h3>
                    <p>{t("home.ourServicesCardFourCont")}</p>
                    <Link to="/services">
                      <h5 className="mt-3">{t("home.readmore")}</h5>
                    </Link>{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Row>

      <div className="callToAction">
        <section
          id="call-to-action"
          className="call-to-action section dark-background"
        >
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

      <section className="testimonials py-5">
        <Container>
          <h3>{t("home.clientTestimonials")}</h3>
          <p>{t("home.testimonialDesc")}</p>
          <Row className="justify-content-center mt-5">
            {testimonials.map((testimonial, index) => (
              <Col
                lg={5}
                key={index}
                className="d-flex justify-content-center mb-5"
              >
                <Card className="testimonial-card">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={testimonial.profileImg}
                        alt="profile"
                        height={60}
                        width={60}
                        className="me-3 rounded-circle img-fluid"
                      />
                      <Card.Text>{t(testimonial.key)}</Card.Text>
                    </div>
                    <Card.Footer>
                      <p className="mb-0">{testimonial.author}</p>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div className="whyChooseUs">
        <section id="services" className="services section">
          <Container className="section-title" data-aos="fade-up">
            <h2>{t("home.whyChooseUs")}</h2>
            <p>{t("home.whyChooseUsDesc")} </p>
          </Container>

          <Container className="mt-5">
            <Row className="gy-4">
              <Col
                lg={4}
                md={6}
                xs={12}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item  position-relative">
                  <div className="icon">
                    <p>01.</p>
                  </div>
                  <h3>{t("home.reasonOneHeader")}</h3>
                  <p>{t("home.reasonOne")}</p>
                </div>
              </Col>

              <Col
                lg={4}
                md={6}
                xs={12}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <p>02.</p>
                  </div>
                  <h3>{t("home.reasonTwoHeader")}</h3>
                  <p>{t("home.reasonTwo")}</p>
                </div>
              </Col>

              <Col
                lg={4}
                md={6}
                xs={12}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <p>03.</p>
                  </div>
                  <h3>{t("home.reasonThreeHeader")}</h3>
                  <p>{t("home.reasonThree")}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <section className="faqItems">
        <div className="questions">
          <section id="faq" className="faq section">
            <div className="container">
              <div className="row gy-4">
                <div
                  className="col-lg-4 faqHeader"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="content px-xl-5">
                    <h3>
                      <span>Frequently Asked </span>
                      <strong>Questions</strong>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="faq-container">
                    <div className="faq-item faq-active">
                      <h3>
                        <span className="num">1.</span>{" "}
                        <span>
                          Non consectetur a erat nam at lectus urna duis?
                        </span>
                      </h3>
                      <div className="faq-content">
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis
                          urna id volutpat lacus laoreet non curabitur gravida.
                          Venenatis lectus magna fringilla urna porttitor
                          rhoncus dolor purus non.
                        </p>
                      </div>
                      <i className="faq-toggle bi bi-chevron-right"></i>
                    </div>

                    <div className="faq-item">
                      <h3>
                        <span className="num">2.</span>{" "}
                        <span>
                          Feugiat scelerisque varius morbi enim nunc faucibus a
                          pellentesque?
                        </span>
                      </h3>
                      <div className="faq-content">
                        <p>
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque habitant morbi. Id interdum velit laoreet
                          id donec ultrices. Fringilla phasellus faucibus
                          scelerisque eleifend donec pretium. Est pellentesque
                          elit ullamcorper dignissim. Mauris ultrices eros in
                          cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                      <i className="faq-toggle bi bi-chevron-right"></i>
                    </div>

                    <div className="faq-item">
                      <h3>
                        <span className="num">3.</span>{" "}
                        <span>
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque?
                        </span>
                      </h3>
                      <div className="faq-content">
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                      <i className="faq-toggle bi bi-chevron-right"></i>
                    </div>

                    <div className="faq-item">
                      <h3>
                        <span className="num">4.</span>{" "}
                        <span>
                          Ac odio tempor orci dapibus. Aliquam eleifend mi in
                          nulla?
                        </span>
                      </h3>
                      <div className="faq-content">
                        <p>
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque habitant morbi. Id interdum velit laoreet
                          id donec ultrices. Fringilla phasellus faucibus
                          scelerisque eleifend donec pretium. Est pellentesque
                          elit ullamcorper dignissim. Mauris ultrices eros in
                          cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                      <i className="faq-toggle bi bi-chevron-right"></i>
                    </div>

                    <div className="faq-item">
                      <h3>
                        <span className="num">5.</span>{" "}
                        <span>
                          Tempus quam pellentesque nec nam aliquam sem et tortor
                          consequat?
                        </span>
                      </h3>
                      <div className="faq-content">
                        <p>
                          Molestie a iaculis at erat pellentesque adipiscing
                          commodo. Dignissim suspendisse in est ante in. Nunc
                          vel risus commodo viverra maecenas accumsan. Sit amet
                          nisl suscipit adipiscing bibendum est. Purus gravida
                          quis blandit turpis cursus in
                        </p>
                      </div>
                      <i className="faq-toggle bi bi-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="homeQuote">
        <Col className="quoteDesc" lg={7} data-aos="fade-up" data-aos-delay="200">
          <Form className="emailForm">
            <h3>Get a quote</h3>
            <p>
              Request a detailed quote in few minutes. Provide accurate details
              for a personalized, free, and no-obligation offer. Every detail
              matters to help us create the perfect quote for you. We’ll respond
              quickly.
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
                  {Object.keys(t("quoteOptions", { returnObjects: true })).map(
                    (key) => (
                      <option key={key} value={key}>
                        {t(`quoteOptions.${key}`)}
                      </option>
                    )
                  )}
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
                  {Object.keys(t("quoteOptions", { returnObjects: true })).map(
                    (key) => (
                      <option key={key} value={key}>
                        {t(`quoteOptions.${key}`)}
                      </option>
                    )
                  )}
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
      </div>
    </Container>
  );
}
