import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary shadow-sm  p-2 fixed-top"
    >
      <Container>
        <Navbar.Brand href="/" className="me-auto">
          <img
            src="https://img.freepik.com/premium-vector/bharat-hindi-creative-calligraphy-lettering-text_684790-29.jpg"
            alt="WebLogo"
            className="logoImg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/jobs"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Jobs
            </Nav.Link>
            <Nav.Link
              href="/bookmarks"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Bookmarks
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <NavDropdown
              title={
                <img
                  src="https://i.postimg.cc/7Y1JBDHX/ab262296-87d5-4d0a-b118-66d4f87a4d2f.jpg"
                  alt="User Avatar"
                  className="avatarImg"
                />
              }
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/UserDetails">Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/UserDetails">Setting</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/UserDetails">Logout</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
