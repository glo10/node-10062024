# 3 façons d'appeler les modules

## Exemple avec le module fs

1. De manière classique (par défaut) : `import * from node:fs` ou `const fs = require('node:fs')`
- Exécution des fonctions ***callback***, une fois que l'événement ou le résultat est disponible
2. De manière asynchrone avec les promesses, il faut rajouter le dossier ***/promises*** à la suite du nom du module : `import * from node:fs/promises` `const fs = require('node:fs/promises')`
- Exécution des fonctions `then()` en cas de succès et `catch()` en cas d'erreur
3. De manière synchrone, les fonctions sont appelées avec le suffixe ***Synch()*** : `import { readFileSync } from node:fs` `const { readFileSynch } = require('node:fs')`
- Exécution bloquante