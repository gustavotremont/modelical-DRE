import app from './app'
import dotenv from 'dotenv'

dotenv.config()
const expressPort = process.env.PORT ?? 3000

async function main(): Promise<void> {
  try {
    app.listen(expressPort)
    console.log('server is listening on port: ', expressPort)
  } catch (error) {
    console.log(error)
  }
}

void main()
