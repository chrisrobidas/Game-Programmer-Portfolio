import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation(['footer']);
  
  return (
    <div id='footer-background'>
      <div id='footer-content'>
        <div className='creator-line'>
          Christopher Robidas
          <div className='current-year'>
            ©2024
          </div>
        </div>
        <div className='tech-used'>
          {t('footer.made-with')} Vite + React + TypeScript
        </div>
      </div>
    </div>
  );
}

export default Footer;