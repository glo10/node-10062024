import { createServer } from "node:http";
import { createReadStream } from "node:fs";
const PORT = 7000
/**
 * Lecture du fichier et réponse du fichier JSON au client
 * Attention pour les chemins, il faut toujours le construire par l'intermédiaire des méthodes du module path
 * Pour éviter d'avoir des erreurs du type no such file car le chemin comme indiqué ici
 * dépend fortement de l'emplacement ou sera lancé l'application
 * Si c'est lancer à la racine du projet, ça fonctionnera
 * En dehors de la racine du projet, erreur no such file ...
*/
const readCitiesStream = createReadStream("cities.json");
createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'})
  readCitiesStream.pipe(res) // pipe ferme automatiquement dès que c'est fini
}).listen(PORT, () => {
  console.log('http://localhost:PORT')
});
