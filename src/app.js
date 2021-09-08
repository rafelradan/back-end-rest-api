import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'

config()

import './config/dbConection'
import routes from './routes'


const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) =>{
    res.json({messsage: "api working", version: "1.0" })
})


app.use(routes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))


