module.exports.initApp = async function () {
    const express = require('express')
    const bodyParser = require('body-parser')
    const router = require('./routes/routes.js')
    const Logger = require('node-json-logger');

    const app = express()
    const port = 3000
    const logger = new Logger();

    //middleware
    app.use(bodyParser.json())
    app.use(await router.Routes());

    // Making our Rest API listen to requests on the port 3000
    app.listen(port, () => {
        logger.info(`API Listening on port: ${port}`)
    })
}