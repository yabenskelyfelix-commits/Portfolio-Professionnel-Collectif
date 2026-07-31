import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>404 — Page introuvable</h1>
      <p>La page demandée n'existe pas.</p>
      <Link className="btn btn-primary" to="/">
        Retour à l'accueil
      </Link>
    </section>
  );
}

export default NotFound;
