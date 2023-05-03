const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
app.use(cors())

const chef = require('./json/chef.json')
const chefDetails = require('./json/chefDetails.json')

app.get('/', (req, res) => {

    res.send("Chef Cuisine Explorer API is Running")

})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/chefDetails/:id', (req, res) => {
    const chefId = req.params.id
    const chefDetail = chefDetails.find(chef => parseInt(chef.id) === parseInt(chefId))
    res.send(chefDetail)
})


app.listen(port, () => {

    console.log(`Chef Cuisine Explorer API is Running on Port: ${port}`)

})