import express  from 'express'
import { ReadStream, readFile } from 'fs'
import { readFile as readFilePromise } from 'node:fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
const app = express()
const PORT = process.env.PORT || '3000'
const src = dirname(fileURLToPath(import.meta.url))
const homepage = join(src, 'views', 'index.html')
// Routes static sur le dossier public/css = tous les fichiers dans public/css/* seront accessibles
app.use(express.static(join(src, 'public', 'css')))
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  // idéal pour les fichiers volumineux ou envoyer dès que possible du contenu au client
  const rs = new ReadStream(join(src, 'views', 'index.html'))
  rs.pipe(res)
  rs.on('error', (error) => {
    res.status(500).send(`Error 500 chargement page d'accueil : ${error.message}`)
  })
})

app.get('/sign-up', (req, res) => {
  // idéal pour les très petits fichiers
  readFile(homepage.replace('index', 'sign-up'), (error, content) => {
    if(error) {
      res.status(500).send(`Erreur chargement page d'inscription : ${error.message}`)
      return
    }
    res.setHeader('Content-Type', 'text/html').send(content)
  })
})

app.get('/news', (req, res) => {
  // idéal pour les très petis fichiers et une gestion avec les promesses
  readFilePromise(homepage.replace('index', 'news'))
  .then((html) => {
    res.setHeader('Content-Type', 'text/html').send(html)
  })
  .catch((error) => {
    res.status(500).send(`Erreur chargement page d'actualité : ${error.message}`)
  })
})

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`)
})