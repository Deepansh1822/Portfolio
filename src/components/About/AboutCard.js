import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepansh Shakya </span>
            from <span className="purple"> New Delhi, India. </span>
            I have completed my Undergraduate Recently. I have pursued my <span className="purple">(B.tech) in
              Computer Science and Engineering</span> with Artificial Intelligence and Machine Learning from Sharda University.
            <br />
            <br />
            My Life Grades :-
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">B.tech</span> - 8.2 CGPA.
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> 12<sup>th</sup></span> - 89%.
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> 10<sup>th</sup></span> - 78%.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Deepansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
