import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ShoppEX from "../../Assets/Projects/shoppex.png";
import GANs from "../../Assets/Projects/gan.webp";
import Assistant from "../../Assets/Projects/virtual-assistant.webp";
import Spotify from "../../Assets/Projects/spotify.jpg";
import Java_Projects from "../../Assets/Projects/java_projects.png";
import School_Management_System from "../../Assets/Projects/school_management_system.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoppEX}
              isBlog={false}
              title="ShoppEX"
              description="Created a e-commerce web application using Spring Boot, featuring product listing, user management, and order processing. Implemented RESTful APIs for handling clothing items, cart operations, and secure checkout functionality. Uses :- CSS, javascript, react.js, SpringBoot, Spring Security, RESTful APIs, JPA, Thymeleaf, MySQL, Java."
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GANs}
              isBlog={false}
              title="Text-To-Image Synthesizer using GANs"
              description="GAN based machine learning model to generate images based on text (Generator and Discriminator to create realistic images using deep learning framework and libraries). Uses :- tensorflow, numpy, pandas, pytorch, BERT, pyYAML, torch.nn."
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Assistant}
              isBlog={false}
              title="Virtual Voice Assistant"
              description="Virtual assistant for assisting on command given as input by the user in form of voice, automates various task through voice commands like :- open google, what is AI, etc. Uses :- HTML, CSS, javascript, react.js.
"
            // ghLink="https://github.com/soumyajit4419/Editor.io"
            // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify Clone"
              description=" Music application which plays songs in real time using front-end technologies (Front-End project). Uses :- HTML, CSS, javascript, react.js."
            // ghLink="https://github.com/soumyajit4419/Plant_AI"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Java_Projects}
              isBlog={false}
              title="Java Projects"
              description=" Using Advanced Java and Swing (GUI) technologies to create projects like :- Calulculator, Currency Convertor, with also games like :- Flying Birds, PacMan, Sudoku. Uses :- Advanced Java Concepts, Swing, AWT(optional)."
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"/
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={School_Management_System}
              isBlog={false}
              title="School Management System"
              description=" Created an application (GUI using Java) for managing school records in an customizable and structured manner, like :- Managing students, grades, Fee structures, teachers, and many more. Uses :- Advanced Java Concepts, JDBC, MySQL, Swing, AWT, MySQL Workbench Database."
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"/
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
