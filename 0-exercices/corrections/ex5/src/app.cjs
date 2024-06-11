const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 5000

http.createServer((req, res) => {
  let filename = path.resolve(__dirname, 'views', '404.html')
  if (req.url.endsWith('index.html') || /\/$/.test(req.url)) {
    filename = filename.replace('404', 'index')
    fs.createReadStream(filename).pipe(res)
  }
  else if(req.url.endsWith('.css')) {
    let cssFilename = path.join(__dirname, 'views', req.url)
    res.writeHead(200, { "Content-Type" : "text/css"})
    fs.createReadStream(cssFilename, 'UTF-8').pipe(res)
  }
  else if(req.url.match('.+[jpg`|jpeg|png]$')) {
    let imgFilename = path.join(__dirname, 'views', req.url)
    res.writeHead(200, { "Content-Type" : "image/png"})
    fs.createReadStream(imgFilename).pipe(res)
  } else if(req.url.match('favicon.ico')) {
    return
  }
  else {// 404
    fs.createReadStream(filename).pipe(res)
  }
}).listen(PORT, () => {
  console.info(`Running on http://localhost:${PORT}`)
})