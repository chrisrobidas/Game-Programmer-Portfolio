import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t, i18n } = useTranslation(['home']);

  return (
    <>
      <h1>
        About
      </h1>
    </>
  )
}

export default About;