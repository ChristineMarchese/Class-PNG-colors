
// Import express and initialize an instance of the express server
const express = require('express')
const app = express()
const colorsController = require('./controller/colorsController')

// Import cors
const cors = require('cors')

// Middleware
app.use(cors())
// app.use(express.json())
//When the url starts w /colors use the colorsController to route as apprropriately
app.use("/colors", colorsController)



// 
app.get('/', (req, res) => {
    res.send('Welcome to Colors App!')
})

module.exports = app

