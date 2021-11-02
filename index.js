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
const PORT = 3000


app.listen(PORT, _ => {
    db.once('open', () => {
        console.log('Connected to mongoDB')
    })
})