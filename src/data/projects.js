// Données des projets/réalisations affichées dans la galerie filtrable.
export const projects = [
  {
    id: "devoir-1",
    title: "Devoir 1",
    category: "Devoir",
    summary: "Première réalisation du cours LOG3500 : mise en page HTML/CSS et bases de l'intégration Web.",
    description:
      "Ce projet couvre les fondations de l'intégration Web vues en début de session : structure sémantique, mise en page responsive et bonnes pratiques d'accessibilité.",
    tech: ["HTML5", "CSS3"],
    link: "#",
  },
  {
    id: "devoir-2",
    title: "Devoir 2",
    category: "Devoir",
    summary: "Deuxième réalisation du cours LOG3500 : interactivité et manipulation du DOM en JavaScript.",
    description:
      "Ce projet met en pratique la manipulation du DOM, la gestion d'événements et les premières briques de logique applicative côté client.",
    tech: ["JavaScript", "DOM"],
    link: "#",
  },
  {
    id: "portfolio-collectif",
    title: "Portfolio Professionnel Collectif",
    category: "Projet de session",
    summary: "Application web monopage full-stack : React, Express et déploiement continu sur Railway.",
    description:
      "Le projet de session lui-même : une SPA React (Vite, React Router v6, Context API) connectée à un serveur Node.js/Express qui gère un formulaire de contact avec persistance JSON, déployée automatiquement sur Railway.",
    tech: ["React", "Vite", "React Router", "Express", "Node.js"],
    link: "#",
  },
];
