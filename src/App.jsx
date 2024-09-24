import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/00-Navbar/NavBar";
import Home from "./components/01-Home/Home";
import About from "./components/02-About/About";
import Services from "./components/03-Services/Services";
import ServiceOne from "./components/03-Services/ServiceOne";
import ServiceTwo from "./components/03-Services/ServiceTwo";
import ServiceThree from "./components/03-Services/ServiceThree";
import ServiceFour from "./components/03-Services/ServiceFour";
import Contact from "./components/04-Contact/Contact";
import Quote from "./components/05-Quote/Quote";

import ScrollToTop from "./pages/ScrollTop";

import whatsApp from "./assets/images/images/whatsapp.png";
import Footer from "./components/06-Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/moving-and-packing" element={<ServiceOne />} />
          <Route path="/professional-cleaning" element={<ServiceTwo />} />
          <Route path="/transport-service" element={<ServiceThree />} />
          <Route path="/cleaning-and-moving" element={<ServiceFour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<Quote />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
      <div className="chatBotButton">
        <div
          className="fixed-bottom chatBot right-100"
          style={{
            zIndex: "10",
            left: "initial",
            margin: "5px",
            background: "transparent",
          }}
        >
          <a
            href="https://wa.me/41789235590"
            target="_blank"
            style={{ background: "transparent", backdropFilter: "blur 2rem" }}
          >
            <img
              src={whatsApp}
              className="whatsAppImage"
              alt="WhatsApp"
              style={{
                background: "transparent",
                filter: "drop-shadow(10px 7px 10px #f76c45)",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
