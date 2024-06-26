const fs = require('node:fs')
const fsp = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fsp.readdir(folder)
  } catch (err) {
    console.error(`No se pudo leer el directorio ${files}`)
    process.exit(1)
  }
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fsp.stat(filePath) // información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${file}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()
    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
  })
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => {
    console.log(fileInfo)
  })
}

ls(folder)
