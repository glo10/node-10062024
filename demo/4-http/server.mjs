import { createServer } from 'node:http'

const PORT = 3000
// req objet qui contient les infos sur la requête du client
// res objet qui permet de renvoyer une réponse au client
// la callback anonyme (fonction sans nom) s'exécute lors de l'arrivée d'une requête cliente
createServer((req, res) => {
  // Envoie des en-têtes HTTP pour spécifier au client le type de contenu retourné par le serveur
  // pour le html le content type est text/html
  // pour le json, c'est application/json
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'})
  res.write('<h1>Hello world</h1>')
  // sans le end, le client va rester en attente de réponse (en cours de chargement de manière infini jusqu'à l'arret éventuel du Navigateur)
  res.end(`Requête sur ${req.url} avec la méthode ${req.method}`)
}).listen(PORT, () => {
  console.info(`Ecoute sur http://localhost:${PORT}`)
})