import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Censo Escolar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="instituicaoensino">Instituicao Ensino</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
