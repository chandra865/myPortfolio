'use client';
import React from "react";
import Container from "react-bootstrap/Container";
import GetInTouch from "./GetInTouch";
import { getInTouch } from "../resource";
const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
         {getInTouch.show && (
                <GetInTouch
                  heading={getInTouch.heading}
                  message={getInTouch.message}
                  email={getInTouch.email}
                />
              )}
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/chandra865"
          aria-label="My GitHub"
        >
          {" "}
          <span className="badge bg-dark">Chandra Shekhar</span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p></p>
      </Container>
    </footer>
  );
};

export default Footer;
