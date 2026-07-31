import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="project-tech">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link className="btn btn-secondary" to={`/projets/${project.id}`}>
        Voir les détails
      </Link>
    </article>
  );
}

export default ProjectCard;
