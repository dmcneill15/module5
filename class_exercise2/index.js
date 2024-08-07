const express = require('express')
const app = express()
const port = 3000

/*
app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})
    */

app.use('/', express.static('public'))  //fetch files from the public directory

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})