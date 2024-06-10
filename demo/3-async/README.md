# Rappels sur l'asynchrone

Pour faire de l'asynchrone
1. Fonctions de callback (exemple les fonctions appelées après addEventListener('click', callback))
2. L'objet [XMLHTTPRequest](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
2. [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)
3. Les [promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) : (une promesse d'avoir ou non un résultat plus tard)
- Un objet qui prend en paramètre 2 fonctions, la fonction [resolve()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) et la fonction [reject()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
- La fonction resolve() à exécuter en cas de succès (obtention d'un résultat positif de la promesse) et retourne une promesse avec le résultat
- La fonction reject() à exécuter en cas d'erreur, renvoie également une promesse avec le message d'erreur
- Pour récupérer le résultat de la promesse, il faut utiliser une autre fonction qui est then()
- resolve et then vont ensemble
- Pour récupérer l'erreur de la promesse, fonction catch()
- reject et catch vont ensemble
4. Les mots-clés async et await, permet d'attendre le résultat d'une requête asynchrone avant d'exécuter la suite du programme = rendre le traitement synchrone.
4. [webworkers](https://developer.mozilla.org/fr/docs/Web/API/Web_Workers_API/Using_web_workers)