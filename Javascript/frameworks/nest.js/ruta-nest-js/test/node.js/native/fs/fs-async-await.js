const { readFile } = require('node:fs/promises');

// IIFE - Immediately Invoked Function Expression

(
  async () => {
    console.log('Leyendo el  primer archivo')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log(text)
    console.log('Leyendo el segundo archivo')
    const text2 = await readFile('./archivo2.txt', 'utf-8')
    console.log(text2)
  }
)()

for (let i = 0; i < 10; i++) {
  console.log(i)
}
