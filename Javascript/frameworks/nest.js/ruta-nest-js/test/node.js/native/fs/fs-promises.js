const fs = require('node:fs/promises')

console.log('Leyendo el  primer archivo')
const text = fs.readFile('./archivo.txt', 'utf-8')
  .then((text) => {
    console.log(text)
  })
console.log('Leyendo el segundo archivo')
const text2 = fs.readFile('./archivo2.txt', 'utf-8')
  .then((text) => {
    console.log(text)
  })

for (let i = 0; i < 1000000; i++) {
  console.log(i)
}
