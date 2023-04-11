
const express = require("express");
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const app = express();


// db config
const db = require('./config/keys').MongoURI;

// connect mongo
mongoose.connect(db, { useNewUrlParser:true})
    .then(()=> console.log('MONGODB CONNECTED...'))
    .catch(err => console.log(err));
    

// ejs view engine
app.use(expressLayout);
app.set('view engine', 'ejs');

// routes
app.use('/', require("./routes/index"));
app.use('/users', require("./routes/user"));










const PORT = process.env.PORT || 5000;

 app.listen(PORT, console.log(`server listening port ${PORT}`));
