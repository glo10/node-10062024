# Testing

---

## Tests unitaires sur les fonctions math.mjs de l'exercice 3

- `npm run test:unit`


## Tests d'intégration routes du serveur de l'exercice 5

- Lancez le serveur web de l'exercice 5
- `npm run test:http:ex5`


## Tests E2E sur une page d'inscription présent dans le dossier front

- Lancez l'application avec Live Server depuis le fichier tests/front/src/index.html
- Modifiez le port s'il est différent de 5500 depuis le fichier de configuration de Cypress cypress.config.js au niveau de la ligne 8.
- Exécutez la commande `npm run test:e2e` pour lancez les tests. Il y a 2 tests échouent (tests qui sera corrigé prochainement)