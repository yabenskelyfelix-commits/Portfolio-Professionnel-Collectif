import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section>
        <h1>Projet introuvable</h1>
        <p>Aucun projet ne correspond à cet identifiant.</p>
        <Link className="btn btn-secondary" to="/projets">
          Retour aux projets
        </Link>
      </section>
    );
  }

  return (
    <section>
      <span className="project-category">{project.category}</span>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul className="project-tech">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link className="btn btn-secondary" to="/projets">
        Retour aux projets
      </Link>
    </section>
  );
}

export default ProjectDetail;
