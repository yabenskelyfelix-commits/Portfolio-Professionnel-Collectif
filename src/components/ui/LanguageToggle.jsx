import { useLanguage } from "../../context/LanguageContext.jsx";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Changer la langue d'affichage"
    >
      {language === "fr" ? "FR" : "EN"}
    </button>
  );
}

export default LanguageToggle;
