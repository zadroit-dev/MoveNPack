import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../../assets/logo/logo.png";
import "./navbar.css";
import Spinners from "../../pages/Spinner/Spinners";

import german from "../../assets/icons/german.png";
import english from "../../assets/icons/english.png";

export default function NavBar() {
  const { t, i18n } = useTranslation("global");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChangeLang = (lang) => {
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setLoading(false);
      setIsExpanded(false);
    }, 1500);
  };

  const currentLang = i18n.language;
  const languageIcon = currentLang === "en" ? english : german;

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Text>{t("about.call")}</Navbar.Text>
          <Navbar.Text>
            {" "}
            <div className="social-links d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Navbar.Text>
        </Container>
      </Navbar>
      {loading && <Spinners />}
      <Navbar expand="lg" fixed="top" expanded={isExpanded}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              alt="MoveNPack Logo"
              src={logo}
              width="89"
              height="89"
              className="logo me-3"
            />
            MoveNPack
          </Navbar.Brand>
          <Button
            variant="outline-danger"
            onClick={() => navigate("/get-a-quote")}
            className="d-lg-none"
          >
            Get a Quote
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
              <Nav.Link className="me-5" onClick={() => navigate("/")}>
                {t("nav.home")}
              </Nav.Link>
              <div className="nav-divider d-lg-none"></div>
              <Nav.Link className="me-5" onClick={() => navigate("/about")}>
                {t("nav.aboutUs")}
              </Nav.Link>
              <div className="nav-divider d-lg-none"></div>
              <NavDropdown
                className="me-5 nav-dropdown"
                title="Services"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => navigate("/services")}>
                  Our Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => navigate("/moving-and-packing")}
                >
                  Moving & Packing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => navigate("/professional-cleaning")}
                >
                  Professional Cleaning
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => navigate("/transport-service")}
                >
                  Change Packing only to - Transport Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => navigate("/cleaning-and-moving")}
                >
                  Cleaning & Moving
                </NavDropdown.Item>
              </NavDropdown>
              <div className="nav-divider d-lg-none"></div>
              <Nav.Link className="me-5" onClick={() => navigate("/contact")}>
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
              onClick={() => navigate("/get-a-quote")}
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
