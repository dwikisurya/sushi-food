const express = require('express')
const {urlencoded, json} = require('express')
const router = require('./routers')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const docs = require('./docs')
const app = express()


app.use(morgan('dev'))
app.use(cors())

const CONNECTION_URL = "mongodb+srv://user:iamauser@cluster0.91ap8.mongodb.net/example?retryWrites=true&w=majority";
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(CONNECTION_URL, mongooseOptions)


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs))
app.use(json())
app.use(urlencoded({extended: true}))
app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
