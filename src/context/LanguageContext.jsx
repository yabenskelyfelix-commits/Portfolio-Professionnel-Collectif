import { createContext, useContext, useState } from "react";

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.team": "Équipe",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "home.title": "Portfolio Professionnel Collectif",
    "home.subtitle": "Une équipe, des compétences, des réalisations concrètes en développement Web full-stack.",
    "home.cta.team": "Découvrir l'équipe",
    "home.cta.projects": "Voir les projets",
    "footer.rights": "Tous droits réservés.",
    "team.title": "Notre équipe",
    "team.loading": "Chargement des statistiques GitHub...",
    "projects.title": "Nos projets",
    "projects.filter.all": "Tous",
    "contact.title": "Contactez-nous",
    "contact.name": "Nom",
    "contact.email": "Courriel",
    "contact.message": "Message",
    "contact.submit": "Envoyer",
    "contact.sending": "Envoi en cours...",
  },
  en: {
    "nav.home": "Home",
    "nav.team": "Team",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "home.title": "Collective Professional Portfolio",
    "home.subtitle": "One team, real skills, concrete full-stack web development achievements.",
    "home.cta.team": "Meet the team",
    "home.cta.projects": "View projects",
    "footer.rights": "All rights reserved.",
    "team.title": "Our team",
    "team.loading": "Loading GitHub stats...",
    "projects.title": "Our projects",
    "projects.filter.all": "All",
    "contact.title": "Contact us",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send",
    "contact.sending": "Sending...",
  },
};

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem(STORAGE_KEY) || "fr"
  );

  function toggleLanguage() {
    setLanguage((current) => {
      const next = current === "fr" ? "en" : "fr";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }

  function t(key) {
    return translations[language][key] || key;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider");
  return context;
}
