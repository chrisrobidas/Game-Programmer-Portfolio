import { useTranslation } from 'react-i18next';
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown
} from 'react-bootstrap';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation(['navbar']);
  return (
      <BootstrapNavbar id='navbar-content' data-bs-theme="dark" expand="lg">
        <Container>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Brand href="/" className='logo-wrapper'>
            <img className='logo' src="logo192.png" alt="CR"/>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="me-auto">
              <Nav.Link href="/">{t('navbar.portfolio')}</Nav.Link>
              <Nav.Link href="/about">{t('navbar.about')}</Nav.Link>
              <Nav.Link href="/contact">{t('navbar.contact')}</Nav.Link>
              <NavDropdown title={t('navbar.language')} id="dropdown-content">
                <NavDropdown.Item onClick={() => i18n.changeLanguage('french')}>{t('navbar.french')}</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage('english')}>{t('navbar.english')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </BootstrapNavbar.Collapse>
          <div className='right-buttons'>
            <a href="https://www.linkedin.com/in/christopher-robidas-a661241a2/">
              <img className='social-icon' src="linkedin-logo.png" alt="Linkedin logo"/>
            </a>
            <a className='middle-margin' href="https://github.com/chrisrobidas">
              <img className='social-icon' src="github-logo.png" alt="GitHub logo"/>
            </a>
            <button className='resume-button' onClick={() => window.open(i18n.language === 'french' ? 'Christopher_Robidas_CV_2024.pdf' : 'Christopher_Robidas_Resume_2024.pdf')}>
            {t('navbar.resume')}
              <img className='download-image' src='download.png' alt='Download image'/>
            </button>
          </div>
        </Container>
      </BootstrapNavbar>
  );
}

export default Navbar;