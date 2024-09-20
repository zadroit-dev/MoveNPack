import { useTranslation } from "react-i18next";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./footer.css";

import card1 from "../../assets/cards/card.png";
import card2 from "../../assets/cards/master.png";
import card3 from "../../assets/cards/rupay.png";

export default function Footer() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const socialMediaLinks = [
    { name: "Facebook", iconClass: "bi bi-facebook", url: "#" },
    { name: "Twitter", iconClass: "bi bi-twitter-x", url: "#" },
    { name: "Instagram", iconClass: "bi bi-instagram", url: "#" },
    // { name: "LinkedIn", iconClass: "bi bi-linkedin", url: "#" },
    // { name: "YouTube", iconClass: "bi bi-youtube", url: "#" },
  ];

  return (
    <footer id="footer" className="footer position-relative light-background">
      <Container className="footer-top">
        <Row className="gy-4">
          <Col lg={5} md={12} className="footer-about">
            <span className="sitename">MoveNPack</span>
            <h3>{t("footer.address")}</h3>
            <p>{t("footer.aboutUsCont")}</p>
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
          </Col>

          <Col lg={2} xs={6} className="footer-links">
            <h4>{t("footer.useFulLink")}</h4>
            <ul>
              <li>
                <span onClick={() => handleNavigate("/")}>{t("nav.home")}</span>
              </li>
              <li>
                <span onClick={() => handleNavigate("/about")}>
                  {t("nav.aboutUs")}
                </span>
              </li>
              <li>
                <span onClick={() => handleNavigate("/services")}>
                  {t("nav.services")}
                </span>
              </li>
              <li>
                <span onClick={() => handleNavigate("/contact")}>
                  {t("nav.contactUs")}
                </span>
              </li>
              <li>
                <span onClick={() => handleNavigate("/get-a-quote")}>
                  {t("nav.getAQuote")}
                </span>
              </li>
            </ul>
          </Col>

          <Col lg={2} xs={6} className="footer-links">
            <h4>{t("home.ourServices")}</h4>
            <ul>
              <li>
                <span onClick={() => handleNavigate("/moving-and-packing")}>
                  {t("footer.moveNPack")}
                </span>
              </li>
              <li>
                <span onClick={() => handleNavigate("/professional-cleaning")}>
                  {t("footer.professionalClean")}
                </span>
              </li>
              <li>
                <span onClick={() => handleNavigate("/transport-service")}>
                  {t("footer.transportService")}
                </span>
              </li>
              <li>
                <span onClick={() => handleNavigate("/cleaning-and-moving")}>
                  {t("footer.cleaningNMov")}
                </span>
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

            <Col
              lg={12}
              md={12}
              className="footer-contact text-center text-md-start mt-5"
            >
              <h4>We Accept All</h4>
              <div className="social-links d-flex mt-2">
                <a>
                  <img src={card1} alt="card1" height={30} width={30} />
                </a>
                <a>
                  <img src={card2} alt="card2" height={30} width={30} />
                </a>
                <a>
                  <img src={card3} alt="card3" height={30} width={30} />
                </a>
              </div>
            </Col>
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
