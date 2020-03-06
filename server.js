/* eslint-disable */
const express = require('express')
const path = require('path')
const db = require('./db')


const app = express()


const port = process.env.PORT || 3000

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/api/products", async (req, res, next) => {
    db.readJSON('./products.json')
    .then( products => res.send(products))
    .catch(next)
})

app.post("/api/products", async (req, res, next) => {
    req.on('data', ())
})


app.listen(port, () => console.log(`listening on ${port}!`))
