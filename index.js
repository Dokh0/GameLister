const { checkConnection, syncModels } = require('./database/index')
const { setRelations } = require('./database/models')
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()

async function connectDB() {
    await checkConnection()
    setRelations()
    await syncModels('alter')
}

function launchServer() {
    const app = express()
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .use('/api', require('./api/routes/index'))
        .listen(process.env.PORT, () => {
            console.log("Express server listening on port 3000")
        })
}

async function startAPI() {
    await connectDB()
    launchServer()
}

startAPI()