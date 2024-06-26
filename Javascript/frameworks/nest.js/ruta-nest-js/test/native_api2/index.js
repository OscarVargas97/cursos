const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  console.log(method)
  switch (method) {
    case 'GET':{
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          return res.end('Not Found')
      }
    }
    case 'POST':{
      switch (url) {
        case '/pokemon/ditto':{
          let body = ''
          req.on('data', (chunk) => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos
            res.writeHead(201, { 'content-type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
        default:{
          res.statusCode = 404
          return res.end('Not Found')
        }
      }
    }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Server is listening on port 1234')
})
