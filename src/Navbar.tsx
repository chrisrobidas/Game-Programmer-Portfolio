import { useTranslation } from 'react-i18next';
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown
} from 'react-bootstrap';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation(['portfolio']);
  // TODO FIX HEIGHT OF NAVBAR WHEN COLLAPSED
  return (
      <BootstrapNavbar id='navbar-content' data-bs-theme="dark" sticky="top" expand="lg">
        <Container>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Brand href="/" className='logo-wrapper'>
            <img className='logo' src="logo192.png" alt="CR"/>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="me-auto">
              <Nav.Link href="/">Portfolio</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <NavDropdown title="Language" id="dropdown-content">
                <NavDropdown.Item onClick={() => i18n.changeLanguage('french')}>French</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage('english')}>English</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </BootstrapNavbar.Collapse>
          <div>
            <a href="https://www.linkedin.com/in/christopher-robidas-a661241a2/">
              <img className='social-icon' src="linkedin-logo.png" alt="Linkedin logo"/>
            </a>
            <a className='m-2' href="https://github.com/chrisrobidas">
              <img className='social-icon' src="github-logo.png" alt="GitHub logo"/>
            </a>
            <button>Resume</button>
          </div>
        </Container>
      </BootstrapNavbar>
  );
}

export default Navbar;