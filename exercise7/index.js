const app= require('./app');
const port = 3000;

//start the app to listen on the right port 
app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})