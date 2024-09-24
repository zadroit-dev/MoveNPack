import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  Row,
  Col,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";

import { useNavigate, Link } from "react-router-dom";

import introImg1 from "../../assets/home/introImgOne.jpg";
import introImg2 from "../../assets/home/introImageOne.jpg";
import profile1 from "../../assets/images/images/userImg.jpg";
import profile2 from "../../assets/images/test2.jpg";

import img1 from "../../assets/services/img2.jpeg";
import img2 from "../../assets/services/img3.png";
import img3 from "../../assets/home/transportService.jpg";
import img4 from "../../assets/services/img4.jpeg";

import "./home.css";
import { Helmet } from "react-helmet";

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
      profileImg: profile1,
    },
    {
      key: "home.testimonialTwo",
      author: "Mark Davis",
      profileImg: profile2,
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetFrom: "",
    cityFrom: "",
    roomsFrom: "",
    floorFrom: "",
    streetTo: "",
    cityTo: "",
    roomsTo: "",
    floorTo: "",
    driver: "",
    additional: "",
    materials: "",
    fromDate: "",
    toDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Mailto", formData);

    const mailtoLink = `mailto:info@movenpack.ch?subject=Quote Request from ${formData.firstName} ${formData.lastName}&body=
    Dear Movenpack Team,%0D%0A%0D%0A
    I would like to request a quote for the following move details:%0D%0A%0D%0A
    Client Information:%0D%0A
    - First Name: ${formData.firstName}%0D%0A
    - Last Name: ${formData.lastName}%0D%0A
    - Phone: ${formData.phone}%0D%0A
    - Email: ${formData.email}%0D%0A%0D%0A
    Moving From:%0D%0A
    - Address: ${formData.streetFrom}, ${formData.cityFrom}%0D%0A
    - Rooms: ${formData.roomsFrom}%0D%0A
    - Floor: ${formData.floorFrom}%0D%0A%0D%0A
    Moving To:%0D%0A
    - Address: ${formData.streetTo}, ${formData.cityTo}%0D%0A
    - Rooms: ${formData.roomsTo}%0D%0A
    - Floor: ${formData.floorTo}%0D%0A%0D%0A
    Additional Details:%0D%0A
    - Driver Required: ${formData.driver}%0D%0A
    - Materials Needed: ${formData.materials}%0D%0A
    - Preferred Moving Date: From ${formData.fromDate} to ${formData.toDate}%0D%0A
    - Additional Information: ${formData.additional}%0D%0A%0D%0A
    Message:%0D%0A
    ${formData.message}%0D%0A%0D%0A
    Thank you for considering my request. Please feel free to reach out if you require any additional information.%0D%0A%0D%0A
    Best regards,%0D%0A
    ${formData.firstName} ${formData.lastName}`;

    window.location.href = mailtoLink;
  };

  return (
    <Container fluid className="introContents">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Move N Pack</title>
        <link rel="canonical" href="https://movenpack.ch/" />

        {/* Meta Description */}
        {/* <meta
          name="description"
          content="Move N Pack offers professional moving services. Trusted by thousands, movenpack is here to handle all your move needs."
        /> */}

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Move N Pack, movenpack, moven pack, move npack, moving services, professional movers, relocation services"
        />
      </Helmet>

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
            <Row className="gy-5 serviceIntro">
              <Col
                className="serviceIntroCont"
                xl={5}
                md={6}
                xs={11}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="service-item">
                  <div className="img">
                    <img
                      src={img1}
                      className="img-fluid m-3 homeIntroServImgs"
                      alt="img"
                    />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardOneHeader")}</h3>
                    <p>{t("home.ourServicesCardOneCont")}</p>
                    <Link to="/moving-and-packing">
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
                    <img
                      src={img2}
                      className="img-fluid m-3 homeIntroServImgs"
                      alt="img"
                    />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardTwoHeader")}</h3>
                    <p>{t("home.ourServicesCardTwoCont")}</p>
                    <Link
                      to="/transport-service"
                      style={{ textDecoration: "none" }}
                    >
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
                    <img
                      src={img3}
                      className="img-fluid m-3 homeIntroServImgs"
                      alt="img"
                    />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardThreeHeader")}</h3>
                    <p>{t("home.ourServicesCardThreeCont")}</p>
                    <Link
                      to="/transport-service"
                      style={{ textDecoration: "none" }}
                    >
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
                    <img
                      src={img4}
                      className="img-fluid m-3 homeIntroServImgs"
                      alt="img"
                    />
                  </div>
                  <div className="details position-relative">
                    <h3>{t("home.ourServicesCardFourHeader")}</h3>
                    <p>{t("home.ourServicesCardFourCont")}</p>
                    <Link to="/cleaning-and-moving">
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
                <div className="service-item">
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
                    <h3>{t("faq.title")}</h3>
                    <p>{t("faq.description")}</p>
                  </div>
                </div>

                <div
                  className="col-lg-7"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{t("faq.quesOne")}</Accordion.Header>
                      <Accordion.Body>{t("faq.answerOne")}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>{t("faq.quesTwo")}</Accordion.Header>
                      <Accordion.Body>{t("faq.answerTwo")}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>{t("faq.quesThree")}</Accordion.Header>
                      <Accordion.Body>{t("faq.answerThree")}</Accordion.Body>
                    </Accordion.Item>{" "}
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>{t("faq.quesFour")}</Accordion.Header>
                      <Accordion.Body>{t("faq.answerFour")}</Accordion.Body>
                    </Accordion.Item>{" "}
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>{t("faq.quesFive")}</Accordion.Header>
                      <Accordion.Body>{t("faq.answerFive")}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="homeQuote">
        <Col
          className="quoteDesc"
          lg={7}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Form className="emailForm" onSubmit={handleSubmit}>
            <h3>{t("quote.title")}</h3>
            <p>{t("quote.quoteDesc")}</p>

            <Row className="gy-4 mt-3">
              <Col lg={12}>
                <h4>{t("quote.name")}</h4>
              </Col>
              <Col md={6}>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder={t("quote.first")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={6}>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder={t("quote.last")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={6}>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder={t("quote.phone")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={6}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={t("quote.email")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col lg={12}>
                <h4>{t("quote.from")}</h4>
              </Col>

              <Col md={3}>
                <Form.Control
                  type="text"
                  name="streetFrom"
                  placeholder={t("quote.from")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  type="text"
                  name="cityFrom"
                  placeholder={t("quote.post")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  type="number"
                  name="roomsFrom"
                  placeholder={t("quote.rooms")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Form.Select
                  name="floorFrom"
                  required
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
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

              <Col lg={12}>
                <h4>{t("quote.to")}</h4>
              </Col>

              <Col md={3}>
                <Form.Control
                  type="text"
                  name="streetTo"
                  placeholder={t("quote.from")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  type="text"
                  name="cityTo"
                  placeholder={t("quote.post")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  type="number"
                  name="roomsTo"
                  placeholder={t("quote.rooms")}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Form.Select
                  name="floorTo"
                  required
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                <h4>{t("quote.fromDate")}</h4>
                <Form.Control
                  className="mt-4"
                  type="dateTime-local"
                  name="fromDate"
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={6}>
                <h4>{t("quote.toDate")}</h4>
                <Form.Control
                  className="mt-4"
                  type="dateTime-local"
                  name="toDate"
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col lg={12}>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder={t("quote.message")}
                  onChange={handleChange}
                />
              </Col>

              <Col lg={12} className="text-center submitBtn">
                <Button
                  className="getStartedBtn"
                  type="submit"
                  style={{
                    background: "#f76c45",
                    borderColor: "#f76c45",
                    color: "white",
                  }}
                >
                  {t("quote.submit")}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </div>
    </Container>
  );
}
