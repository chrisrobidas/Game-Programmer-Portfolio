import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {
  const { t } = useTranslation(['portfolio']);

  const [imgSrc, setImgSrc] = useState<string[]>(['TEST-2.png'])
  const [videoSrc, setVideoSrc] = useState<string[]>(['TEST_Tigre_en_situation_triche.mov'])
  const [isVideo, setIsVideo] = useState<boolean[]>([true])
  const [enableControls, setEnableControls] = useState<boolean[]>([true])

  function SetMedia(index: number, src: string, showVideo: boolean = false, shouldEnableControls: boolean = false) {
    const newIsVideo = [...isVideo]
    newIsVideo[index] = showVideo
    setIsVideo(newIsVideo)

    const newEnableControls = [...enableControls]
    newEnableControls[index] = shouldEnableControls
    setEnableControls(newEnableControls)

    if (newIsVideo[index]) {
      const newVideoSrc = [...videoSrc]
      newVideoSrc[index] = src
      setVideoSrc(newVideoSrc)
    }
    else {
      const newImgSrc = [...imgSrc]
      newImgSrc[index] = src
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
            <h3>
              T.E.S.T. : Tigre en situation triche
            </h3>
            <div className='portfolio-section'>
              <div className='portfolio-section-box'>
                {isVideo[0] &&
                  <video className='portfolio-main-media' autoPlay muted loop controls>
                    <source src={videoSrc[0]} type="video/mp4" />
                  </video>}
                {!isVideo[0] && <img className='portfolio-main-media' src={imgSrc[0]} alt="TEST 1" />}
                <div className='portfolio-medias'>
                  <img className='portfolio-media' src="TEST-1.png" alt="TEST 1" onClick={() => SetMedia(0, 'TEST_Tigre_en_situation_triche.mov', true, true)} />
                  <img className='portfolio-media' src="TEST-2.png" alt="TEST 2" onClick={() => SetMedia(0, 'TEST-2.png')} />
                  <img className='portfolio-media' src="TEST-3.png" alt="TEST 3" onClick={() => SetMedia(0, 'TEST-3.png')} />
                  <img className='portfolio-media' src="TEST-4.png" alt="TEST 4" onClick={() => SetMedia(0, 'TEST-4.png')} />
                  <img className='portfolio-media' src="TEST-5.png" alt="TEST 5" onClick={() => SetMedia(0, 'TEST-5.png')} />
                </div>
              </div>
              <div className='portfolio-section-box'>
                Five Night at Freddy's like game where you must cheat during an exam without being caught by your teacher made for the Game Jam Sherbrooke 2024. <br />
                <br />
                I worked on the following: <br />
                <ul>
                  <li>Captcha puzzle on the cellphone.</li>
                  <li>End game UI menus displaying the player's game result.</li>
                  <li>The tigger jumpscare causing the player to lose the game.</li>
                  <li>Display mode and resolution settings and the UI to change them.</li>
                </ul>
                Role: Game programmer <br />
                Team size: 5 <br />
                Time frame: 48 hours <br />
                Technical skills: Unity and C# <br />
                <br />
                // TODO: ADD BORDER TO SELECTED VIDEO/IMAGE AND FIX MOBILE IMAGES WIDTH AND ADD BACKGROUNDS AND ADD ICONS FOR ROLE, ETC..
                <div className='play-button-container'>
                  <button className='play-button' onClick={() => window.open("https://master-yeet.itch.io/test-tigre-en-situation-triche")}>
                    Play in browser
                    <img className='play-button-icon' src="itchio.png" alt="itch.io" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div>
            <h3>
              Purrfect Escape
            </h3>
          </div>
          <br />
          <br />
          <div>
            <h3>
              Sauve-Chouris
            </h3>
          </div>
          <br />
          <br />
          <div>
            <h3>
              Stepping Stones
            </h3>
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
            <div className='about-section-box'>
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