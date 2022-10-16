import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)
app.get('/', (req, res) => {res.status(200).send('runing')})

app.listen(port, () => console.log(`App listening on port ${port}!`))