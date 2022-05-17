const express = require("express")
const mongoose = require('mongoose')
const config = require('config')
const authRoutes = require('./routers/auth.routes')
const corsMiddleware = require("./middleware/cors.middleware")

const app = express()
const PORT = process.env.PORT || config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRoutes)

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'))
        console.log('mongoDB connected')
        app.listen(PORT, () => {
            console.log(`Server has been started on port: ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
