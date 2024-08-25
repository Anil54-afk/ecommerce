const express = require('express');
const app = express()
const PORT = 4000 
const { mongoDB } = require('./db/conn')

mongoDB()




app.listen(()=>{
    console.log("Server connected",PORT);
})