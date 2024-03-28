import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t, i18n } = useTranslation(['home']);

  return (
    <>
      <h1>
        Contact
      </h1>
    </>
  )
}

export default Contact;