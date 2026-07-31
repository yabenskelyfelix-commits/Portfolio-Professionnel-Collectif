function ProjectFilter({ categories, activeCategory, onChange, allLabel }) {
  return (
    <div className="project-filter" role="group" aria-label="Filtrer les projets par catégorie">
      <button
        type="button"
        className={activeCategory === "Tous" ? "btn btn-primary" : "btn btn-secondary"}
        onClick={() => onChange("Tous")}
      >
        {allLabel}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={activeCategory === category ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;
