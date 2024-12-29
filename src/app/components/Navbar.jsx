'use client';
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap"; // Optional: You can use Container to keep the navbar content aligned properly

const Navigation = () => {
  const [isTop, setIsTop] = useState(true);

  // Detect scroll position and toggle navbar background
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsTop(false); // When the page is scrolled down
    } else {
      setIsTop(true); // When at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      style={{
        backgroundColor: isTop
          ? "transparent" // Fully transparent at the top
          : "rgba(255, 255, 255, 0.8)", // Light transparent white after scroll
        transition: "background-color 0.3s ease", // Smooth transition
      }}
      expand="lg" // Ensures that navbar collapses on smaller screens (e.g., mobile)
      className="px-3 fixed-top"
    >
      <Container> {/* Optional: Aligns navbar content inside a container */}
        <Navbar.Brand className="navbar-brand" href="#home" style={{ fontSize: "1.5rem" }}>
          {`<chandra />`}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto"> {/* Use ml-auto for right alignment on large screens */}
            <Nav.Link href="#about" className="nav-item lead" style={{ fontSize: "1.2rem" }}>
              About
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-item lead" style={{ fontSize: "1.2rem" }}>
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-item lead" style={{ fontSize: "1.2rem" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-item lead" style={{ fontSize: "1.2rem" }}>
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
