# Modules


## Standards

2 standards principaux (il en existe d'autres):
1. Commonjs
- Par défaut avec npm init (pas besoin de spécifier `"type":"commonjs"`)
- Utilisation des fonctions require et module.exports
- On peut utiliser l'extension ***.cjs*** à la place de ***.js*** pour les fichiers du projet
2. [ECMASCRIPT](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
- A spécifier `"type":"module"` dans le package.json pour pouvoir utiliser les fonctions import et export
- Utilisation des fonctions import et export
- L'import des modules peut se faire de manière asynchrone
- On peut utiliser l'extension ***.mjs*** à la place de ***.js*** pour les fichiers du projet

## 3 façons d'appeler les modules

### Exemple avec le module fs

1. De manière classique (par défaut) : `import * from node:fs` ou `const fs = require('node:fs')`
- Exécution des fonctions ***callback***, une fois que l'événement ou le résultat est disponible
2. De manière asynchrone avec les promesses, il faut rajouter le dossier ***/promises*** à la suite du nom du module : `import * from node:fs/promises` `const fs = require('node:fs/promises')`
- Exécution des fonctions `then()` en cas de succès et `catch()` en cas d'erreur
3. De manière synchrone, les fonctions sont appelées avec le suffixe ***Synch()*** : `import { readFileSync } from node:fs` `const { readFileSynch } = require('node:fs')`
- Exécution bloquante