# Testing

---

## Tests unitaires sur les fonctions math.mjs de l'exercice 3

- `npm run test:unit`


## Tests d'intégration routes du serveur de l'exercice 5

- Lancez le serveur web de l'exercice 5
- `npm run test:int:ex5`


## Tests E2E sur une page d'inscription présent dans le dossier front

1. Récupérez les données des villes et pays depuis [Dépot API  Countries States Cities Database](https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json), copiez/collez le contenu dans le fichier tests/front/src/data/location.json
2. Lancez l'application avec l'extension VS Code Live Server depuis le fichier tests/front/src/index.html
3. Modifiez le port s'il est différent de 5500 dans le fichier de configuration de Cypress cypress.config.js au niveau de la ligne 8.
4. Exécutez la commande `npm run test:e2e` pour lancez les tests.