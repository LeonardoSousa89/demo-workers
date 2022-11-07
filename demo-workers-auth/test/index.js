const port    = process.env.PORT || 8005
const express = require('express')
const policy  = require('cors')

const testRoute = require('./test')

const app = express()

app.use(express.json())
app.use(policy({origin:'*'}))
app.use(express.urlencoded({extended:true}))

app.use('/test', testRoute)

app.listen(port,()=>console.log(`online into ${port}`))
