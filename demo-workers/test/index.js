const cors      = require('cors')
const express   = require('express')

const testRouter = require('./testRoute')

const port = process.env.PORT || 8006 
const app  = express()

app.use(express.json())
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended:true}))

app.use('/test', testRouter)

app.listen(port,()=>console.log(`online into port: ${port}`))