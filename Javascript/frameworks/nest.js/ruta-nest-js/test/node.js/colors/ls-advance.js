const fsp = require('node:fs/promises')
const path = require('node:path')
const { styleText } = require('node:util')

function consoleError (message) {
  console.error(styleText('red', message))
  process.exit(1)
}

function consoleSusses (message) {
  console.log(styleText('green', message))
}

const folder = process.argv[2] ?? '.'
async function ls (folder) {
  let files
  try {
    files = await fsp.readdir(folder)
  } catch (err) {
    consoleError(`No se pudo leer el directorio ${files}`)
  }
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fsp.stat(filePath) // información del archivo
    } catch {
      consoleError(`No se pudo leer el archivo ${file}`)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()
    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
  })
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => {
    consoleSusses(fileInfo)
  })
}

ls(folder)
