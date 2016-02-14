///<reference path="../../typings/node/node.d.ts" />
import express= require('express');
import mongoose = require('mongoose');
import logger = require('morgan');
import fs = require('fs');
import path = require('path');
import join = path.join;
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import router = require('./routes/route');

let app = express();
app.set('port', process.env.PORT || 3000); // Set port to 3000 or the provided PORT variable

// to connect to mogo database
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);
connect();
function connect() {
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect('mongodb://localhost:27017/TrackMe', options);
}
 
//to set the view engine and view directory
// app.engine('html',);
// app.set('views', path.join(__dirname, '../public'));
// app.set('view engine', 'ejs');

//app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json());// Parse JSON data and put it into an object which we can access
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text({ type: 'text/plain' }));

//to parse the req body if the response in text format
app.use(function(req, res, next) {
    if (req.headers['content-type'] == "text/plain;charset=UTF-8") {
        req.body = JSON.parse(req.body)
    }
    return next();
});
//routing api
app.use('/api/', router);

//to load  home  page
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/022.html'));
});

//for loggin    
app.use(logger('dev'));
/**
 * Start app
 */
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}!`);
});

module.exports = app;

