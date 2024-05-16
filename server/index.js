const express = require('express');

const app = express();
const dotenv = require('dotenv');
// middleware body-parser, que se utiliza para analizar las solicitudes HTTP entrantes en Express
const bodyParser = require("body-parser");
// middleware cors, que se utiliza para habilitar el intercambio de recursos entre diferentes dominios en Express.
const cors = require("cors");
// carga las variables de entorno definidas en el archivo .env
dotenv.config();
// mongodb
const mongoDB = require('./src/db/db.connection');
// root router
const rootRouter = require('./route.index');
const {PORT,MONGO_URL} = process.env;
// static

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false,limit : '10mb' }))

// solicitudes JSON con un límite de tamaño de 10MB
app.use(bodyParser.json({limit: '10mb'}))
// cors
app.use(cors())


//  conectar a mongoDB
mongoDB().then(()=>{
    console.log(`Database Connected`)
}).catch(err => console.log(err));

// EJS como el motor de visualización de nuestra aplicación Express para renderizar vistas dinámicas
app.set('view engine', 'ejs');

app.get("/v1/check",(req,res)=>{
    return res.send({
        status : true,
        message : 'server is running'
    })
})

app.use("/v1",rootRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})