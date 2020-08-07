const express=require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const omdbRouter = require('./routes/omdb');
const app = express();

/* Middle Ware */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log("hi");

app.use('/',omdbRouter);
app.listen(3000, function(){
    console.log("Server started on port 3000");
});