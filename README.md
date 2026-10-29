# Portfolio — Mohamed Aziz Melki

Software Engineer · Data, IA & MLOps · Tunis

Site statique fait à la main : HTML, CSS et JavaScript vanilla, sans framework ni dépendance.

## Ce qu'on y trouve

- Un pipeline CI/CD animé dans le hero, avec une vue **Interface** et une vue **Jenkinsfile**
- Un explorateur de projets façon IDE (onglets Aperçu, Architecture et Impact), une galerie navigable au clavier et un zoom sur les captures
- Un « Stack explorer » : on clique sur une technologie pour voir les projets qui l'utilisent
- Une palette de commandes `⌘K` / `Ctrl+K`
- Des animations au scroll avec `IntersectionObserver`, qui respectent `prefers-reduced-motion`

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement

Le site est déployé sur Vercel. Chaque push sur `main` met la production à jour automatiquement.
