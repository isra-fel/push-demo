"use strict";
var express = require('express');
var app = express();
var handlePush = require('./pushts');
var morgan = require('morgan');
var path = require('path');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
handlePush(app, '/');
app.listen(8080, function () {
    console.log('app started @8080');
});
//# sourceMappingURL=index.js.map