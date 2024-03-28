import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import englishTranslationAbout from "./translations/english/about.json";
import englishTranslationContact from "./translations/english/contact.json";
import englishTranslationFooter from "./translations/english/footer.json";
import englishTranslationNavbar from "./translations/english/navbar.json";
import englishTranslationPortfolio from "./translations/english/portfolio.json";

import frenchTranslationAbout from "./translations/french/about.json";
import frenchTranslationContact from "./translations/french/contact.json";
import frenchTranslationFooter from "./translations/french/footer.json";
import frenchTranslationNavbar from "./translations/french/navbar.json";
import frenchTranslationPortfolio from "./translations/french/portfolio.json";

const resources = {
    english: {
        about: englishTranslationAbout,
        contact: englishTranslationContact,
        footer: englishTranslationFooter,
        navbar: englishTranslationNavbar,
        portfolio: englishTranslationPortfolio
    },
    french: {
        about: frenchTranslationAbout,
        contact: frenchTranslationContact,
        footer: frenchTranslationFooter,
        navbar:frenchTranslationNavbar,
        portfolio: frenchTranslationPortfolio
    }
}

i18next
.use(initReactI18next)
.init({
    resources,
    lng: "english", // Default language
})

export default i18next;