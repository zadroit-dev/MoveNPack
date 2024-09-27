import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./quote.css";
import quoteBg from "../../assets/images/quote-bg.jpg";
import { Helmet } from "react-helmet";

export default function Quote() {
  const { t } = useTranslation("global");

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
    <div className="getAQuote">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Get a Quote - Move N Pack</title>
        <link rel="canonical" href="https://movenpack.ch/get-a-quote" />

        {/* Meta Description */}
        {/* <meta
          name="description"
          content="Move N Pack offers professional moving services. Trusted by thousands, movenpack is here to handle all your move needs."
        /> */}

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Get a Quote Move N Pack, Get a Quote movenpack, Get a Quote moven pack, Get a Quote move npack, Get a Quote moving services, Get a Quote professional movers, Get a Quote relocation services"
        />
      </Helmet>
      <section id="get-a-quote" className="get-a-quote section">
        <Container>
          <Row className="g-0" data-aos="fade-up" data-aos-delay="100">
            <Col
              lg={5}
              className="quote-bg"
              style={{ backgroundImage: `url(${quoteBg})` }}
            ></Col>

            <Col lg={7} data-aos="fade-up" data-aos-delay="200">
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
                      {Object.keys(
                        t("quoteOptions", { returnObjects: true })
                      ).map((key) => (
                        <option key={key} value={key}>
                          {t(`quoteOptions.${key}`)}
                        </option>
                      ))}
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
          </Row>
        </Container>
      </section>
    </div>
  );
}
