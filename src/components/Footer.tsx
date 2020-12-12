import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer-text py-3 ">
      <Container>
        <Row>
          <Col className="mx-auto text-center mb-4" md={6}>
            <h3>
              all rights reserved &copy;{new Date().getFullYear().toString()}
            </h3>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
