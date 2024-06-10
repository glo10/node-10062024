# Exercice 9

## Modalités

- Vous pouvez partir de l'exercice 8 ou créez un nouveau projet
- Utilisez le client ***ThunderClient Visual Studio Code*** pour effectuer vos requêtes vers votre serveur Express

## Enoncé

1. Renvoyez au client, un JSON `{"message":"success"}` lorsque les informations envoyées en JSON par le client ont été enregistrées correctement dans un fichier `users.json` (à créer et à placer librement dans votre projet dans un dossier dédié)
- Le client envoie son email et un mot de passe en JSON sur la route `/users/sign-up` avec la méthode `POST`
- Exemple des données JSON  `{ "email": "john@doe.com", "password": "admin", "name": "john", "age": 45}`
2. Le client effectue une requête sur la route `/users/sign-in` avec son email et mot de passe en JSON.

- Vous devez retourner un ***token*** généré à partir d'un algorithme de cryptage, une information personnelle du client ainsi que d'un SECRET après avoir vérifié que l'utilisateur existe dans votre fichier `users.json` et que le mot de passe en clair fourni est identique au mot de passe crypté stocké dans le fichier `users.json` 