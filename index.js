const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
app.use(cors())

const chef = require('./json/chef.json')

app.get('/', (req, res) => {

    res.send("Chef Cuisine Explorer API is Running")

})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.listen(port, () => {

    console.log(`Chef Cuisine Explorer API is Running on Port: ${port}`)

})