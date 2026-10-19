import color from 'colors'
import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import Db from './src/config/db.js'
import productRoutes from './src/router/products.route.js'
import stockRoutes from './src/router/stocks.route.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use('/api/products',productRoutes)
app.use('/api/stocks',stockRoutes)

const portno = process.env.PORT
Db()

app.listen(portno, ()=>{
    console.log(color.green(`Server is running port ${portno}`))
})
