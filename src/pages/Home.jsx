import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

function Home() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" to="/equipe">
          {t("home.cta.team")}
        </Link>
        <Link className="btn btn-secondary" to="/projets">
          {t("home.cta.projects")}
        </Link>
      </div>
    </section>
  );
}

export default Home;
