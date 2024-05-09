import { useTranslation } from 'react-i18next';
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
  Offcanvas
} from 'react-bootstrap';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation(['navbar']);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BootstrapNavbar id='navbar-content' data-bs-theme="dark" expand="lg" onToggle={handleShow} expanded={false}>
      <Container>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Brand href="#home" className='logo-wrapper'>
          <img className='logo' src="logo192.png" alt="CR" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Collapse>
          <Nav className='navbar-content'>
            <Nav.Link active={false} href="#home">{t('navbar.home')}</Nav.Link>
            <Nav.Link active={false} href="#portfolio">{t('navbar.portfolio')}</Nav.Link>
            <Nav.Link active={false} href="#about">{t('navbar.about')}</Nav.Link>
            <Nav.Link active={false} href="#contact">{t('navbar.contact')}</Nav.Link>
            <NavDropdown title={t('navbar.language')} id="dropdown-content">
              <NavDropdown.Item onClick={() => i18n.changeLanguage('french')}>{t('navbar.french')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('english')}>{t('navbar.english')}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
        <Offcanvas data-bs-theme="dark" className='offcanvas-background' show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='offcanvas-title'>
              CHRISTOPHER ROBIDAS
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr className='offcanvas-hr' />
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link active={false} href="#home" onClick={handleClose}>{t('navbar.home')}</Nav.Link>
              <Nav.Link active={false} href="#portfolio" onClick={handleClose}>{t('navbar.portfolio')}</Nav.Link>
              <Nav.Link active={false} href="#about" onClick={handleClose}>{t('navbar.about')}</Nav.Link>
              <Nav.Link active={false} href="#contact" onClick={handleClose}>{t('navbar.contact')}</Nav.Link>
              <NavDropdown title={t('navbar.language')} id="offcanvas-dropdown-content">
                <NavDropdown.Item onClick={() => i18n.changeLanguage('french')}>{t('navbar.french')}</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage('english')}>{t('navbar.english')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <div className='right-buttons cursor-pointer'>
          <a href='mailto:christopher.robidas@outlook.com'>
            <img className='social-icon' src="mail-logo.png" alt="Mail logo" />
          </a>
          <a href='https://www.linkedin.com/in/christopher-robidas-a661241a2/' target="_blank">
            <img className='social-icon middle-margin' src="linkedin-logo.png" alt="Linkedin logo" />
          </a>
          <a className='resume-button' href={i18n.language === 'french' ? 'Christopher_Robidas_CV_2024.pdf' : 'Christopher_Robidas_Resume_2024.pdf'} target="_blank">
            {t('navbar.resume')}
            <img className='download-image' src='download.png' alt='Download image' />
          </a>
        </div>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;