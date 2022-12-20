require('dotenv').config()
const { json } = require('body-parser')
require('./config/database.connection.js').connect()
const express=require('express')
const router = require('./routes/event.routes.js')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/api/v1',router)




module.exports=app