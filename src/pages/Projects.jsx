import { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import ProjectFilter from "../components/projects/ProjectFilter.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

function Projects() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = useMemo(
    () => [...new Set(projects.map((project) => project.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section>
      <h1>{t("projects.title")}</h1>
      <ProjectFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
        allLabel={t("projects.filter.all")}
      />
      <div className="card-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
