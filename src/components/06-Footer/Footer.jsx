import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

import card1 from "../../assets/cards/card.png";
import card2 from "../../assets/cards/master.png";
import card3 from "../../assets/cards/rupay.png";
import card4 from "../../assets/cards/card4.svg";
import card5 from "../../assets/cards/card5.svg";

export default function Footer() {
  const { t } = useTranslation("global");

  return (
    <footer id="footer" className="footer position-relative light-background">
      <Container className="footer-top">
        <Row className="gy-4">
          <Col lg={5} md={12} className="footer-about">
            <span className="sitename">MoveNPack</span>
            <p>{t("footer.aboutUsCont")}</p>
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
          </Col>

          <Col lg={2} xs={6} className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">{t("nav.home")}</a>
              </li>
              <li>
                <a href="/about">{t("nav.aboutUs")}</a>
              </li>
              <li>
                <a href="/services">{t("nav.services")}</a>
              </li>
              <li>
                <a href="/contact">{t("nav.contactUs")}</a>
              </li>
              <li>
                <a href="/get-a-quote">{t("nav.getAQuote")}</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} xs={6} className="footer-links">
            <h4>{t("home.ourServices")}</h4>
            <ul>
              <li>
                <a href="/moving-and-packing">Moving & Packing</a>
              </li>
              <li>
                <a href="/professional-cleaning">Professional Cleaning</a>
              </li>
              <li>
                <a href="/transport-service">Transport Services</a>
              </li>
              <li>
                <a href="/cleaning-and-moving">Cleaning & Moving</a>
              </li>
            </ul>
          </Col>

          <Col
            lg={3}
            md={12}
            className="footer-contact text-center text-md-start"
          >
            <h4>{t("footer.contact")}</h4>
            <p className="mt-2">
              <strong>{t("footer.mobile")}:</strong>{" "}
              <a href="tel:+41789235590">+41789235590</a>
            </p>
            <p>
              <strong>{t("footer.email")}:</strong>{" "}
              <a href="mailto:info@movenpack.ch?subject=Inquiry from website">
                info@movenpack.ch
              </a>
            </p>
          </Col>

          <Col
            lg={3}
            md={12}
            className="footer-contact text-center text-md-start"
          >
            <h4>We Accept All</h4>
            <p className="mt-2">
              <div className="social-links d-flex mt-4">
                <a>
                  <img src={card1} alt="card1" height={30} width={30} />
                </a>
                <a>
                  <img src={card2} alt="card1" height={30} width={30} />
                </a>
                <a>
                  <img src={card3} alt="card1" height={30} width={30} />
                </a>
              </div>
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="copyright text-center mt-2">
        <p>
          <strong>{t("footer.copyright")}</strong>{" "}
        </p>
      </Container>
    </footer>
  );
}
