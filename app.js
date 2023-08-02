const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our website!')
  }
  if (req.url === '/about') {
    res.end('Here we have more informations about our website')
  }
})

server.listen(5000)