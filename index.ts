import * as express from 'express';
var app = express();
import handlePush = require('./pushts');
import morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
handlePush(app, '/');

app.listen(8080, function () {
    console.log('app started @8080');
});