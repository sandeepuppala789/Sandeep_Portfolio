import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Peeps, I am <span className="purple">Sandeep Uppala </span>
            from <span className="purple"> Sacramento, California.</span>
            <br />
            I am currently employed as a software developer at Franchise Tax Board.
            <br />
            I have completed Masters in Computer Science from Wright State University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hanging out with Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Quora and Reddit 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's never too late to do the right thing!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
