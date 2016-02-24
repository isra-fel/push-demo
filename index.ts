import * as express from 'express';
var app = express();
import handlePush = require('./pushts');
import morgan = require('morgan');
import path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
handlePush(app, '/');

app.listen(8080, function () {
    console.log('app started @8080');
});