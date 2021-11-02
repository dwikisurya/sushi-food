const express = require('express')
const {urlencoded, json} = require('express')
const router = require('./routers')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


app.use(morgan('dev'))
app.use(cors())


const CONNECTION_URL = "mongodb+srv://user:iamauser@cluster0.91ap8.mongodb.net/example?retryWrites=true&w=majority";
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(CONNECTION_URL, mongooseOptions)
const db = mongoose.connection

app.use(json())
app.use(urlencoded({extended: true}))
app.use(router)

var port_number = server.listen(process.env.PORT || 5000);
app.listen(port_number, '0.0.0.0');
