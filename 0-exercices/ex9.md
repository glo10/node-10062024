# Exercice 9 : authentification bcrypt et jsonwebtoken

## Modalités

- Vous pouvez partir de l'exercice 8 ou créez un nouveau projet
- Utilisez le client ***ThunderClient Visual Studio Code*** pour effectuer vos 2 requêtes vers votre serveur Express avec la méthode POST pour envoyer et récupérer des informations au format JSON.

## Enoncé

1. Renvoyez au client, un JSON `{"message":"success"}` et un code ***HTTP 201*** lorsque les informations envoyées en JSON par le client ont été enregistrées correctement dans un fichier `users.json` (à créer et à placer librement dans votre projet dans un dossier dédié) à partir d'une requête avec la méthode ***POST***
- Le client envoie son email et un mot de passe en clair JSON sur la route `/users/sign-up` avec la méthode `POST`. Exemple des données JSON  `{ "email": "john@doe.com", "password": "admin", "name": "john", "age": 45}`
- Les informations envoyées par le client sont stockées dans le fichier users.json avec le mot de passe haché.
2. Le client effectue une requête sur la route `/users/sign-in` avec son email et mot de passe en JSON avec la méthode ***POST***.

- Vous devez retourner un ***token*** généré à partir de ***jsonwebtoken*** après avoir vérifié que l'utilisateur existe dans votre fichier `users.json` et que le mot de passe en clair fourni est identique au mot de passe haché stocké dans le fichier `users.json` 