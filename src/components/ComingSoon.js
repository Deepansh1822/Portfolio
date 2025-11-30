import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

function ComingSoon() {
    return (
        <Container fluid className="coming-soon-section" style={{ height: "100vh", overflow: "hidden" }}>
            <Particle />
            <Container fluid style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Row style={{ justifyContent: "center", width: "100%" }}>
                    <Col md={12} style={{ textAlign: "center" }}>
                        <h1 style={{ fontSize: "3em", color: "white", paddingBottom: "20px" }}>
                            Coming <strong className="purple">Soon...</strong>
                        </h1>
                        <p style={{ color: "white", fontSize: "1.2em" }}>
                            This project is currently under development. Stay tuned!
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ComingSoon;
