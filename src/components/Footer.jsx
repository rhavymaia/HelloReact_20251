import { Col, Container, Image, Nav, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router';

import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto' }} className="fixed-bottom">
      <Container fluid>
        <Row className="bg-primary text-white p-3">
          <Col md={4} className="d-flex flex-column align-items-center">
            <Image
              src="https://www.shutterstock.com/image-vector/abstract-initial-letter-d-logo-600nw-2055050639.jpg"
              alt="company logo"
              rounded
              width={100}
              height={100}
            />
            <h4 className="mt-3">Censo Escolar</h4>
            <p>Instituições de ensino no Brasil</p>
          </Col>

          <Col md={4} className="d-flex flex-column align-items-center">
            <h5>Useful Links</h5>
            <Nav className="flex-column text-center">
              <Link to="/" className="text-white">
                Home
              </Link>
              <Link to="/instituicaoensino" className="text-white">
                Instituição de Ensino
              </Link>
            </Nav>
          </Col>

          <Col md={4} className="d-flex flex-column align-items-center">
            <h5>Contact us!</h5>
            <p>email@fakeemail.com</p>
            <p>Phone: +1(800)867-5309</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
