import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAws, DiDocker, DiEclipse, DiIntellij } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker/>
      </Col>
    </Row>
  );
}

export default Toolstack;
