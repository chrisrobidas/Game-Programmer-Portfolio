import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t, i18n } = useTranslation(['home']);
  
  return (
    <div id='footer-background'>
      <div id='footer-content'>
        <div>
          Christopher Robidas ©2024
        </div>
        <div className='tech-used'>
          Made with Vite + React + TypeScript
        </div>
      </div>
    </div>
  );
}

export default Footer;