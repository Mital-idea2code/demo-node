const express = require("express")
const mongoose = require("mongoose")
const userRouter = require('./routes/userRoutes')
const bodyParser = require('body-parser');

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Mital-idea2code:Mital@idea2code@cluster0.wvtbx.mongodb.net/demoNodeApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false })

app.use(userRouter)
app.listen(3000, () => { console.log('Server is running 300....') })
