const urls = {
  '/': 'Bienvenido a la página principal',
  '/home': 'Bienvenido a la pagina Home'
}

function resolve (req) {
  const res = urls[req.url]
  if (res) {
    return res
  }
  console.log('No existe Url')
  return 'Not found'
}

module.exports = {
  resolve
}
