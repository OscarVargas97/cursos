import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log(text)
  console.log(text2)
})

for (let i = 0; i < 10; i++) {
  console.log(i)
}
