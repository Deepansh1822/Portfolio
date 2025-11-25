import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiSpringsecurity, SiHibernate, SiSpringboot, SiThymeleaf, SiReact, SiBootstrap, SiSpring, SiMysql, SiVisualstudiocode, SiPostman, SiAmazonaws } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaDatabase, FaProjectDiagram, FaGithub } from "react-icons/fa";  // For JDBC (Database symbol)
import { MdWeb } from "react-icons/md";       // For JSP / Servlets (Web symbol)
import { MdViewSidebar } from "react-icons/md"; // For Swing (GUI metaphor)
import sts from "../../Assets/sts.png";
import antigravity from "../../Assets/antigravity.png";

function Techstack() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Languages Known</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <h2>Java</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCplusplus />
          <h2>C++</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiC />
          <h2>C</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaProjectDiagram />
          <h2>Data Structures</h2>
        </Col>
      </Row>

      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Front-End Technologies</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
          <h2>HTML</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
          <h2>CSS</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
          <h2>Javascript</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact />
          <h2>React.js</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
          <h2>Bootstrap</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <MdViewSidebar />
          <h2>Swing</h2>
        </Col>
      </Row>

      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Back-End Technologies</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpring />
          <h2>Spring</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpringboot />
          <h2>SpringBoot</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpringsecurity />
          <h2>Spring Security</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHibernate />
          <h2>Hibernate</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiThymeleaf />
          <h2>Thymeleaf</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <h2>JPA</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaDatabase />
          <h2>JDBC</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <h2>Servlets</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <MdWeb />
          <h2>JSP</h2>
        </Col>
      </Row>

      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Database</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <h2>MySQL</h2>
        </Col>
      </Row>

      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Tools Used</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={sts} height={120} width={120}></img>
          <h2 style={{ marginTop: "-14px" }}>STS</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaGithub />
          <h2>Github</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
          <h2>Visual Studio Code</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
          <h2>Postman</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
          <h2>Amazon AWS</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={antigravity} height={120} width={120}></img>
          <h2 style={{ marginTop: "-14px" }}>Google Antigravity</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <h2>MySQL Workbench</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
