const express = require('express');

const app = express();
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
// mongodb
const mongoDB = require('./src/db/db.connection');
// root router
const rootRouter = require('./route.index');
const {PORT,MONGO_URL} = process.env;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false,limit : '10mb' }))

app.use(bodyParser.json({limit: '10mb'}))
// cors
app.use(cors())


// conectar a mongoDB
mongoDB().then(()=>{
    console.log(`Database Connected`)
}).catch(err => console.log(err));

// EJS como el motor de visualización de nuestra aplicación Express
app.set('view engine', 'ejs');

app.get("/v1/check",(req,res)=>{
    return res.send({
        status : true,
        message : 'server is running fine'
    })
})

app.use("/v1",rootRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})