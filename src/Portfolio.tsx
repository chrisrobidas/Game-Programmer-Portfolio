import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {
  const { t } = useTranslation(['portfolio']);

  const [selectedMedia, setSelectedMedia] = useState<number[]>([0, 0, 0, 0, 0])
  const [imgSrc, setImgSrc] = useState<string[]>(['TEST-2.jpg', 'Sauve-Chouris-2.jpg', 'Purrfect-Escape-2.jpg', 'Stepping-Stones-2.jpg', 'Arcane_Echoes_2.jpg'])
  const [videoSrc, setVideoSrc] = useState<string[]>(['TEST_Tigre_en_situation_triche.mp4', 'Sauve-Chouris.mp4', 'Purrfect-Escape.mp4', 'Stepping_Stones.mp4', 'Arcane_Echoes.mp4'])
  const [isVideo, setIsVideo] = useState<boolean[]>([true, true, true, true, true])
  const [enableControls, setEnableControls] = useState<boolean[]>([true, true, true, true, true])

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
        <video className='welcome-video' autoPlay muted loop playsInline>
          <source src="Welcome-Video.mp4" type="video/mp4" />
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
          <div className='background-container-arcane-echoes content-container'>
            <h2 className='section-title content'>
              PORTFOLIO
            </h2>
            <div className='section-hr content' />
            <br />
            <h3 id='arcane-echoes' className='content'>
              Arcane Echoes: Scroll of Destiny
            </h3>
            <div className='portfolio-section content'>
              <div className='portfolio-section-box'>
                {isVideo[4] &&
                  <video className='portfolio-main-media' autoPlay muted loop playsInline controls>
                    <source src={videoSrc[4]} type="video/mp4" />
                  </video>}
                {!isVideo[4] && <img className='portfolio-main-media' src={imgSrc[4]} alt="Main media" />}
                <div className='portfolio-medias'>
                  <img className={'portfolio-media' + (selectedMedia[4] == 0 ? ' portfolio-media-selected' : '')} src="Arcane_Echoes_1.jpg" alt="Arcane Echoes 1" onClick={() => SetMedia(4, 0, 'Arcane_Echoes.mp4', true, true)} />
                  <img className={'portfolio-media' + (selectedMedia[4] == 1 ? ' portfolio-media-selected' : '')} src="Arcane_Echoes_2.jpg" alt="Arcane Echoes 2" onClick={() => SetMedia(4, 1, 'Arcane_Echoes_2.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[4] == 2 ? ' portfolio-media-selected' : '')} src="Arcane_Echoes_3.jpg" alt="Arcane Echoes 3" onClick={() => SetMedia(4, 2, 'Arcane_Echoes_3.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[4] == 3 ? ' portfolio-media-selected' : '')} src="Arcane_Echoes_4.jpg" alt="Arcane Echoes 4" onClick={() => SetMedia(4, 3, 'Arcane_Echoes_4.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[4] == 4 ? ' portfolio-media-selected' : '')} src="Arcane_Echoes_5.jpg" alt="Arcane Echoes 5" onClick={() => SetMedia(4, 4, 'Arcane_Echoes_5.jpg')} />
                </div>
                <br />
              </div>
              <div className='portfolio-section-box blurry-box'>
                <h5>{t('portfolio.project-summary')}</h5>
                {t('portfolio.project-arcane-echoes.summary')} <br />
                <br />
                {t('portfolio.project-tasks')} <br />
                <ul>
                  <li>{t('portfolio.project-arcane-echoes.task1')}</li>
                  <li>{t('portfolio.project-arcane-echoes.task2')}</li>
                  <li>{t('portfolio.project-arcane-echoes.task3')}</li>
                  <li>{t('portfolio.project-arcane-echoes.task4')}</li>
                </ul>
                <div className='info-line'>
                  <img className='info-icon' src='user.png' alt='user' />
                  {t('portfolio.project-arcane-echoes.role')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='group.png' alt='group' />
                  {t('portfolio.project-arcane-echoes.team')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='time.png' alt='time' />
                  {t('portfolio.project-arcane-echoes.time')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='support.png' alt='support' />
                  {t('portfolio.project-arcane-echoes.skills')}
                </div>
                <br />
                <div className='play-button-container'>
                  <a className='play-button' href="https://master-yeet.itch.io/arcane-echoes-scroll-of-destiny" target="_blank">
                    {t('portfolio.project-play')}
                    <img className='play-button-icon' src="itchio.png" alt="itch.io" />
                  </a>
                  <a className='source-button' href="https://github.com/chrisrobidas/Arcane-Echoes" target="_blank">
                    {t('portfolio.project-source')}
                    <img className='source-button-icon' src="github-logo.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className='background-container-test content-container'>
            <br />
            <h3 id='test' className='content'>
              T.E.S.T. : Tigre en situation triche
            </h3>
            <div className='portfolio-section content'>
              <div className='portfolio-section-box'>
                {isVideo[0] &&
                  <video className='portfolio-main-media' autoPlay muted loop playsInline controls>
                    <source src={videoSrc[0]} type="video/mp4" />
                  </video>}
                {!isVideo[0] && <img className='portfolio-main-media' src={imgSrc[0]} alt="Main media" />}
                <div className='portfolio-medias'>
                  <img className={'portfolio-media' + (selectedMedia[0] == 0 ? ' portfolio-media-selected' : '')} src="TEST-1.jpg" alt="TEST 1" onClick={() => SetMedia(0, 0, 'TEST_Tigre_en_situation_triche.mp4', true, true)} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 1 ? ' portfolio-media-selected' : '')} src="TEST-2.jpg" alt="TEST 2" onClick={() => SetMedia(0, 1, 'TEST-2.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 2 ? ' portfolio-media-selected' : '')} src="TEST-3.jpg" alt="TEST 3" onClick={() => SetMedia(0, 2, 'TEST-3.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 3 ? ' portfolio-media-selected' : '')} src="TEST-4.jpg" alt="TEST 4" onClick={() => SetMedia(0, 3, 'TEST-4.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[0] == 4 ? ' portfolio-media-selected' : '')} src="TEST-5.jpg" alt="TEST 5" onClick={() => SetMedia(0, 4, 'TEST-5.jpg')} />
                </div>
                <br />
              </div>
              <div className='portfolio-section-box blurry-box'>
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
                  <a className='play-button' href="https://master-yeet.itch.io/test-tigre-en-situation-triche" target="_blank">
                    {t('portfolio.project-play-in-browser')}
                    <img className='play-button-icon' src="itchio.png" alt="itch.io" />
                  </a>
                  <a className='source-button' href="https://github.com/chrisrobidas/T.E.S.T.-Tigre-en-situation-triche" target="_blank">
                    {t('portfolio.project-source')}
                    <img className='source-button-icon' src="github-logo.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className='background-container-sauve-chouris content-container'>
            <br />
            <h3 id='sauve-chouris' className='content'>
              Sauve-Chouris
            </h3>
            <div className='portfolio-section content'>
              <div className='portfolio-section-box'>
                {isVideo[1] &&
                  <video className='portfolio-main-media' autoPlay muted loop playsInline controls>
                    <source src={videoSrc[1]} type="video/mp4" />
                  </video>}
                {!isVideo[1] && <img className='portfolio-main-media' src={imgSrc[1]} alt="Main media" />}
                <div className='portfolio-medias'>
                  <img className={'portfolio-media' + (selectedMedia[1] == 0 ? ' portfolio-media-selected' : '')} src="Sauve-Chouris-1.jpg" alt="Sauve-Chouris 1" onClick={() => SetMedia(1, 0, 'Sauve-Chouris.mp4', true, true)} />
                  <img className={'portfolio-media' + (selectedMedia[1] == 1 ? ' portfolio-media-selected' : '')} src="Sauve-Chouris-2.jpg" alt="Sauve-Chouris 2" onClick={() => SetMedia(1, 1, 'Sauve-Chouris-2.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[1] == 2 ? ' portfolio-media-selected' : '')} src="Sauve-Chouris-3.jpg" alt="Sauve-Chouris 3" onClick={() => SetMedia(1, 2, 'Sauve-Chouris-3.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[1] == 3 ? ' portfolio-media-selected' : '')} src="Sauve-Chouris-4.jpg" alt="Sauve-Chouris 4" onClick={() => SetMedia(1, 3, 'Sauve-Chouris-4.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[1] == 4 ? ' portfolio-media-selected' : '')} src="Sauve-Chouris-5.jpg" alt="Sauve-Chouris 5" onClick={() => SetMedia(1, 4, 'Sauve-Chouris-5.jpg')} />
                </div>
                <br />
              </div>
              <div className='portfolio-section-box blurry-box'>
                <h5>{t('portfolio.project-summary')}</h5>
                {t('portfolio.project-sauve-chouris.summary')} <br />
                <br />
                {t('portfolio.project-tasks')} <br />
                <ul>
                  <li>{t('portfolio.project-sauve-chouris.task1')}</li>
                  <li>{t('portfolio.project-sauve-chouris.task2')}</li>
                  <li>{t('portfolio.project-sauve-chouris.task3')}</li>
                </ul>
                <div className='info-line'>
                  <img className='info-icon' src='user.png' alt='user' />
                  {t('portfolio.project-sauve-chouris.role')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='group.png' alt='group' />
                  {t('portfolio.project-sauve-chouris.team')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='time.png' alt='time' />
                  {t('portfolio.project-sauve-chouris.time')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='support.png' alt='support' />
                  {t('portfolio.project-sauve-chouris.skills')}
                </div>
                <br />
                <div className='play-button-container'>
                  <a className='play-button' href="https://master-yeet.itch.io/sauve-chouris" target="_blank">
                    {t('portfolio.project-play')}
                    <img className='play-button-icon' src="itchio.png" alt="itch.io" />
                  </a>
                  <a className='source-button' href="https://github.com/chrisrobidas/Sauve-Chouris" target="_blank">
                    {t('portfolio.project-source')}
                    <img className='source-button-icon' src="github-logo.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className='background-container-purrfect-escape content-container'>
            <br />
            <h3 id='purrfect-escape' className='content'>
              Purrfect Escape
            </h3>
            <div className='portfolio-section content'>
              <div className='portfolio-section-box'>
                {isVideo[2] &&
                  <video className='portfolio-main-media' autoPlay muted loop playsInline controls>
                    <source src={videoSrc[2]} type="video/mp4" />
                  </video>}
                {!isVideo[2] && <img className='portfolio-main-media' src={imgSrc[2]} alt="Main media" />}
                <div className='portfolio-medias'>
                  <img className={'portfolio-media' + (selectedMedia[2] == 0 ? ' portfolio-media-selected' : '')} src="Purrfect-Escape-1.jpg" alt="Purrfect Escape 1" onClick={() => SetMedia(2, 0, 'Purrfect-Escape.mp4', true, true)} />
                  <img className={'portfolio-media' + (selectedMedia[2] == 1 ? ' portfolio-media-selected' : '')} src="Purrfect-Escape-2.jpg" alt="Purrfect Escape 2" onClick={() => SetMedia(2, 1, 'Purrfect-Escape-2.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[2] == 2 ? ' portfolio-media-selected' : '')} src="Purrfect-Escape-3.jpg" alt="Purrfect Escape 3" onClick={() => SetMedia(2, 2, 'Purrfect-Escape-3.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[2] == 3 ? ' portfolio-media-selected' : '')} src="Purrfect-Escape-4.jpg" alt="Purrfect Escape 4" onClick={() => SetMedia(2, 3, 'Purrfect-Escape-4.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[2] == 4 ? ' portfolio-media-selected' : '')} src="Purrfect-Escape-5.jpg" alt="Purrfect Escape 5" onClick={() => SetMedia(2, 4, 'Purrfect-Escape-5.jpg')} />
                </div>
                <br />
              </div>
              <div className='portfolio-section-box blurry-box'>
                <h5>{t('portfolio.project-summary')}</h5>
                {t('portfolio.project-purrfect-escape.summary')} <br />
                <br />
                {t('portfolio.project-tasks')} <br />
                <ul>
                  <li>{t('portfolio.project-purrfect-escape.task1')}</li>
                  <li>{t('portfolio.project-purrfect-escape.task2')}</li>
                  <li>{t('portfolio.project-purrfect-escape.task3')}</li>
                </ul>
                <div className='info-line'>
                  <img className='info-icon' src='user.png' alt='user' />
                  {t('portfolio.project-purrfect-escape.role')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='group.png' alt='group' />
                  {t('portfolio.project-purrfect-escape.team')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='time.png' alt='time' />
                  {t('portfolio.project-purrfect-escape.time')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='support.png' alt='support' />
                  {t('portfolio.project-purrfect-escape.skills')}
                </div>
                <br />
                <div className='play-button-container'>
                  <a className='play-button' href="https://master-yeet.itch.io/purrfect-escape" target="_blank">
                    {t('portfolio.project-play-in-browser')}
                    <img className='play-button-icon' src="itchio.png" alt="itch.io" />
                  </a>
                  <a className='source-button' href="https://github.com/chrisrobidas/Purrfect-Escape" target="_blank">
                    {t('portfolio.project-source')}
                    <img className='source-button-icon' src="github-logo.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className='background-container-stepping-stones content-container'>
            <br />
            <h3 id='stepping-stones' className='content'>
              Stepping Stones
            </h3>
            <div className='portfolio-section content'>
              <div className='portfolio-section-box'>
                {isVideo[3] &&
                  <video className='portfolio-main-media' autoPlay muted loop playsInline controls>
                    <source src={videoSrc[3]} type="video/mp4" />
                  </video>}
                {!isVideo[3] && <img className='portfolio-main-media' src={imgSrc[3]} alt="Main media" />}
                <div className='portfolio-medias'>
                  <img className={'portfolio-media' + (selectedMedia[3] == 0 ? ' portfolio-media-selected' : '')} src="Stepping-Stones-1.jpg" alt="Stepping Stones 1" onClick={() => SetMedia(3, 0, 'Stepping_Stones.mp4', true, true)} />
                  <img className={'portfolio-media' + (selectedMedia[3] == 1 ? ' portfolio-media-selected' : '')} src="Stepping-Stones-2.jpg" alt="Stepping Stones 2" onClick={() => SetMedia(3, 1, 'Stepping-Stones-2.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[3] == 2 ? ' portfolio-media-selected' : '')} src="Stepping-Stones-3.jpg" alt="Stepping Stones 3" onClick={() => SetMedia(3, 2, 'Stepping-Stones-3.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[3] == 3 ? ' portfolio-media-selected' : '')} src="Stepping-Stones-4.jpg" alt="Stepping Stones 4" onClick={() => SetMedia(3, 3, 'Stepping-Stones-4.jpg')} />
                  <img className={'portfolio-media' + (selectedMedia[3] == 4 ? ' portfolio-media-selected' : '')} src="Stepping-Stones-5.jpg" alt="Stepping Stones 5" onClick={() => SetMedia(3, 4, 'Stepping-Stones-5.jpg')} />
                </div>
                <br />
              </div>
              <div className='portfolio-section-box blurry-box'>
                <h5>{t('portfolio.project-summary')}</h5>
                {t('portfolio.project-stepping-stones.summary')} <br />
                <br />
                {t('portfolio.project-tasks')} <br />
                <ul>
                  <li>{t('portfolio.project-stepping-stones.task1')}</li>
                  <li>{t('portfolio.project-stepping-stones.task2')}</li>
                  <li>{t('portfolio.project-stepping-stones.task3')}</li>
                </ul>
                <div className='info-line'>
                  <img className='info-icon' src='user.png' alt='user' />
                  {t('portfolio.project-stepping-stones.role')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='group.png' alt='group' />
                  {t('portfolio.project-stepping-stones.team')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='time.png' alt='time' />
                  {t('portfolio.project-stepping-stones.time')}
                </div>
                <div className='info-line'>
                  <img className='info-icon' src='support.png' alt='support' />
                  {t('portfolio.project-stepping-stones.skills')}
                </div>
                <br />
                <div className='play-button-container'>
                  <a className='play-button' href="https://hyperguy.itch.io/stepping-stones" target="_blank">
                    {t('portfolio.project-play')}
                    <img className='play-button-icon' src="itchio.png" alt="itch.io" />
                  </a>
                  <a className='source-button' href="https://github.com/chrisrobidas/Stepping-Stones" target="_blank">
                    {t('portfolio.project-source')}
                    <img className='source-button-icon' src="github-logo.png" alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div id="about" className='background-container-about section content-container'>
          <h2 className='section-title content'>
            {t('portfolio.about')}
          </h2>
          <div className='section-hr content' />
          <br />
          <div className='about-section content'>
            <div className='about-section-box'>
              <div className='picture-container'>
                <img className='picture' src="picture.jpg" alt="Christopher Robidas" />
              </div>
              <br />
              <div>
                {t('portfolio.summary')}
              </div>
              <br />
            </div>
            <div className='about-section-box'>
              <h5 className='section-sub-title'>
                {t('portfolio.current-role')}
              </h5>
              <div>
                {t('portfolio.current-role-value')}
              </div>
              <br />
              <h5 className='section-sub-title'>
                {t('portfolio.education')}
              </h5>
              <div>
                {t('portfolio.education-value')}
              </div>
              <br />
              <h5 className='section-sub-title'>
                {t('portfolio.technical-skills')}
              </h5>
              <div>
                <b>{t('portfolio.languages')}</b> C#, C++, Python, SQL, Bash <br />
                <b>{t('portfolio.technologies')}</b> .NET, AWS, Docker, Kubernetes, Git, GitLab CI/CD, MySQL, Couchbase <br />
                <b>{t('portfolio.softwares')}</b> Unity, Unreal Engine, Visual Studio, PyCharm, Jira, Confluence, Wwise, Photoshop, Blender
              </div>
            </div>
          </div>
          <br />
        </div>
        <div id="contact" className='background-container-contact section content-container'>
          <h2 className='section-title content'>
            CONTACT
          </h2>
          <div className='section-hr content' />
          <br />
          <div className='contact-section content'>
            <div className='contact-box'>
              <h5>
                {t('portfolio.email')}
              </h5>
              <br />
              <a href='mailto:christopher.robidas@outlook.com'>
                <img className='contact-icon-link' src="email-square.png" alt="Email" />
              </a>
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
              <a href='https://www.linkedin.com/in/christopher-robidas-a661241a2/' target="_blank">
                <img className='contact-icon-link' src="linkedin-square.png" alt="LinkedIn" />
              </a>
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