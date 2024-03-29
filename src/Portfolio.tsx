import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {
  const { t, i18n } = useTranslation(['portfolio']);

  return (
    <>
      <div className='empty-space'/>
      <br/>
      <h1 className='programmer-name'>
        Christopher Robidas
      </h1>
      <h2>
        Game Programmer
      </h2>
      <div>{t("portfolio.hello")}</div>
      <div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div>
      <br/>
    </>
  )
}

export default Portfolio;