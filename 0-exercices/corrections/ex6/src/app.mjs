import express  from 'express'
import { createReadStream, readFile } from 'fs'
import { readFile as readFilePromise } from 'node:fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
const app = express()
const PORT = process.env.PORT || '3000'
const src = dirname(fileURLToPath(import.meta.url))
const homepage = join(src, 'views', 'index.html')
// Routes static
app.use(express.static(join(src, 'public', 'css')))
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  // idéal pour les fichiers volumineux ou envoyer dès que possible du contenu au client
  createReadStream(join(src, 'views', 'index.html')).pipe(res)
})

app.get('/sign-up', (req, res) => {
  // idéal pour les très petits fichiers
  readFile(homepage.replace('index', 'sign-up'), (error, content) => {
    if(error) {
      res.status(500).send(`Error 500 : ${error.message}`)
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
    res.status(500).send(`Error 500 : ${error.message}`)
  })
})

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`)
})