import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {
  const { t, i18n } = useTranslation(['portfolio']);

  return (
    <>
      <h1 className='programmer-name'>
        Christopher Robidas
      </h1>
      <h2>
        Game Programmer
      </h2>
      <div>{t("portfolio.hello")}</div>
      <div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div><div>{t("portfolio.hello")}</div>
    </>
  )
}

export default Portfolio;