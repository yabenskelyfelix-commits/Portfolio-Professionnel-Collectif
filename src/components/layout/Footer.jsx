import { useLanguage } from "../../context/LanguageContext.jsx";

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} Portfolio Professionnel Collectif — {t("footer.rights")}
      </p>
    </footer>
  );
}

export default Footer;
