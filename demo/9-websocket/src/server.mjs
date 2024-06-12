import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Server } from 'socket.io'
const PORT = 5000
const app = createServer((req, res) => {
  const filename = resolve(dirname(fileURLToPath(import.meta.url)), 'index.html')
  createReadStream(filename).pipe(res) 
})

app.listen(PORT, () => {
  console.log('running http://localhost:'+PORT)
})

const io = new Server(app)

// Tous les événements doivent être à l'intérieur de l'événement connection
io.on('connection', (socket) => {
  console.log('nouvel utilisateur')
  socket.emit('hello', 'Bienvenue')
  socket.on('hi', (data) => {
    console.info('message recu du client', data)
  })
})