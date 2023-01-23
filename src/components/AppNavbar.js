import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { clear } from "../rtk/slices/cart-slice";
import { useAuth } from "./auth";

function AppNavbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleLogout = () => {
    auth.logout();
    dispatch(clear());
    navigate("/");
  };

  return (
    <Navbar className="navbar-dark bg-dark" fixed="top" bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <h3 className="fw-bold">
            cart<span className="text-warning">App</span>
          </h3>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link text-light fs-6 fw-bold">
              Products
            </Link>
            <Link to="/cart" className="nav-link text-light fs-6 fw-bold">
              Cart {cart.length} <i className="fa-solid fa-cart-shopping"></i>
            </Link>

            {!auth.user ? (
              <Link to="/login" className="nav-link text-light fs-6 fw-bold">
                Login
              </Link>
            ) : (
              <Link
                to="/"
                className="nav-link text-light fs-6 fw-bold"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
