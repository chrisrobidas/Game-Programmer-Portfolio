import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import englishTranslationHome from "./translations/english/home.json";
import englishTranslationAbout from "./translations/english/about.json";

import frenchTranslationHome from "./translations/french/home.json";
import frenchTranslationAbout from "./translations/english/about.json";

const resources = {
    english: {
        home: englishTranslationHome,
        about: englishTranslationAbout
    },
    french: {
        home: frenchTranslationHome,
        about: frenchTranslationAbout
    }
}

i18next
.use(initReactI18next)
.init({
    resources,
    lng: "english", // Default language
})

export default i18next;