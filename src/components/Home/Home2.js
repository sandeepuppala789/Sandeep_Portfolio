import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a versatile full-stack Java developer at Franchise Tax Board. With a passion for crafting seamless and efficient software solutions, I thrive on the challenges that come with both front-end and back-end development.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, SpringBoot and SQL. </b>
              </i>
              <br />
              <br />
              My journey in the tech world is marked by a commitment to delivering high-quality code and turning innovative ideas into reality. Let's dive into the world of possibilities and build something extraordinary together.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with 
              <i>
                <b className="purple">
                  {" "}
                  Spring Boot Starters
                </b>
              </i>
              &nbsp; and 
              <i>
                <b className="purple"> React.js/Angular.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
