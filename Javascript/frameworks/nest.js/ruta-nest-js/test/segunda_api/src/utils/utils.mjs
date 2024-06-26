export function loadEnvFile (path = '.env') {
  try {
    process.loadEnvFile(path)
  } catch {
    console.error('No .env file found')
  }
}
