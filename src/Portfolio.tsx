import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {
  const { t, i18n } = useTranslation(['portfolio']);

  return (
    <>
      <div className='video-background'>
        <video autoPlay muted loop id="myVideo">
          <source src="gameloft-banner.mp4" type="video/mp4" />
        </video>
      </div>
      <div id='content'>
        <div id='home' className='empty-space' />
        <div className='welcome-box'>
          <h1 className='programmer-name'>
            CHRISTOPHER ROBIDAS
          </h1>
          <h2>
            {t("portfolio.game-programmer")}
          </h2>
          <br/>
          <br/>
          <br/>
        </div>
        <br />
        <div className='section-body'>
          <h2 id="portfolio" className='section-title'>
            Portfolio
          </h2>
          <hr />
        </div>
        <br />
        <div className='section-body'>
          <h2 id="about" className='section-title'>
            About
          </h2>
          <hr />
        </div>
        <br />
        <div className='section-body'>
          <h2 id="contact" className='section-title'>
            Contact
          </h2>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Portfolio;