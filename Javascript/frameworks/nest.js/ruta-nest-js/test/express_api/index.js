const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234
const app = express()
app.disable('x-powered-by')

app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la informacion en el re.body
//     req.body = data
//     next()
//   })
// })

app.get('/', (req, res) => {
  res.send('<h1>Mi página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon/ditto', (req, res) => {
  res.json(req.body)
})

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
