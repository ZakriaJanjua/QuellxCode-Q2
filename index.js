const express = require("express")
const fs = require('fs')
const volleyball = require('volleyball')
const apiCall = require('./api/index')
const api = require('./api/try')
const auth = require('./auth/index')
const middleware = require('./auth/middleware')
const app = express()

app.use(volleyball)
app.use(express.json())

app.get('/', (req, res, next) => {
    res.json({
        message: 'welcome'
    })
})

app.use('/auth', auth)

app.get('/weather', middleware.verifyToken, (req, res, next) => {
    fs.readFile('weather.json', (err, data) => {
        if (err) res.send(400).json('Could not fetch data')
        let jsonData = JSON.parse(data)
        res.json(jsonData)
    })
})




app.use('/api', api)
app.listen(5000, () => console.log('running server'))