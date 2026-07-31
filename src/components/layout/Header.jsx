import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import LanguageToggle from "../ui/LanguageToggle.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

function navLinkClass({ isActive }) {
  return isActive ? "nav-link nav-link-active" : "nav-link";
}

function Header() {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navigation principale">
        <NavLink to="/" end className="brand">
          Portfolio Collectif
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              {t("nav.home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipe" className={navLinkClass}>
              {t("nav.team")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" className={navLinkClass}>
              {t("nav.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              {t("nav.contact")}
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
