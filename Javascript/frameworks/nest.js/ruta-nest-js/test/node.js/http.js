const http = require('node:http')
const { findAvailablePort } = require('./native/net/net.js')

try {
  process.loadEnvFile('./.env')
} catch {
  console.error('No .env file found')
}
const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hello World')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
})
