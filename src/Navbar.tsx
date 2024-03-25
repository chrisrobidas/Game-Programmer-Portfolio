import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation(['home']);
  
  return (
    <div id='navbar-background'>
      <nav id='navbar-content' className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className='navbar-brand logo-link' href="/">
            <img className='logo' src="logo192.png" alt="CR"/>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Portfolio</a>
              <a className="nav-link" href="/about">About</a>
              <a className="nav-link" href="/contact">Contact</a>
              <div className='nav-item dropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <a className="nav-link dropdown-toggle">Language</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" onClick={() => i18n.changeLanguage('french')}>French</a>
                  <a className="dropdown-item" onClick={() => i18n.changeLanguage('english')}>English</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/christopher-robidas-a661241a2/">
              <img className='social-icon' src="linkedin-logo.png" alt="Linkedin logo"/>
            </a>
            <a className='m-2' href="https://github.com/chrisrobidas">
              <img className='social-icon' src="github-logo.png" alt="GitHub logo"/>
            </a>
            <button>Resume</button>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;