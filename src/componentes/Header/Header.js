import "./Header.css";
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../Header/tostadass.png';


function Header() {
  return (
<Navbar expand="lg" className="custom-navbar-bg"  data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand  as = {Link} to="/">Tostaderia 
        <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as = {Link} to="/">Inicio</Nav.Link>
            <Nav.Link as = {Link}  to="/Somos">Nosotros</Nav.Link>
            <Nav.Link as = {Link}  to="/Contacto">Contácto</Nav.Link>
            <Nav.Link as = {Link}  to="/Productos">Productos</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );    
}

export default Header;

