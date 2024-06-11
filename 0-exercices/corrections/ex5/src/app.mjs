import { createServer } from 'http'
import { createReadStream } from 'fs'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'url' // la fonction fileURLToPath transforme url en chemin
const PORT = 5000
// en commonjs la variable globale __filename permet de récupérer directement le chemin absolu du fichier exécuté
const currentFilePath = fileURLToPath(import.meta.url) // en ECMASCRIPT import.meta.url contient le chemin absolue du fichier en cours
// en comminjs la variable globale __dirname permet de récupérer le chemin absolu du dossier du programme en cours
const currentFileDir = dirname(currentFilePath)
createServer((req, res) => {
  let filename = resolve(currentFileDir, 'views', '404.html')
  if (req.url.endsWith('index.html') || /\/$/.test(req.url)) {
    filename = filename.replace('404', 'index')
    createReadStream(filename).pipe(res)
  }
  else if(req.url.endsWith('.css')) {
    let cssFilename = join(currentFileDir, 'views', req.url)
    res.writeHead(200, { "Content-Type" : "text/css"})
    createReadStream(cssFilename, 'UTF-8').pipe(res)
  }
  else if(req.url.match('.+[jpg`|jpeg|png]$')) {
    let imgFilename = join(currentFileDir, 'views', req.url)
    res.writeHead(200, { "Content-Type" : "image/png"})
    createReadStream(imgFilename).pipe(res)
  } else if(req.url.match('favicon\.ico')) {
    return
  }
  else {
    createReadStream(filename).pipe(res)
  }
}).listen(PORT, () => {
  console.info(`Running on http://localhost:${PORT}`)
})