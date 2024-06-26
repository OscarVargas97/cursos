const urls = require('./urls')

function loadEnvFile () {
  try {
    process.loadEnvFile('./.env')
  } catch {
    console.error('No .env file found')
  }
}

function assignPort (server, desiredPort) {
  server.listen(desiredPort, () => {
    console.log(`Server is listening on port ${desiredPort}`)
  })
}
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(urls.resolve(req))
}

module.exports = {
  loadEnvFile,
  assignPort,
  processRequest
}
