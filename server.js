const express = require('express')
const cors = require('cors')

const app = express();

var corsOptions = {
    origin: 'https://localhost:8081'
}

// middleware

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// testing api

app.get('/', (req, res) => {
    res.json({ message: 'Hello from API' })
})

// port

const PORT = process.env.PORT || 3000

// server

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})