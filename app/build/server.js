var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/route');
var app = express();
app.set('port', process.env.PORT || 3000);
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);
connect();
function connect() {
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect('mongodb://localhost:27017/TrackMe', options);
}
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text({ type: 'text/plain' }));
app.use(function (req, res, next) {
    if (req.headers['content-type'] == "text/plain;charset=UTF-8") {
        req.body = JSON.parse(req.body);
    }
    return next();
});
app.use('/api/', router);
app.use('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/022.html'));
});
app.use(logger('dev'));
app.listen(app.get('port'), function () {
    console.log("App listening on port " + app.get('port') + "!");
});
module.exports = app;

//# sourceMappingURL=../map/server.js.map
