# Rappels sur l'asynchrone

Pour faire de l'asynchrone
1. Fonctions de callback (exemple les fonctions appelées après addEventListener('click', callback))
2. L'objet [XMLHTTPRequest]()
2. [fetch]()
3. Les promesses : (une promesse d'avoir ou non un résultat plus tard)
- Un objet qui prend en paramètre 2 fonctions, la fonction resolve() et la fonction reject()
- La fonction resolve() à exécuter en cas de succès (obtention d'un résultat positif de la promesse) et retourne une promesse avec le résultat
- La fonction reject() à exécuter en cas d'erreur, renvoie également une promesse avec le message d'erreur
- Pour récupérer le résultat de la promesse, il faut utiliser une autre fonction qui est then()
- resolve et then vont ensemble
- Pour récupérer l'erreur de la promesse, fonction catch()
- reject et catch vont ensemble
4. Les mots-clés async et await, permet d'attendre le résultat d'une requête asynchrone avant d'exécuter la suite du programme = rendre le traitement synchrone.