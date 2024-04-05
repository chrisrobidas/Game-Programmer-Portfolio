import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {
  const { t } = useTranslation(['portfolio']);

  const [selectedMedia, setSelectedMedia] = useState<number[]>([0])
  const [imgSrc, setImgSrc] = useState<string[]>(['TEST-2.png'])
  const [videoSrc, setVideoSrc] = useState<string[]>(['TEST_Tigre_en_situation_triche.mov'])
  const [isVideo, setIsVideo] = useState<boolean[]>([true])
  const [enableControls, setEnableControls] = useState<boolean[]>([true])

  function SetMedia(mediaGroupIndex: number, mediaIndex: number, src: string, showVideo: boolean = false, shouldEnableControls: boolean = false) {
    const newSelectedMedia = [...selectedMedia]
    newSelectedMedia[mediaGroupIndex] = mediaIndex
    setSelectedMedia(newSelectedMedia)

    const newIsVideo = [...isVideo]
    newIsVideo[mediaGroupIndex] = showVideo
    setIsVideo(newIsVideo)

    const newEnableControls = [...enableControls]
    newEnableControls[mediaGroupIndex] = shouldEnableControls
    setEnableControls(newEnableControls)

    if (newIsVideo[mediaGroupIndex]) {
      const newVideoSrc = [...videoSrc]
      newVideoSrc[mediaGroupIndex] = src
      setVideoSrc(newVideoSrc)
    }
    else {
      const newImgSrc = [...imgSrc]
      newImgSrc[mediaGroupIndex] = src
      setImgSrc(newImgSrc)
    }
  }

  return (
    <>
      <div className='video-background'>
        <video autoPlay muted loop id="myVideo">
          <source src="gameloft-banner.mp4" type="video/mp4" />
        </video>
      </div>
      <div id='body-content'>
        <div id='home' className='empty-space' />
        <div className='welcome-box'>
          <div className='content'>
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
        </div>
        <div id="portfolio" className='section'>
          <div className='content-container'>
            <h2 className='section-title content'>
              PORTFOLIO
            </h2>
            <hr className='content' />
            <br />
          </div>
          <div className='background-container-test content-container'>
            <br />
            <h3 className='content'>
              T.E.S.T. : Tigre en situation triche
            </h3>
            <div className='portfolio-section content'>
              <div className='portfolio-section-box'>
                {isVideo[0] &&
                  <video className='portfolio-main-media' autoPlay muted loop controls>
                    <source src={videoSrc[0]} type="video/mp4" />
                  </video>}
                {!isVideo[0] && <img className='portfolio-main-media' src={imgSrc[0]} alt="TEST 1" />}
                <div className='portfolio-medias'>
                  <img className={'portfolio-media' + (selectedMedia[0] == 0 ? ' portfolio-media-selected' : '')} src="TEST-1.png" alt="TEST 1" onClick={() => SetMedia(0, 0, 'TEST_Tigre_en_situation_triche.mov', true, true)} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 1 ? ' portfolio-media-selected' : '')} src="TEST-2.png" alt="TEST 2" onClick={() => SetMedia(0, 1, 'TEST-2.png')} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 2 ? ' portfolio-media-selected' : '')} src="TEST-3.png" alt="TEST 3" onClick={() => SetMedia(0, 2, 'TEST-3.png')} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 3 ? ' portfolio-media-selected' : '')} src="TEST-4.png" alt="TEST 4" onClick={() => SetMedia(0, 3, 'TEST-4.png')} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 4 ? ' portfolio-media-selected' : '')} src="TEST-5.png" alt="TEST 5" onClick={() => SetMedia(0, 4, 'TEST-5.png')} />
                </div>
              </div>
              <div className='portfolio-section-box'>
                <br />
                <h5>{t('portfolio.project-summary')}</h5>
                {t('portfolio.project-test.summary')} <br />
                <br />
                {t('portfolio.project-tasks')} <br />
                <ul>
                  <li>{t('portfolio.project-test.task1')}</li>
                  <li>{t('portfolio.project-test.task2')}</li>
                  <li>{t('portfolio.project-test.task3')}</li>
                  <li>{t('portfolio.project-test.task4')}</li>
                </ul>
                <div className='info-line'>
                  <img className='info-icon' src='user.png' alt='user' />
                  {t('portfolio.project-test.role')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='group.png' alt='group' />
                  {t('portfolio.project-test.team')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='time.png' alt='time' />
                  {t('portfolio.project-test.time')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='support.png' alt='support' />
                  {t('portfolio.project-test.skills')}
                </div>
                <br />
                <div className='play-button-container'>
                  <button className='play-button' onClick={() => window.open("https://master-yeet.itch.io/test-tigre-en-situation-triche")}>
                    {t('portfolio.project-play-in-browser')}
                    <img className='play-button-icon' src="itchio.png" alt="itch.io" />
                  </button>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div>
            <br />
            <h3>
              Purrfect Escape
            </h3>
            <br />
          </div>
          <div>
            <br />
            <h3>
              Sauve-Chouris
            </h3>
            <br />
          </div>
          <div>
            <br />
            <h3>
              Stepping Stones
            </h3>
            <br />
          </div>
        </div>
        <br />
        <br />
        <div id="about" className='section content-container'>
          <h2 className='section-title content'>
            {t('portfolio.about')}
          </h2>
          <hr className='content' />
          <br />
          <div className='about-section content'>
            <div className='about-section-box'>
              <div className='picture-container'>
                <img className='picture' src="picture.png" alt="Christopher Robidas" />
              </div>
              <br />
              <div>
                {t('portfolio.summary')}
              </div>
              <br />
            </div>
            <div className='about-section-box'>
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
        <div id="contact" className='section content-container'>
          <h2 className='section-title content'>
            CONTACT
          </h2>
          <hr className='content' />
          <br />
          <div className='contact-section content'>
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