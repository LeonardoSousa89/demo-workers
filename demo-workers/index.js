const consign = require('consign')
const express = require('express')

const db = require('./db/db')

const port = process.env.PORT || 8006
const app = express()

app.db = db

consign()
    .then('./config/expss.js')
    .then('./api')
    .then('./routes')
    .into(app)


app.listen(port,()=>console.log(`online into port: ${port}`))