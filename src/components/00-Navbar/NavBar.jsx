import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./navbar.css";
import Spinners from "../../pages/Spinner/Spinners";

import german from "../../assets/icons/german.png";
import english from "../../assets/icons/english.png";

export default function NavBar() {
  const { t, i18n } = useTranslation("global");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleChangeLang = (lang) => {
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setLoading(false);
      setIsExpanded(false);
    }, 1500);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsExpanded(false);
  };

  const currentLang = i18n.language;
  const languageIcon = currentLang === "en" ? english : german;

  const socialMediaLinks = [
    { name: "Facebook", iconClass: "bi bi-facebook", url: "#" },
    { name: "Twitter", iconClass: "bi bi-twitter-x", url: "#" },
    { name: "Instagram", iconClass: "bi bi-instagram", url: "#" },
  ];

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Text>
            <a
              href="tel:+41789235590"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              {t("about.call")}
            </a>
          </Navbar.Text>
          <Navbar.Text>
            {" "}
            <div className="social-links d-flex">
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
          </Navbar.Text>
        </Container>
      </Navbar>
      {loading && <Spinners />}
      <Navbar expand="lg" fixed="top" expanded={isExpanded}>
        <Container>
          <Navbar.Brand onClick={() => handleNavClick("/")}>
            <img
              alt="MoveNPack Logo"
              src={logo}
              width="95"
              height="95"
              className="logo me-3"
            />
            MoveNPack
          </Navbar.Brand>
          <Button
            variant="outline-danger"
            onClick={() => handleNavClick("/get-a-quote")}
            className="d-lg-none"
          >
            {t("nav.getAQuote")}
          </Button>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="me-5" onClick={() => handleNavClick("/")}>
                {t("nav.home")}
              </Nav.Link>
              <div className="nav-divider d-lg-none"></div>
              <Nav.Link
                className="me-5"
                onClick={() => handleNavClick("/about")}
              >
                {t("nav.aboutUs")}
              </Nav.Link>
              <div className="nav-divider d-lg-none"></div>
              <NavDropdown
                className="me-5 nav-dropdown"
                title={t("nav.services")}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => handleNavClick("/services")}>
                  {t("home.ourServices")}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => handleNavClick("/moving-and-packing")}
                >
                  {t("footer.moveNPack")}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => handleNavClick("/professional-cleaning")}
                >
                  {t("footer.professionalClean")}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => handleNavClick("/transport-service")}
                >
                  {t("footer.transportService")}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => handleNavClick("/cleaning-and-moving")}
                >
                  {t("footer.cleaningNMov")}
                </NavDropdown.Item>
              </NavDropdown>
              <div className="nav-divider d-lg-none"></div>
              <Nav.Link
                className="me-5"
                onClick={() => handleNavClick("/contact")}
              >
                {t("nav.contactUs")}
              </Nav.Link>
              <Nav.Link
                href="#translate"
                className="me-5"
                onClick={(e) => {
                  e.preventDefault();
                  const newLang = currentLang === "en" ? "de" : "en";
                  handleChangeLang(newLang);
                }}
              >
                <img
                  src={languageIcon}
                  alt="translate"
                  height={30}
                  width={30}
                />
              </Nav.Link>
            </Nav>
            <Button
              variant="outline-danger"
              onClick={() => handleNavClick("/get-a-quote")}
              className="d-none d-lg-block"
            >
              {t("nav.getAQuote")}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
