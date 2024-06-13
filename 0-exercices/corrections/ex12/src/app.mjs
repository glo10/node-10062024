import { createServer } from 'node:http'
import { ReadStream } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Server } from 'socket.io'
const PORT = 8000

const baseDir = dirname(fileURLToPath(import.meta.url))
const app = createServer((req, res) => {
  const htmlStream = new ReadStream(resolve(baseDir, 'index.html'))
  htmlStream.pipe(res)
  htmlStream.on('error', (error) => {
    res.writeHead(500)
    res.end(`Error serveur impossible de charger la page : ${error.message}`)
  })
})
app.listen(PORT, () => {
  console.info(`Ecoute sur le http://localhost:${PORT}`)
})

const io = new Server(app)
io.on('connection', (socket) => {
  socket.emit('app:logged', 'Bienvenue')
  socket.on('app:new-message', (message) => {
    io.emit('app:new-message', message)
  })
  socket.on('disconnect', (reason) => {
    console.log('deconnexion', reason)
    io.emit('app:new-message', 'Un utilisateur nous a quitté ou à rechargé sa page')
  })
})


