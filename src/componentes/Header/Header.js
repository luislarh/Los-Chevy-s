import "./Header.css";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import { useAuth0 } from "@auth0/auth0-react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';  // Importa los estilos aquí
import Logo from '../Header/Laguadalupana.png';
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";
import Profile from "../Login/Profile";


function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar expand="lg" className="custom-navbar-bg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Tostaderia
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/Somos">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/Contacto">
              Contácto
            </Nav.Link>
            <Nav.Link as={Link} to="/Productos">
              Productos
            </Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <Profile />
          </Nav>
        </Navbar.Collapse>
        {/* Carrito de compras a la derecha */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Carrito">
            <i className="fas fa-shopping-cart"></i> Carrito
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

