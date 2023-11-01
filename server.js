const app = require('./app')

// Gives us access to our environemnt variables in .env
require("dotenv").config()

const PORT = process.env.PORT

// Listener entry point to our app

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

