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
          <br />
          <br />
          <br />
        </div>
        <div className='section'>
          <h2 id="portfolio" className='section-title'>
            PORTFOLIO
          </h2>
          <hr />
          <div>
            My project #1
          </div>
          <div>
            My project #2
          </div>
          <div>
            My project #3
          </div>
        </div>
        <br />
        <br />
        <div className='section'>
          <h2 id="about" className='section-title'>
            {t('portfolio.about')}
          </h2>
          <hr />
          <div className='about-section'>
            <div className='section-box'>
              <br />
              <div className='picture-container'>
                <img className='picture' src="picture.png" alt="Christopher Robidas" />
              </div>
              <br />
              <div>
                {t('portfolio.summary')}
              </div>
              <br />
            </div>
            <div className='section-box'>
              <h5 className='section-title'>
                {t('portfolio.current-role')}
              </h5>
              <div>
                {t('portfolio.current-role-value')}
              </div>
              <br />
              <h5 className='section-title'>
                {t('portfolio.education')}
              </h5>
              <div>
                {t('portfolio.education-value')}
              </div>
              <br />
              <h5 className='section-title'>
                {t('portfolio.technical-skills')}
              </h5>
              <div>
                <b>{t('portfolio.languages')}</b> C#, C++, Python, SQL, Bash <br />
                <b>{t('portfolio.technologies')}</b> .NET, AWS, Docker, Kubernetes, Git, GitLab CI/CD, MySQL, Couchbase <br />
                <b>{t('portfolio.softwares')}</b> Unity, Unreal Engine, Visual Studio, PyCharm, Jira, Confluence, Wwise, Photoshop, Blender
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='section'>
          <h2 id="contact" className='section-title'>
            CONTACT
          </h2>
          <hr />
          <div className='contact-section'>
            <div className='contact-box'>
              <h5>
                {t('portfolio.email')}
              </h5>
              <br />
              <img className='contact-icon-link' src="email-square.png" alt="Email" onClick={() => window.location.assign("mailto:christopher.robidas@outlook.com")} />
              <br />
              <br />
              <div>
                christopher.robidas@outlook.com
              </div>
            </div>
            <div className='contact-box'>
              <h5>
                LinkedIn
              </h5>
              <br />
              <img className='contact-icon-link' src="linkedin-square.png" alt="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/christopher-robidas-a661241a2/")} />
              <br />
              <br />
              <div>
                https://www.linkedin.com/in/christopher-robidas-a661241a2/
              </div>
            </div>
            <div className='contact-box'>
              <h5>
                {t('portfolio.phone')}
              </h5>
              <br />
              <img className='contact-icon' src="phone-square.png" alt="Phone" />
              <br />
              <br />
              <div>
                +1 (450) 204-7965
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Portfolio;