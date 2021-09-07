import express from "express";
import './config/dbConection'

import routes from "./routes";



const app = express()
app.use(express.json())


app.get('/', (req, res) =>{
    res.json({"messsage": "api working" })
})


app.use(routes)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))


