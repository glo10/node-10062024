# Exercice 7 : routes dynamiques

1. Générez un nouveau projet avec express le moteur de template pug
1. Mettez en place des routes dynamiques sur la page des news avec Express

## Spécifications techniques

- L'application tourne sur le ***PORT 7000***
- La route dynamique pour une actualité est `news/:id` avec l'ID correspondant à la propriété id d'une actualité
- Pour la route news/1 par exemple, il faut récupérer les informations de l'article ayant l'ID 1 depuis le fichier [ressources/json/news.json](./ressources/ex7.zip)