import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

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
              }}
            >
              Jobs
            </Nav.Link>
            <Nav.Link
              href="/bookmarks"
              style={{
                fontSize: "20px",
              }}
            >
              Bookmarks
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <img
                  src="public/images/userLogo.jpeg"
                  alt="User Avatar"
                  className="avatarImg"
                />
              }
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="/UserDetails">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
