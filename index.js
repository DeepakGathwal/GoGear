const express = require('express')
const cookieParser = require('cookie-parser')
const body = require('body-parser')
const cors = require('cors')
const connection = require('./conn/db')
const dotenv = require('dotenv')
const ErrorHandler = require('./middelwares/error')
dotenv.config({path:'.env'});

const app = express();

  
 
   
app.use(cookieParser())
app.use(express.json())
app.use(body.urlencoded({extended:false}))
connection();


const Posts = require('./routes/Postroute');

app.use('/memories/post',Posts)

app.use(ErrorHandler)


app.listen(8080,() => {
    console.log(`Your Server Running on 8080`);
})
