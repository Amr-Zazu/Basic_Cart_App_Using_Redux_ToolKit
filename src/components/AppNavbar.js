import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AppNavbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <Navbar className="navbar-dark bg-dark" fixed="top" bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Cart App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="navbar-brand">
              Products
            </Link>
            <Link to="/cart" className="navbar-brand float-left">
              Cart - {cart.length} <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
