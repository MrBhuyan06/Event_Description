const express=require('express')
const app= express()

app.get('/',(req, res) =>
{
    res.send('Hello Abhishek ')
})




module.exports=app