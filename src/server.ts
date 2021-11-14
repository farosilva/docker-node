import express from 'express'

require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

const app = express()

app.get('/', (req, res) => {
  res.send('Setup Node with Typescript!')
})

app.listen(process.env.EXPRESS_PORT)