import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada sodales aliquet.</p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>1234 Main Street, Anytown USA</p>
            <p>(555) 555-5555</p>
            <p>contact@example.com</p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Facebook</a></li>
              <li className="list-inline-item"><a href="#">Twitter</a></li>
              <li className="list-inline-item"><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="my-4" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">&copy; 2023 My App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
