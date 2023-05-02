const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {

    res.send("Chef Cuisine Explorer API is Running")

})

app.listen(port, () => {

    console.log(`Chef Cuisine Explorer API is Running on Port: ${port}`)

})