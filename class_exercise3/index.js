//this is our middleware file

//import the routes
const testRoutes = require('./routes/myTestRoutes')

const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))  //fetch files from the public directory

//bind the routes to the app
//can now call localhost:3000/mytest/test
//or localhost:3000/mytest/test2
app.use('/mytest', testRoutes);         

/*app.get('/', (req, res) => {
    res.send('Hello World')
})*/

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})