# Checklist d'Accessibilité — Tâche 1

À valider avant la soutenance (critère "Intégration UI/UX et Sémantique" — grille d'évaluation).

## Structure sémantique
- [ ] Un seul `<h1>` par page
- [ ] Hiérarchie des titres respectée (`h1` → `h2` → `h3`, pas de saut)
- [ ] `<header>`, `<nav>`, `<main>`, `<footer>` présents sur chaque page
- [ ] Un seul `<main>` par page, avec `id="main-content"`
- [ ] Listes de navigation dans des `<ul>`/`<li>`

## Navigation clavier
- [ ] Lien d'évitement ("Aller au contenu principal") fonctionnel et visible au focus
- [ ] Tous les éléments interactifs sont atteignables au `Tab`
- [ ] `:focus-visible` visible sur tous les liens/boutons/champs (contour bleu 3px)
- [ ] Ordre de tabulation logique (de haut en bas, gauche à droite)

## Formulaires
- [ ] Chaque `<input>`/`<textarea>` a un `<label for="...">` associé
- [ ] Champs obligatoires marqués `required` + `aria-required="true"`
- [ ] Messages d'erreur liés via `aria-describedby` et `role="alert"`
- [ ] Zone de statut de soumission en `aria-live="polite"` (annonce sans reload)
- [ ] Type d'input correct (`email`, `text`, etc.) pour clavier mobile adapté

## ARIA
- [ ] `aria-current="page"` sur le lien de navigation actif
- [ ] `aria-pressed` sur les boutons toggle (thème, filtres)
- [ ] `aria-label` sur les boutons sans texte visible (icônes seules)
- [ ] Pas d'usage abusif d'ARIA quand un élément HTML natif suffit

## Contraste des couleurs (WCAG AA — ratio ≥ 4.5:1 texte normal, ≥ 3:1 texte large)
- [ ] Texte principal sur fond clair : `#1a1d21` sur `#ffffff` → conforme
- [ ] Texte principal sur fond sombre : `#f1f3f5` sur `#14161a` → conforme
- [ ] Vérifier avec l'outil : https://webaim.org/resources/contrastchecker/
- [ ] Ne jamais transmettre d'info uniquement par la couleur (ex: erreur = couleur + icône/texte)

## Images
- [ ] Toutes les `<img>` ont un attribut `alt` descriptif (jamais vide sauf décoratif)
- [ ] Images décoratives : `alt=""` explicite

## Responsive
- [ ] Testé à 320px, 768px, 1024px, 1440px de largeur
- [ ] Pas de scroll horizontal indésirable
- [ ] Cibles tactiles (boutons/liens) d'au moins 44x44px sur mobile

## Validation W3C (obligatoire — critère noté séparément)
- [ ] HTML validé sur https://validator.w3.org/
- [ ] CSS validé sur https://jigsaw.w3.org/css-validator/
- [ ] Captures d'écran des résultats à inclure dans le rapport PDF

## Réduction de mouvement
- [ ] `@media (prefers-reduced-motion: reduce)` respecté (déjà dans reset.css)
