# Correction exercice 11

---

## Installation des packages

1. `npm install`

---

## Accès base de données

1. Copiez/Collez config/parameters.dev.js
2. Renommez la copie en parameters.js
3. Résultat finale présence du fichier config/parameters.js
4. Modifiez les infos d'accès à la base de données MongoDB depuis ce fichier en mettant à la place vos infos

---

## Lancement de l'application

1. `npm run start`

### Visites de pages répondant aux besoins de l'exercice

- GET /admin/users
- POST users/new en fournissant au moins un email et un mot de passe

### Scripts répondant aux besoins de l'exercice

Les scripts sont présents dans le package.json de la correction

- `npm run i:u:json` pour importer les utilisateurs du fichier json vers la base de données MongoDB
- `npm run i:u:api` pour importer les utilisateurs depuis l'API de JSON Placeholder vers la base de données MongoDB