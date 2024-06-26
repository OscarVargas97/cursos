const http = require('node:http')
const { loadEnvFile, processRequest, assignPort } = require('./utils')

loadEnvFile()
const desiredPort = process.env.PORT ?? 3000
const server = http.createServer(processRequest)
assignPort(server, desiredPort)
