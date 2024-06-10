import { createServer } from 'node:http'

const PORT = 3000
createServer((req, res) => {
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'})
  res.write('<h1>Hello world</h1>')
  res.end(`Requête sur ${req.url} avec la méthode ${req.method}`)
}).listen(PORT, () => {
  console.info(`Ecoute sur http://localhost:${PORT}`)
})