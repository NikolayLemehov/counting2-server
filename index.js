const express = require("express")
const authRoutes = require('./routers/auth.routes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})